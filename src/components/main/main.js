import React from "react"
import "./_main.scss"
import Video from "../video/Video"

export default function Main({videoSrc, title, text, date}) {

    return (
        <div className="container">
            <h1>{title}</h1>
            <div className="video-section">
                <p>{text}</p>
                <Video date={date} video={videoSrc}/>
            </div>


        </div>
    );
}