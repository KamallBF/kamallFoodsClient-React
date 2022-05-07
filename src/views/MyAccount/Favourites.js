import React from "react";
import {useTranslation} from "react-i18next";

const Favourites = () => {
    const [t] = useTranslation();
    return (
        <section className="my-account-content">
            <p className="my-account-title">{t("Restaurants Favoris")}</p>
        </section>
    )
}

export default Favourites;
