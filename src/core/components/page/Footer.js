import React from "react";
import Kamalogo from "../../../assets/imgs/kamall_food_logo.jpg"
import {useTranslation} from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation();
    return (
        <footer>
            <div>
                <img id="logo" src={Kamalogo} alt="footer logo"/>
            </div>
            <div id="infos">
                <div>
                    <p>{t('A PROPOS DE KAMALL FOODS')}</p>
                    <p>{t('Politiques de confidentialité')}</p>
                    <p>{t('Conditions d\'utilisation')}s</p>
                    <p>{t('Politiques de livraison')}</p>
                </div>
                <div>
                    <p>{t('OBTENIR DE L\'AIDE')}</p>
                    <p>{t('Créer un compte professionnel')}</p>
                    <p>{t('Consulter la FAQ\'s')}</p>
                    <p>{t('Contactez - nous')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
