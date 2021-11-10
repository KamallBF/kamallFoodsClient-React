import React from "react";
import {Card, CardBody, FormGroup, Label} from "reactstrap";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Button from "../Button";
import {useTranslation} from "react-i18next";
import LoginModalTemplate from "../modals/templates/LoginModalTemplate";

const SignUpForm = ({setSelected}) => {
    const [t] = useTranslation();

    const SignupSchema = Yup.object({
        firstname: Yup.string().min(3).max(40).required(),
        lastname: Yup.string().min(3).max(40).required(),
        email: Yup.string().email().required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });

    const initialValues = {
        firstname: '',
        lastname: '',
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
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
                {({errors, touched, handleBlur}) => (
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
                            <Form>
                                <FormGroup>
                                    <Label>{t('Prénom')}</Label>
                                    <Field className="field" name="firstname" type="string"/>
                                    {errors.firstname && touched.firstname ? <div style={{color: "red"}}>{t(`${errors.firstname}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Nom')}</Label>
                                    <Field className="field" name="lastname" type="string"/>
                                    {errors.lastname && touched.lastname ? <div style={{color: "red"}}>{t(`${errors.lastname}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Email')}</Label>
                                    <Field className="field" name="email" type="email"/>
                                    {errors.email && touched.email ? <div style={{color: "red"}}>{t(`${errors.email}`)}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>{t('Mot de passe')}</Label>
                                    <Field className="field" name="password" type="password"/>
                                    {errors.password && touched.password ? (
                                        <div style={{color: "red"}}>{t(`${errors.password}`)}</div>
                                    ) : null}
                                </FormGroup>
                                <div className="bottom-login-signup">
                                    <Button className="square-button" type="submit" >{t('Créer un compte')}</Button>
                                    <a onClick={() => setSelected(LoginModalTemplate.name)} href="#login" >{t('J\'ai déja un compte')}</a>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                )}
            </Formik>
        </Card>
    )
}

export default SignUpForm;
