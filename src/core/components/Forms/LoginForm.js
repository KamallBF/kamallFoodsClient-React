import React from "react";
import {Card, CardBody, FormGroup, Label} from "reactstrap";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Button from "../Button";
import {useTranslation} from "react-i18next";
import SignUpModalTemplate from "../modals/templates/SignUpModalTemplate";
import ForgetPasswordModalTemplate from "../modals/templates/ForgetPasswordTemplate";

const LoginForm = ({setSelected}) => {
    const [t] = useTranslation();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log(values);
    }

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
                                    <i className="fa fa-google fa-lg" />
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
                                    {errors.email && touched.email ? <div style={{color: "red"}}>{t(`${errors.email}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <div className="mdp-login">
                                        <Label>{t('Mot de passe')}</Label>
                                        <a href="#forgot" onClick={() => setSelected(ForgetPasswordModalTemplate.name)}>{t('Mot de passe oublié ?')}</a>
                                    </div>
                                    <Field as="input" className="field" name="password" type="password"/>
                                    {errors.password && touched.password ? (
                                        <div style={{color: "red"}}>{t(`${errors.password}`)}</div>
                                    ) : null}
                                </FormGroup>
                                <div className="bottom-login-signup">
                                    <Button className="square-button" textSize="15px" textColor="white" type="submit" >{t('Se connecter')}</Button>
                                    <a onClick={() => setSelected(SignUpModalTemplate.name)} href="#register" >{t('Créer un compte')}</a>
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
