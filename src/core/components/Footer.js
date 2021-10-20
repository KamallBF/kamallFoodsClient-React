import React from "react";
import Kamalogo from "../../assets/imgs/kamall_food_logo.jpg"

const Footer = () => {
    return (
        <footer>
            <div>
                <img id="logo" src={Kamalogo} alt="footer logo"/>
            </div>
            <div id="infos">
                <div>
                    <p>A PROPOS DE KAMALL FOODS</p>
                    <p>Politiques de confidentialité</p>
                    <p>Conditions d'utilisations</p>
                    <p>Politiques de livraison</p>
                </div>
                <div>
                    <p>OBTENIR DE L'AIDE</p>
                    <p>Créer un compte professionnel</p>
                    <p>Consulter la FAQ's</p>
                    <p>Contactez-nous</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
