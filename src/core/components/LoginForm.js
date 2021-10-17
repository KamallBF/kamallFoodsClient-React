import React from "react";
import {FormGroup, Label, Card, CardBody} from "reactstrap";
import {Formik, Form, Field} from "formik";
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
        <Card>
                <Formik
                    initialValues={initialValues}
                    validationShema={SignupSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label >Email</Label>
                                    <Field className="field" name="email" type="email" />
                                    {/*errors.email && touched.email ? <div>{errors.email}</div> : null*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Field className="field" name="password" />
                                    {/*errors.password && touched.password ? (
                                        <div>{errors.password}</div>
                                    ) : null*/}
                                </FormGroup>
                                <Button className="button-square" type="submit" shape={2}>Submit</Button>
                            </Form>
                        </div>
                    )}
                </Formik>
        </Card>
    )
}

export default LoginForm;
