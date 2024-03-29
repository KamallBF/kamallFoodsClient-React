import React, {useEffect} from "react";
import ProfilePng from "../../../../assets/imgs/profile.png"
import {useTranslation} from 'react-i18next';
import LoginModalTemplate from "./LoginModalTemplate";
import SignUpModalTemplate from "./SignUpModalTemplate";
import useAuth from "../../../../api/auth";
import Snack from "../../Snack";

const MenuTemplate = ({setModalState, setSelected, value}) => {
    const [t] = useTranslation();
    const {user, signOut, openSnackbar, setOpenSnackbar} = useAuth();

    useEffect(() => {
        if (openSnackbar !== undefined) {

        }
    })

    return (
        <div className="menu-template">
            <section className="top-content">
                <img className="default-profile" src={ProfilePng} alt="Profile Png"/>
                <div className="profile-data">
                    <span id="myaccount"
                          href="#/myaccount">{user ? user.firstname + " " + user.lastname : t('Mon Compte')}</span>
                    <a href="/my-account">
                        <span id="personnaldata">{t('Voir mes données personnelles')}</span>
                    </a>
                </div>
                <span onClick={() => setModalState(false)} className="close-button">X</span>
            </section>
            <section className="bottom-content">
                <section className="login-signup-container">
                    {
                        user !== undefined ? <></>
                            :
                            <>
                                <a onClick={() => setSelected(LoginModalTemplate.name)} href="#/"
                                   className=" square-a">
                                    {t('Se connecter')} </a>
                                <a onClick={() => setSelected(SignUpModalTemplate.name)} href="#/"
                                   className="square-a">
                                    {t('Créer un compte')} </a>
                            </>
                    }
                </section>
                <ul className="atom-list">
                    <li className="orders"><a href="#/">
                        {t('Commandes')} </a>
                    </li>
                    <li className="favourites"><a href="#/">
                        {t('Favoris')} </a>
                    </li>
                    {
                        user ?
                            <li className="adresses"><a href="#/">
                                {t('Adresses')} </a></li>
                            :
                            <></>
                    }

                </ul>

                <ul className="atom-list">
                    <li className="points"><a href="#/">
                        {t('Points')} </a></li>
                    <li className="stampcard"><a href="#/">
                        {t('Carte de fidélité')} </a></li>
                    <li className="help"><a href="#/">
                        {t('Besoin d\'aide ?')} </a></li>
                    {/*<li><a href="#login" className="login" >
                        {t('Se connecter')} </a></li>*/}
                </ul>

                <ul className="atom-list">
                    <li className="country"><a href="#/">
                        {t('Pays')} </a></li>
                    <li className="language"><a href="#/">
                        {t('Langue')} </a></li>
                </ul>

                {
                    user ?
                        <ul className="atom-list">
                            <li className="logout"><a href="#/" onClick={signOut}>
                                {t('Deconnexion')} </a></li>
                        </ul>
                        :
                        <></>
                }
            </section>
            <Snack handleClose={(event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setOpenSnackbar(false);
            }}
                   vertical="bottom"
                   horizontal="center"
                   open={openSnackbar[0]}
                   autoHideDuration={1500}
                   message={openSnackbar[1]}
                   severity={openSnackbar[2]}/>
        </div>
    )
}

export default MenuTemplate;
