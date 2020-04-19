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
    setCellColor,
    nGens,
    setNGens,
  } = formData;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Number of Rows
        <input
          type="number"
          name="rows"
          value={nRows}
          onChange={(e) => setNRows(parseInt(e.target.value))}
        />
      </label>
      <label>
        Number of Columns
        <input
          type="number"
          name="cols"
          value={nColumns}
          onChange={(e) => setNColumns(parseInt(e.target.value))}
        />
      </label>
      <label>
        Max Generations
        <input
          type="number"
          name="gens"
          value={nGens}
          onChange={(e) => setNGens(parseInt(e.target.value))}
        />
      </label>
      <label>
        Cell Size
        <input
          type="text"
          name="size"
          value={cellSize}
          onChange={(e) => setCellSize(parseInt(e.target.value))}
        />
      </label>
      <label>
        Cell Color
        <input
          type="text"
          name="color"
          value={cellColor}
          onChange={(e) => setCellColor(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Form;
