import React from "react";
import './styles.css';

export const Badge = (props) => {
    return (
        <div className="card-flyer">
            <div className="tag" >
               {props.text}
            </div>
        </div>
    );
}