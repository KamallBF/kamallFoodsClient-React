import React from "react";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {Card} from "react-bootstrap";
import {CardBody, FormGroup, Label} from "reactstrap";
import Button from "../Button";
import MenuTemplate from "../modals/templates/MenuTemplate";

const ForgetPassword = ({setSelected}) => {
    const [t] = useTranslation();

    const ForgetPasswordSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required')
    });

    const initialValues = {
        email: ''
    }

    const onSubmit = values => {
        console.log(values);
    }

    return (
        <Card className="login">
            <Formik
                initialValues={initialValues}
                validationSchema={ForgetPasswordSchema}
                onSubmit={onSubmit}
            >
                {({errors, touched}) =>
                    (
                        <Card id="login-signup-body">
                            <CardBody>
                                <Form className="form-login">
                                    <FormGroup className="">
                                        <Label>{t('Email')}</Label>
                                        <Field as="input" className="field" name="email" type="email"/>
                                        {errors.email && touched.email ?
                                            <div className="errs">{t(`${errors.email}`)}</div> : null}
                                    </FormGroup>
                                    <div className="bottom-login-signup">
                                        <Button className="square-button" textSize="15px" textColor="white"
                                                type="submit">{t('Envoyer')}</Button>
                                        <a onClick={() => setSelected(MenuTemplate.name)} href="#home">{t('Retour')}</a>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    )}
            </Formik>
        </Card>
    )
}

export default ForgetPassword;
