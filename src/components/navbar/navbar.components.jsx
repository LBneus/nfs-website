import React from "react";

import "./navbar.styles.scss"

import { MenuItems } from "./menu-items.data";

class Navbar extends React.Component{

    state = { clicked : false};

    handleClick = () => {
        this.setState({clicked : !this.state.clicked});
    }

    render(){
        return(
            <div className="navbar-container">
                <nav className="navbar-items">
                    <div className="navbar-logo"> VU ISIS </div>

                    <div className="hamburger-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                    </ul>
                </nav>
                
            </div>
        )   
    }   
}

export default Navbar;