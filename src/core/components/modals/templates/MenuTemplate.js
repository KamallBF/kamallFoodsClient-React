import React, {useEffect} from "react";
import ProfilePng from "../../../../assets/imgs/profile.png"
import {useTranslation} from 'react-i18next';
import LoginModalTemplate from "./LoginModalTemplate";
import SignUpModalTemplate from "./SignUpModalTemplate";

const MenuTemplate = ({setModalState, setSelected}) => {
    const [t] = useTranslation();
    useEffect(() => {

    })

    return (
        <div className="menu-template">
            <section className="top-content">
                <img className="default-profile" src={ProfilePng} alt="Profile Png"/>
                <div className="profile-data">
                    <span id="myaccount" href="#myaccount">{t('Mon Compte')}</span>
                    <a href="#personnaldata">
                        <span id="personnaldata">{t('Voir mes données personnelles')}</span>
                    </a>
                </div>
                <span onClick={() => setModalState(false)} className="close-button">X</span>
            </section>
            <section className="bottom-content">
                <section className="login-signup-container">
                    <a onClick={() => setSelected(LoginModalTemplate.name)} href="#login" className=" square-a">
                        {t('Se connecter')} </a>
                    <a onClick={() => setSelected(SignUpModalTemplate.name)} href="#register"
                       className="square-a">
                        {t('Créer un compte')} </a>
                </section>

                <ul className="atom-list">
                    <li className="orders"><a href="#orders">
                        {t('Commandes')} </a>
                    </li>
                    <li className="favourites"><a href="#favourites">
                        {t('Favoris')} </a>
                    </li>
                </ul>

                <ul className="atom-list">
                    <li className="points"><a href="#points">
                        {t('Points')} </a></li>
                    <li className="stampcard"><a href="#card">
                        {t('Carte de fidélité')} </a></li>
                    <li className="help"><a href="#help">
                        {t('Besoin d\'aide ?')} </a></li>
                    {/*<li><a href="#login" className="login" >
                        {t('Se connecter')} </a></li>*/}
                </ul>

                <ul className="atom-list">
                    <li className="country"><a href="#country">
                        {t('Pays')} </a></li>
                    <li className="language"><a href="#language">
                        {t('Langue')} </a></li>
                </ul>
            </section>
        </div>
    )
}

export default MenuTemplate;
