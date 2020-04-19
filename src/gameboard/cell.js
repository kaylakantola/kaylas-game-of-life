import React, { useState } from "react";

const Cell = ({ cell }) => {
  const [alive, setAlive] = useState(cell.alive);
  const { cellColor, cellSize } = cell;
  return (
    <div
      role="button"
      onClick={() => setAlive(!alive)}
      style={{
        height: cellSize,
        width: cellSize,
        backgroundColor: alive ? cellColor : "white",
        cursor: "pointer",
        border: `1px solid ${cellColor}`,
      }}
    />
  );
};

export default Cell;
