import React from "react";
import {useTranslation} from 'react-i18next';
import {Carousel} from 'react-responsive-carousel';
import {useMediaQuery} from 'react-responsive'

const Content1 = () => {
    const [t] = useTranslation();
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const Wrapper1 = () => (
        <div className="step-wrapper">
            <span className="step-icon-adress" data-icon=""/>
            <span className="step-number">1.</span>
            <span className="step-headline">{t('Adresse')}</span>
            <p className="step-p">{t('Entrez le nom de votre rue ou laissez-nous déterminer votre position.')}</p>
        </div>
    )

    const Wrapper2 = () => (
        <div className="step-wrapper">
            <span className="step-icon-selection" data-icon=""/>
            <span className="step-number">2.</span>
            <span className="step-headline">{t('Sélection')}</span>
            <p className="step-p">{t('Quelles sont vos envies du moment ? Parcourez les menus et les avis clients pour faire votre choix.')}</p>
        </div>
    )

    const Wrapper3 = () => (
        <div className="step-wrapper">
            <span className="step-icon-paiement" data-icon=""/>
            <span className="step-number">3.</span>
            <span className="step-headline">{t('Paiement et livraison')}</span>
            <p className="step-p">{t('Réglez en espèces ou en ligne avec Orange Money, Mobicash. Bon appétit !')}</p>
        </div>
    )

    return (
        <div className="steps-inner">
            <br/>
            <h4 className="steps-subheadline">{t('Comment ça marche ?')}</h4>
            <h3 className="steps-mainheadline">{t('C\'est très simple !')}</h3>
            {isTabletOrMobile &&
                <Carousel useKeyboardArrows={true}
                          showThumbs={false}>
                    <Wrapper1/>
                    <Wrapper2/>
                    <Wrapper3/>
                </Carousel>
            }
            {isDesktopOrLaptop &&
                <div className="wrappers">
                    <Wrapper1/>
                    <Wrapper2/>
                    <Wrapper3/>
                </div>
            }
        </div>
    )
}

export default Content1;
