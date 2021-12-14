import React, {useEffect, useState} from "react";
import Kamalogo from "../../../assets/imgs/kamall_food_logo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs} from "@fortawesome/free-solid-svg-icons";
import Modal from "../modals/Modal";
import MenuTemplate from "../modals/templates/MenuTemplate";
import LoginModalTemplate from "../modals/templates/LoginModalTemplate";
import SignUpModalTemplate from "../modals/templates/SignUpModalTemplate";
import ForgetPasswordModalTemplate from "../modals/templates/ForgetPasswordTemplate";
import {Link} from "react-router-dom";

const modals = [MenuTemplate, LoginModalTemplate, SignUpModalTemplate, ForgetPasswordModalTemplate];

const Header = () => {
    const [modalState, setModalState] = useState(false);
    const [selected, setSelected] = useState("MenuTemplate"); // selected modal template

    useEffect(() => {
        if (!modalState)
            setSelected("MenuTemplate")
    }, [modalState, selected])

    const handleParamsClick = () => {
        if (!modalState)
            setModalState(true);
    }

    return (
        <header className="header">
            <section className="center-header">
                <Link to="/">
                    <img src={Kamalogo} alt="home logo"/>
                </Link>
                <FontAwesomeIcon className="icon" size="2x" icon={faCogs} onClick={handleParamsClick}/>
            </section>
            {modalState === true ?
                <div>
                    <Modal
                        template={modals[modals.findIndex(el => el.name === selected) === -1 ? 0 : modals.findIndex(el => el.name === selected)]}
                        show={modalState}
                        setModalState={setModalState}
                        setSelected={setSelected}
                    />
                </div>
                : null}
        </header>
    )
}

export default Header
