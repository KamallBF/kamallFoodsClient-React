import React, {useState} from "react";
import {Card, CardBody, FormGroup, Label} from "reactstrap";
import {Field, Form, Formik} from "formik";
import Button from "../../core/components/Button";
import LoginModalTemplate from "../../core/components/modals/templates/LoginModalTemplate";
import Snack from "../../core/components/Snack";
import * as Yup from "yup";
import {baseApi} from "../../api/calls";
import {useTranslation} from "react-i18next";
import useAuth from "../../api/auth";
import useModalContext from "../../core/context/modalContext";

const RegisterProfessional = () => {
    const [t] = useTranslation();
    const [openSnackbar, setOpenSnackbar] = useState([false, "", "error"]);
    const [loading, setLoading] = useState(false);
    const {setAccountCreationValidation} = useAuth()
    //const [isInPage, setIsInPage] = useState(false);
    const {isInPage, setIsInPage} = useModalContext();
    const [selected, setSelected] = useState();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar([false, openSnackbar[1]]);
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const SignupSchema = Yup.object({
        firstname: Yup.string().min(3).max(40).required(),
        lastname: Yup.string().min(3).max(40).required(),
        email: Yup.string().email().required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required(),
        restaurantName: Yup.string().required()
    });

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phoneNumber: '',
        restaurantName: ''
    }

    const onSubmit = async values => {
        setLoading(true);
        await baseApi.post('Restaurant/register', values).then(res => {
            /* setLoading(false)
             setOpenSnackbar([true, res.data.message, "success"]);*/
        }).catch((err) => {
            /* setLoading(false);
             setOpenSnackbar([true, err.response.data.error, "error"]);*/
        })
    }

    return (
        <Card>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
                {({errors, touched}) => (
                    <Card id="login-signup-body">
                        <CardBody>
                            <div className="buttons-fg">
                                <Button textColor="#000000"
                                        backgroundColor="#e7e7e7"
                                        textSize="15px"
                                >
                                    <i className="fa fa-google fa-lg"/>
                                    {t('Se connecter avec Google')}
                                </Button>
                                <Button textColor="#FFFFFF"
                                        backgroundColor="#125fca"
                                        textSize="15px"
                                >
                                    {t('Se connecter avec Meta')}
                                </Button>
                            </div>
                            <Form>
                                <FormGroup>
                                    <Label>{t('Prénom')}</Label>
                                    <Field className="field" name="firstname" type="string"/>
                                    {errors.firstname && touched.firstname ?
                                        <div className="errs">{t(`${errors.firstname}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Nom')}</Label>
                                    <Field className="field" name="lastname" type="string"/>
                                    {errors.lastname && touched.lastname ?
                                        <div className="errs">{t(`${errors.lastname}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Numéro de téléphone')}</Label>
                                    <Field className="field" name="phone" type="string"/>
                                    {errors.phoneNumber && touched.phoneNumber ?
                                        <div className="errs">{t(`${errors.phoneNumber}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Nom du restaurant')}</Label>
                                    <Field className="field" name="restaurantName" type="string"/>
                                    {errors.restaurantName && touched.restaurantName ?
                                        <div className="errs">{t(`${errors.restaurantName}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Email')}</Label>
                                    <Field className="field" name="email" type="email"/>
                                    {errors.email && touched.email ?
                                        <div className="errs">{t(`${errors.email}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Mot de passe')}</Label>
                                    <Field className="field" name="password" type="password"/>
                                    {errors.password && touched.password ? (
                                        <div className="errs">{t(`${errors.password}`)}</div>
                                    ) : null}
                                </FormGroup>
                                <div className="bottom-login-signup">
                                    <Button disabled={loading} className="square-button" type="submit">
                                        {loading && (
                                            <i
                                                className="fa fa-refresh fa-spin"
                                                style={{marginRight: "5px"}}
                                            />
                                        )}
                                        {!loading && t('Créer un compte')}
                                        {loading && t('Création')}
                                    </Button>
                                    {
                                        isInPage ? <a href="/login">{t('J\'ai déja un compte')}</a>
                                            :
                                            <a onClick={() => setSelected(LoginModalTemplate.name)}
                                               href="#login">{t('J\'ai déja un compte')}</a>
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

export default RegisterProfessional;
