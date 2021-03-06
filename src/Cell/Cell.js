import React from "react";

const Cell = ({ cell }) => {
  const { alive } = cell;
  return (
    <div
      style={{
        height: "25px",
        width: "25px",
        backgroundColor: alive ? "green" : "white",
      }}
    />
  );
};

export default Cell;
