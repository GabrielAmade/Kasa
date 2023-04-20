import React from "react";
import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="logo.png" alt="logo"/>
            </div>
            <div className="navbar_menu">
                <p>Accueil</p>
                <p>À propos</p>
            </div>
        </nav>
    )
}