import React from "react";
import {useTranslation} from "react-i18next";

const HomeContent = () => {
    const [t] = useTranslation();

    return (
        <section className="homeContent">
            <span className="cssanimation sequence fadeInBottom display-1 welcome-span">
                {t('Commander et recevez directement à votre domicile')}
            </span>
        </section>
    )
}

export default HomeContent;
