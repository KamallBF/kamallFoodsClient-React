import React, {useEffect} from "react";
import {useMediaQuery} from 'react-responsive'
import {Link, Redirect, Route, Switch} from "react-router-dom";
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

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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
                                        <li><Link className="card-text"
                                                  to="/my-account/personal-data">{t("Données personnelles")}</Link></li>
                                        <li><Link className="card-text"
                                                  to="/my-account/favorites">{t("Restaurants Favoris")}</Link></li>
                                        <li><Link className="card-text" to="/my-account/adresses">{t("Adresses")}</Link>
                                        </li>
                                        <li><Link className="card-text"
                                                  to="/my-account/change-password">{t("Changez le mot de passe")}</Link>
                                        </li>
                                        <li><Link className="card-text" to="/"
                                                  onClick={signOut}>{t("Se déconnecter")}</Link></li>
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
