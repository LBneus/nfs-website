import React, { useState, useEffect } from "react";
import "./navbar.styles.scss"
import ContactForm from "../contact-form/contact-form.components";
import PopUp from "../pop-up/pop-up.components";
import { Link } from "react-router-dom";
import sanityClient from './../../client.js'

const Navbar = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    const [clicked, handleClick] = useState(false);
    const [menuItems, setMenuItems] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "menuItems"]{item, route, index} | order(index asc)`).then((data) => {
            setMenuItems(data)
        }).catch(console.error)
    }, []);

        return(
            <div className="navbar-container">
                <nav className="navbar-items">
                    <div className="navbar-logo">
                    </div>

                    <div className="hamburger-icon" onClick={() => handleClick(!clicked)}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        {menuItems && menuItems.map((item, index) => (
                                    item.item != "Contact" ?
                                            <li key={index}>
                                                <Link className="nav-links" to={item.route}>
                                                    {item.item}
                                                </Link>
                                            </li>
                                        :
                                            <li key={index}>
                                                <div className="nav-links" role="button" onClick={() => setButtonPopup(true)}>
                                                    {item.item}
                                </div>
                                            </li>
                                        )
                            )}
                        </ul>
                </nav>
                
                <PopUp trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <ContactForm/>
                </PopUp>
            </div>
        )   
    
}

export default Navbar;