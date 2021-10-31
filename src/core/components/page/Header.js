import React, {useState} from "react";
import Kamalogo from "../../../assets/imgs/kamall_food_logo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs} from "@fortawesome/free-solid-svg-icons";
import Modal from "../modals/Modal";
import MenuTemplate from "../modals/templates/MenuTemplate";

const Header = () => {
    const [modalState, setModalState] = useState(false);
    const handleShow = () => setModalState(true);

    const handleParamsClick = () => {
        if (!modalState)
            handleShow();
    }

    return (
        <header className="header">
            <img src={Kamalogo} alt="home logo"/>
            <FontAwesomeIcon className="icon" size="2x" icon={faCogs} onClick={handleParamsClick}/>
            <Modal template={MenuTemplate} show={modalState} setModalState={setModalState}/>
        </header>
    )
}

export default Header
