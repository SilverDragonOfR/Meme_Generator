import React from "react";
import logo from "../image/logo.png";

function Header()
{
    return(
        <header className="header">

            <img className="header__image" src={logo} alt="Troll Face"/>

            <h2 className="header__title">Meme Generator</h2>

            <h4 className="header__project">Pratik Tripathy</h4>

        </header>
    )
}

export default Header;