import React from "react";
import {useTranslation} from "react-i18next";

const Adresses = () => {
    const [t] = useTranslation();

    return (
        <section className="my-account-content">
            <p className="my-account-title">{t("Adresses")}</p>
        </section>
    )
}

export default Adresses;
