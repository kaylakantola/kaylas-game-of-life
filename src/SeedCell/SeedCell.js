import React from "react";

const SeedCell = ({ cell, setCell }) => {
  const { rowIdx, cellIdx, alive } = cell;
  return (
    <div
      role="button"
      onClick={() => setCell({ alive: !alive, rowIdx, cellIdx })}
      style={{
        height: "25px",
        width: "25px",
        backgroundColor: alive ? "green" : "white",
        cursor: "pointer",
      }}
    />
  );
};

export default SeedCell;
