import React from "react"
import styled from "styled-components"

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background: #61dafb;
  color: white;
`;
export default function Footer() {

    return (
      <FooterStyle className="footer">
        <p>Have fun <span>🚀</span>!</p>
      </FooterStyle>
    );
}