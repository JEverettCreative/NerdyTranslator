import React from "react";
import "./style.css";

function QuoteBox(props) {
        return (
            <div>
                <div className="form-group">
                   {props.children}
                </div>
            </div>
        );
    }


export default QuoteBox;
