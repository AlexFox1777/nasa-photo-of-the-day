import React from "react"
import "./_main.scss"
import Source from "../Source/Source"
import {Container} from "../../Global"
export default function Main({src, title, text, date}) {
console.log("title ", title);

    return (
        <Container className="container">
            <h1>{title}</h1>
            <div className="source-section">
                <p>{text}</p>
                <div className="source-container">
                    <Source date={date} source={src}/>
                </div>
            </div>


        </Container>
    );
}