import React from "react";
import Kamalogo from "../../assets/imgs/kamall_food_logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCogs} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
      <header className="header">
        <img src={Kamalogo} alt="home logo" />
          <FontAwesomeIcon id="icon" icon={faCogs}/>
      </header>
  )
}

export default Header
