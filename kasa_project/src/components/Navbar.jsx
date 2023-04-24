import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="logo.png" alt="logo"/>
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