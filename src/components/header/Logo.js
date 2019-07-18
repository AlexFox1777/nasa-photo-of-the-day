import React from "react";
import styled from "styled-components";

const LogoStyle = styled.img`
  width: 70px;
  height: auto;
`;
export default function Logo({logoUrl}) {
    return (
        <a><LogoStyle className="logo" src={logoUrl}></LogoStyle></a>
    );
}