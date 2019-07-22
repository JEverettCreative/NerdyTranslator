import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 80, textAlign: "center", background: "white" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
