import React from "react";
import Logo from "./Logo"
import Tabs from "./Tabs"
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
    flex-direction: row;
    align-items: center;
    background: #61dafb;
    color: white;
    height: 70px;
    justify-content: space-between;
    padding: 0 100px 0 100px;
`;


export default function Header(){
    return(
      <header className="header">
        <NavStyle className = "nav-bar">
            <Logo logoUrl={"https://api.nasa.gov/images/logo.png"}/>
            <Tabs />
        </NavStyle>
      </header>
    );
}