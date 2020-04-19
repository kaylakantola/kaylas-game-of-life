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
      {gameActive && (
        <Gameboard cellInfo={{ cellSize, cellColor }} rows={rows} />
      )}
    </div>
  );
};
export default App;
