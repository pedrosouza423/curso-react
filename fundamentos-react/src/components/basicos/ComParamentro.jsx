import React from "react";

export default function (props){
    console.log(props)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h2>{props.subtitulo}</h2>
            
        </div>
    )
}