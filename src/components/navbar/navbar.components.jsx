import React from "react";

import "./navbar.styles.scss"

import ContactForm from "../contact-form/contact-form.components";
import PopUp from "../pop-up/pop-up.components";

import { useState } from "react";
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
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                        <li>
                            <a className="nav-links" href="" role="button" onClick={() => setButtonPopup(true)}>
                                Contact
                            </a>
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