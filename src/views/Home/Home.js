import React, {useEffect} from "react";
import HomeContent from "./Content/HomeContent";
import Content1 from "./Content/Content1";
import CookieConsent from "react-cookie-consent";
import {useTranslation} from "react-i18next";
import useModalContext from "../../core/context/modalContext";

const Home = () => {
    const [t] = useTranslation();
    const {setIsInPage} = useModalContext();

    useEffect(() => {
        setIsInPage(false)
    })

    return (
        <>
            <HomeContent/>
            <Content1/>
            <CookieConsent
                style={{background: "#ffffff"}}
                buttonStyle={{color: "#4e503b", fontSize: "13px"}}
            >
                {t('This website uses cookies to enhance the user experience.')}
            </CookieConsent>
        </>
    )
};

export default Home;
