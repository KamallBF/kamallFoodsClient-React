import React from "react";
import {useMediaQuery} from 'react-responsive'
import {Redirect, Route, Switch} from "react-router-dom";
import PersonalData from "./PersonalData";
import {useTranslation} from "react-i18next";
import Addresses from "./Adresses";
import Favourites from "./Favourites";
import ChangePassword from "./ChangePassword";
import useAuth from "../../api/auth";


const MyAccount = () => {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const [t] = useTranslation();
    const {signOut} = useAuth();

    return (
        <>
            <section className="account-image justify-content-center">
                <h1 className="display-1">{t("Mon compte")}</h1>
            </section>
            {
                isTabletOrMobile &&
                <section>

                </section>
            }
            {
                isDesktopOrLaptop &&
                <section className="desktop-view-account-page">
                    <div className="desktop-view-account container">
                        <div className="account-steps">
                            <div className="card" style={{width: "18em"}}>
                                <div className="card-body align-self-center">
                                    <h5 className="card-title">{t("Mon compte")}</h5>
                                    <ul>
                                        <li><a className="card-text"
                                               href="/my-account/personal-data">{t("Données personnelles")}</a></li>
                                        <li><a className="card-text"
                                               href="/my-account/favorites">{t("Restaurants Favoris")}</a></li>
                                        <li><a className="card-text" href="/my-account/adresses">{t("Adresses")}</a>
                                        </li>
                                        <li><a className="card-text"
                                               href="/my-account/change-password">{t("Changez le mot de passe")}</a>
                                        </li>
                                        <li><a className="card-text" href="/"
                                               onClick={signOut}>{t("Se déconnecter")}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="account-steps-visual">
                            <Switch>
                                <Route exact path={["/my-account/personal-data", "/my-account"]}
                                       component={PersonalData}/>
                                <Route path="/my-account/adresses" component={Addresses}/>
                                <Route path="/my-account/favorites" component={Favourites}/>
                                <Route path="/my-account/change-password" component={ChangePassword}/>
                                <Redirect to="/my-account"/>
                            </Switch>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default MyAccount;
