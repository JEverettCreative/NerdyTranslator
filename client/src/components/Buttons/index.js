import React from "react";
import "./style.css";

export function LargeBtn(props) {
    return (
        <button className="btn btn-lg large-btn" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export function MediumBtn(props) {
    return (
        <button className="btn btn-md" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

// Return to this one later for quite specific styling
export function ClipboardBtn(props) {
    return (
        <button className="btn" onClick={props.onClick}>
            {/* This should be an icon, not text */}
        </button>
    )
}