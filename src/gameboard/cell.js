import React from "react";

const Cell = ({ cell }) => {
  const { alive, cellColor, cellSize } = cell;
  return (
    <div
      style={{
        height: cellSize,
        width: cellSize,
        backgroundColor: alive ? cellColor : "white",
      }}
    />
  );
};

export default Cell;
