import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"
import Logo from "../../assets/logo.png"


export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <Link to="/">
                    {/* <img src="logo.png" alt="logo"/> */}
                    <img src={Logo} alt="logo" className="logo"/>
                </Link>
            </div>
            <div className="navbar_menu">
                <Link to="/">
                    <p>Accueil</p>
                </Link>
                <Link to="/about">
                    <p>À propos</p>
                </Link>
            </div>
        </nav>
    )
}