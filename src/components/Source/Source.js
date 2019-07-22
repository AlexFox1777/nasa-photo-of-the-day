import React from "react"
import nasa from "./astronomy.jpg"
import styled from "styled-components";

const ImgStyle = styled.img`
  max-height: 320px;
  width: auto;
`;

export default function Source({source, date}) {

    console.log(source.slice(0, 23));
    console.log("url ", source === "");

    if(source.slice(0, 23) === "https://www.youtube.com/"){
        return (
            <div>
                <iframe width="560" height="315" src={source} frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
                <p>{date}</p>
            </div>
        );
    }else return (
        <ImgStyle className="nasa-img" alt="nasa" size='small' src={source === "" ? nasa : source} />
    );

}


