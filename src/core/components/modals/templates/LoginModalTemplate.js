import React from "react";
import LoginForm from "../../Forms/LoginForm";
import {useTranslation} from "react-i18next";

const LoginModalTemplate = ({setSelected}) => {
    const [t] = useTranslation();

    return (
        <div className="login">
            <h4 className="title-login">{t('Se connecter')}</h4>
            <LoginForm setSelected={setSelected} />
        </div>
    )
}

export default LoginModalTemplate;
