import React, { useState } from "react";
import { BoardWrapper } from "./BoardWrapper";
import { GameBoard } from "./GameBoard";
import { SeedTable } from "./SeedTable";

const App = () => {
  const [seeding, setSeeding] = useState(true);
  return (
    <div>
      <h1>Kayla's Game of Life</h1>
      <BoardWrapper>
        {seeding && <SeedTable setSeeding={setSeeding} />}
        {!seeding && <GameBoard />}
      </BoardWrapper>
    </div>
  );
};
export default App;

/*
const [rows, setRows] = useState([]);
const [generations, setGenerations] = useState(0);
const [gameActive, setGameActive] = useState(false);
const formData = useForm();

const genRows = () => {
  const rows = generateRows(formData);
  setRows(rows);
  setGenerations(1);
};

const startGame = (v) => {
  setGameActive(v);
  if (!v) {
    formData.resetForm();
  }
};

const handleNext = () =>
  nextGeneration({
    rows,
    setRows,
    generations,
    setGenerations,
    formData,
  });


  {!gameActive && <Form formData={formData} />}
  {gameActive && <Decisions formData={formData} />}
  <Button
    gameActive={gameActive}
    startGame={startGame}
    rows={rows}
    genRows={genRows}
  />
  {gameActive && <button onClick={() => handleNext()}>next</button>}
  <Gameboard
    cellInfo={{ ...formData }}
    rows={rows}
    setRows={setRows}
    gameActive={gameActive}
  />
*/
