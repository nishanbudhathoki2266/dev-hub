import React from "react";
import './card.styles.css';


export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="developers" src={`https://joeschmoe.io/api/v1/${props.developer.id}`} />
            <h2 key={props.developer.id}>{props.developer.name}</h2>
            <p>Email: {props.developer.email}</p>
        </div>
    )
}
