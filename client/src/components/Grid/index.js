import React from "react";

// Exporting the Container, Row, and Col components from this file

// Bootstrap container w/o worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Bootstrap row w/o having to think about class names
export function Row({ fluid, children }) {
  return <div className={`justify-content-center mt-2 mb-2 row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Col component for using bootstrap columns of varying sizes w/ less syntax
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
