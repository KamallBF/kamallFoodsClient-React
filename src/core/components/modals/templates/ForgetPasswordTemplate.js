import React from "react";
import {useTranslation} from "react-i18next";
import ForgetPasswordForm from "../../Forms/ForgetPasswordForm";

const ForgetPasswordModalTemplate = ({setSelected}) => {
    const [t] = useTranslation();

    return (
        <div className="forget-password">
            <h4 className="title-forget-password">{t('Réinitialiser le mot de passe')}</h4>
            <ForgetPasswordForm setSelected={setSelected}/>
        </div>
    )
}

export default ForgetPasswordModalTemplate;
