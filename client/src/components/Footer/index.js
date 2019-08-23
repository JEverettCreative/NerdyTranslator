import React from "react";
import "./style.css"

function Footer(props) {
    return (
        <nav className="navbar fixed-bottom" style={props.style}>
            {props.text}
        </nav>
    )
}

export default Footer;