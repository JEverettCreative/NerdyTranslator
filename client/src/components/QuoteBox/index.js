import React from "react";
import "./style.css";

export function Quote(props) {
    return (
        <div>
            <div className="form-group">
                <textarea className="form-control quote" rows="6" >
                    {props.quote}
                </textarea>
            </div>
        </div>
    );
}

export function Translation(props) {
    return (
        <div>
            <div className="form-group">
                <textarea className="form-control quote" rows="6" readOnly>
                    {props.translated}
                </textarea>
            </div>
        </div>
    );
}