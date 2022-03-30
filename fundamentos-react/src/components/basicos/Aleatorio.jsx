/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    const {max, min} = props;

    const result = parseInt(Math.random() * (max - min) + min);
    return (
        <h3>Numero aleatorio: {result}</h3>
    )
}