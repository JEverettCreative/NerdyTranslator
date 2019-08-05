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

// export function Translation(props) {
//     return (
//         <div>
//             <div className="form-group">
//                 <textarea className="form-control quote" rows="6" value= {props.translated} readOnly>
                   
//                 </textarea>
//             </div>
//         </div>
//     );
// }