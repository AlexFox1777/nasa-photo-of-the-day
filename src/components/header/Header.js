import React from "react";
import Logo from "./Logo"
import Tabs from "./Tabs"
import "./_header.scss"

export default function Header(){
    return(
      <header className="header">
        <nav className = "nav-bar">
            <Logo logoUrl={"https://api.nasa.gov/images/logo.png"}/>
            <Tabs />
        </nav>
      </header>
    );
}