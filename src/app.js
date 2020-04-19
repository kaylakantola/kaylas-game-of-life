import React, { useState, useEffect } from "react";
import { Gameboard } from "./gameboard";

import rows from "./rows.json";

const App = () => {
  const [gameActive, startGame] = useState(false);
  const [nRows, setNRows] = useState(0);
  const [nColumns, setNColumns] = useState(0);
  const [cellSize, setCellSize] = useState("25px");
  const [cellColor, setCellColor] = useState("green");
  return (
    <div>
      <h1>Kayla's Game of Life</h1>
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
      {gameActive && (
        <Gameboard cellInfo={{ cellSize, cellColor }} rows={rows} />
      )}
    </div>
  );
};
export default App;
