import React from "react"
import "./_video.scss"

export default function Video({video, date}) {

    return (
        <div className = "video-container">
            <iframe width="560" height="315" src={video} frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
            </iframe>
            <p>{date}</p>
        </div>

    );
}