import React from "react"
import "./_main.scss"
import Video from "../video/Video"

export default function Main({videoSrc}) {

    return (
        <div className="container">
            <Video video={videoSrc}/>
        </div>
    );
}