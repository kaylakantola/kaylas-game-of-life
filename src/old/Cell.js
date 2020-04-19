import React from "react";
import { updateCell } from "../lib";

const Cell = ({ cell, rows, setRows, gameActive }) => {
  const { cellColor, cellSize, rowIdx, colIdx, alive } = cell;
  return (
    <div
      role="button"
      disabled={gameActive}
      onClick={() =>
        updateCell({ rows, alive: !alive, setRows, rowIdx, colIdx })
      }
      style={{
        height: cellSize,
        width: cellSize,
        backgroundColor: alive ? cellColor : "white",
        cursor: gameActive ? "forbidden" : "pointer",
        border: `1px solid ${cellColor}`,
      }}
    />
  );
};

export default Cell;
