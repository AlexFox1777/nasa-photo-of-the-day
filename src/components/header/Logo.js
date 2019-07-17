import React from "react";


export default function Logo({ logoUrl }){
    return(
                <a ><img className="logo" src={logoUrl} ></img></a>
    );
}