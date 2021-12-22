import React from "react";
import {useTranslation} from "react-i18next";
import useAuth from "../../api/auth";
import { Field, Form, Formik } from 'formik';
import {Label} from "reactstrap";
import {FormGroup} from "@mui/material";

const PersonalData = () => {
    const [t] = useTranslation();
    const {user} = useAuth();

    return (
        <section className="my-account-content">
            <p className="my-account-title">{t("Données personnelles")}</p>
            <div className="d-flex justify-content-center is-align-content-space-around">
                <Formik
                    initialValues={{ email: '', firstName: '', lastName: '' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {(props) => (
                        <Form className="pt-2">
                            <div className="d-flex">
                                <FormGroup className="px-1">
                                    <Label>{t('Firstname')}</Label>
                                    <Field name="firstName" value={user?.firstname}/>
                                </FormGroup>
                                <FormGroup className="px-3">
                                    <Label>{t('Lastname')}</Label>
                                    <Field name="lastName" value={user?.lastname}/>
                                </FormGroup>
                                <FormGroup className="pb-2">
                                    <Label>{t('Email')}</Label>
                                    <Field type="email" name="email" value={user?.email} />
                                </FormGroup>
                            </div>
                            <button type="button" className="btn btn-primary">{t('Enregistrer')}</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default PersonalData;
