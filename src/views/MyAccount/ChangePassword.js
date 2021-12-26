import React from "react";
import {useTranslation} from "react-i18next";

const ChangePassword = () => {
    const [t] = useTranslation();

    return (
        <section className="my-account-content">
            <p className="my-account-title">{t("Changez le mot de passe")}</p>
        </section>
    )
}

export default ChangePassword;
