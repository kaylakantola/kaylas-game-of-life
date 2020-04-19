import React from "react";

const Decisions = ({ formData }) => {
  const { nRows, nColumns, cellSize, cellColor } = formData;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Number of Rows:</div>
        <div>{nRows}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Number of Columns:</div>
        <div>{nColumns}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Cell Size:</div>
        <div>{cellSize}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Cell Color:</div>
        <div>{cellColor}</div>
      </div>
    </div>
  );
};

export default Decisions;
