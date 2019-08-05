import React from "react";
import "./style.css";

function TranslateCard(props) {
    return (
        <div onClick={() => props.chooseLanguage(props.id)} className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
      </div>
    )
}

export default TranslateCard;