import React from "react";
import { updateCell } from "../lib";

const Cell = ({ cell, rows, setRows }) => {
  const { cellColor, cellSize, rowIdx, colIdx, alive } = cell;
  return (
    <div
      role="button"
      onClick={() =>
        updateCell({ rows, alive: !alive, setRows, rowIdx, colIdx })
      }
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
