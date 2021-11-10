import React from "react";
import SignUpForm from "../../Forms/SignUpForm";
import {useTranslation} from "react-i18next";

const SignUpModalTemplate = ({setSelected}) => {
    const [t] = useTranslation();
    return (
        <div className="signup">
            <h3>{t('S\'inscrire')}</h3>
            <SignUpForm setSelected={setSelected}/>
        </div>
    )
}

export default SignUpModalTemplate;
