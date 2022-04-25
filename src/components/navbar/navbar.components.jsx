import React from "react";

import "./navbar.styles.scss"

import ContactForm from "../contact-form/contact-form.components";
import PopUp from "../pop-up/pop-up.components";

import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./menu-items.data";

const Navbar = () => {
        const [buttonPopup, setButtonPopup] = useState(false);

        const [clicked, handleClick] = useState(false);

        return(
            <div className="navbar-container">
                <nav className="navbar-items">
                    <div className="navbar-logo">
                    </div>

                    <div className="hamburger-icon" onClick={() => handleClick(!clicked)}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}

                        <li>
                            <div className="nav-links" role="button" onClick={() => setButtonPopup(true)}>
                                Contact
                            </div>
                        </li>
                    </ul>

                </nav>
                
                <PopUp trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <ContactForm/>
                </PopUp>
            </div>
        )   
    
}

export default Navbar;