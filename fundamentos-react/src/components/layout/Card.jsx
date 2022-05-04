/* eslint-disable import/no-anonymous-default-export */
import "./Card.css";
import React from 'react';

export default props => {
    return(
        <div className="Card">
            <div className="title">{props.title}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}