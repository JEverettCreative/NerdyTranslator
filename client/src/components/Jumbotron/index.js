import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 60, textAlign: "center", background: "white" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;