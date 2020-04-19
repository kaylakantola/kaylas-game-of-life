import React from "react";

const Form = ({ formData }) => {
  const {
    nRows,
    setNRows,
    nColumns,
    setNColumns,
    cellSize,
    setCellSize,
    cellColor,
    setCellColor
  } = formData;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Number of Rows
        <input
          type="text"
          name="rows"
          value={nRows}
          onChange={e => setNRows(e.target.value)}
        />
      </label>
      <label>
        Number of Columns
        <input
          type="text"
          name="cols"
          value={nColumns}
          onChange={e => setNColumns(e.target.value)}
        />
      </label>
      <label>
        Cell Size
        <input
          type="text"
          name="size"
          value={cellSize}
          onChange={e => setCellSize(e.target.value)}
        />
      </label>
      <label>
        Cell Color
        <input
          type="text"
          name="color"
          value={cellColor}
          onChange={e => setCellColor(e.target.value)}
        />
      </label>
      <button style={{ width: "200px" }} onClick={() => startGame(true)}>
        start game
      </button>
    </div>
  );
};

export default Form;
