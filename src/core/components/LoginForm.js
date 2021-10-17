import React from "react";
import {Card, CardBody, FormGroup, Label} from "reactstrap";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Button from "./Button";

const LoginForm = () => {

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
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
        <Card className="login">
            <Formik
                initialValues={initialValues}
                validationShema={SignupSchema}
                onSubmit={onSubmit}
            >
                {({errors, touched}) => (
                    <Card id="loginBody">
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Field className="field" name="email" type="email"/>
                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Field className="field" name="password"/>
                                    {errors.password && touched.password ? (
                                        <div>{errors.password}</div>
                                    ) : null}
                                </FormGroup>
                                <Button className="button-square" type="submit" shape={2}>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                )}
            </Formik>
        </Card>
    )
}

export default LoginForm;
