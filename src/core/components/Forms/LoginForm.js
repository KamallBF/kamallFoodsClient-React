import React, {useEffect, useState} from "react";
import {Card, CardBody, FormGroup, Label} from "reactstrap";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Button from "../Button";
import {useTranslation} from "react-i18next";
import SignUpModalTemplate from "../modals/templates/SignUpModalTemplate";
import ForgetPasswordModalTemplate from "../modals/templates/ForgetPasswordTemplate";
import {baseApi} from "../../../api/calls";
import Snack from "../Snack";
import MenuTemplate from "../modals/templates/MenuTemplate";
import useAuth from "../../../api/auth";
import useModalContext from "../../context/modalContext";

const LoginForm = ({setSelected}) => {
    const [t] = useTranslation();
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState([false, "Connexion Réussi", "warning"]);
    const {getUserAfterLogin, accountCreationValidation, setAccountCreationValidation} = useAuth();
    //const [isInPage, setIsInPage] = useState(false);
    const {isInPage, setIsInPage} = useModalContext();

    useEffect(() => {
        if (window.location.href.includes("/login"))
            setIsInPage(true);
    }, [setIsInPage])

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/,
                "Must Contain 8 Characters")
    });

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = async values => {
        setLoading(true);
        await baseApi.post('Auth/login', values).then(res => {
            getUserAfterLogin();
            setLoading(false);
            setOpenSnackbar([true, res.data, "success"])
        },).catch(err => {
            setLoading(false);
            if (err.response.data.error === "This account is not verified yet, please check your mailbox")
                setAccountCreationValidation(true);
            setOpenSnackbar([true, err.response.data.error, "error"])
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar([false, openSnackbar[1]]);
    };

    useEffect(() => {
        if (openSnackbar[0]) {
            setTimeout(() => {
                if (openSnackbar[2] === "success") {
                    setSelected(MenuTemplate.name);
                    setAccountCreationValidation(false);
                    if (isInPage)
                        window.location.replace("/")
                }
            }, 1500);
        }
    })

    return (
        <Card>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={onSubmit}
            >
                {({errors, touched}) => (
                    <Card id="login-signup-body">
                        <CardBody>
                            <div className="buttons-fg">
                                <Button textColor="#000000"
                                        backgroundColor="#e7e7e7"
                                        textSize="15px">
                                    <i className="fa fa-google fa-lg"/>
                                    {t('Se connecter avec Google')}
                                </Button>
                                <Button textColor="#FFFFFF"
                                        backgroundColor="#125fca"
                                        textSize="15px">
                                    {t('Se connecter avec Meta')}
                                </Button>
                            </div>
                            <Form className="form-login">
                                <FormGroup>
                                    <Label>{t('Email')}</Label>
                                    <Field as="input" className="field" name="email" type="email"/>
                                    {errors.email && touched.email ?
                                        <div className="errs">{t(`${errors.email}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <div className="mdp-login">
                                        <Label>{t('Mot de passe')}</Label>
                                        {
                                            isInPage ? <a href="/forgot-password">{t('Mot de passe oublié ?')}</a>
                                                :
                                                <a href="#forgot"
                                                   onClick={() => setSelected(ForgetPasswordModalTemplate.name)}>{t('Mot de passe oublié ?')}</a>
                                        }
                                    </div>
                                    <Field as="input" className="field" name="password" type="password"/>
                                    {errors.password && touched.password ? (
                                        <div className="errs">{t(`${errors.password}`)}</div>
                                    ) : null}
                                </FormGroup>
                                <div className="bottom-login-signup">
                                    <Button disabled={loading}  textSize="15px"
                                            textColor="white"
                                            type="submit">
                                        {loading && (
                                            <i
                                                className="fa fa-refresh fa-spin"
                                                style={{marginRight: "5px"}}
                                            />
                                        )}
                                        {!loading && t('Se connecter')}
                                        {loading && t('Connexion en cours...')}

                                    </Button>
                                    {
                                        isInPage ? <a href="/register">{t('Créer un compte')}</a>
                                            :
                                            <a onClick={() => setSelected(SignUpModalTemplate.name)}
                                               href="#register">{t('Créer un compte')}</a>
                                    }
                                    {
                                        (accountCreationValidation) &&
                                        <div className="alert alert-info" role="alert">
                                            {t("Un email de validation vous a été envoyé. Vérifiez votre compte avant de vous connecter")}
                                        </div>
                                    }
                                    <Snack handleClose={handleClose}
                                           vertical="bottom"
                                           horizontal="center"
                                           open={openSnackbar[0]}
                                           message={openSnackbar[1]}
                                           severity={openSnackbar[2]}
                                    />
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                )}
            </Formik>
        </Card>
    )
}

export default LoginForm;
