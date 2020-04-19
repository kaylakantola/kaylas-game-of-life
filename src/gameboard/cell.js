import React from "react";

const Cell = ({ cell }) => (
  <div
    style={{
      height: "25px",
      width: "25px",
      backgroundColor: cell.alive ? "green" : "white",
      border: `1px solid ${cell.alive ? "white" : "green"}`
    }}
  />
);

export default Cell;
