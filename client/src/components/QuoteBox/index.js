import React, { Component } from "react";
import "./style.css";

class Quote extends Component {

    state = {
        quote: ""
    }
    
    render() {
        return (
            <div>
                <div className="form-group">
                    <textarea className="form-control quote" onChange={this.handleIncomingQuote} rows="6" value={this.state.quote}>

                    </textarea>
                </div>
            </div>
        );
    }
}

export default Quote;

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