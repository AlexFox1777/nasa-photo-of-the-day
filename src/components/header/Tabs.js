import React from "react";
import styled from "styled-components";

const LinkStyle = styled.a`
  color: white;
  text-decoration: none;
   padding: 0 30px 0 30px;
`;

const TabStyle = styled.div`
     display: flex;
      flex-direction: row;
      justify-content: space-around;
`;
export default function Tabs() {
    return (
        <div className="tabs">
            <LinkStyle href="#">Home</LinkStyle>
            <LinkStyle href="#">Go to NASA</LinkStyle>
        </div>
    );
}