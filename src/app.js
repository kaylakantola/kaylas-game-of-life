import React, { useState } from "react";
import { BoardWrapper } from "./BoardWrapper";
import { GameBoard } from "./GameBoard";
import { SeedTable } from "./SeedTable";
import initialTable from "./initial-table";
import { createGenerations } from "./lib";

const App = () => {
  const [table, setTable] = useState(initialTable);
  const [generations, setGenerations] = useState([]);
  const [seeding, setSeeding] = useState(true);

  const toggleBtn = () => {
    if (seeding) {
      setSeeding(false);
      const gens = createGenerations(table);
      setGenerations(gens);
    } else {
      setTable(initialTable);
      setGenerations([]);
      setSeeding(true);
    }
  };

  return (
    <div>
      <h1>Kayla's Game of Life</h1>
      <div
        role="button"
        onClick={toggleBtn}
        style={{
          height: "50px",
          width: "100px",
          border: "1px solid green",
          margin: "1rem",
          cursor: "pointer",
        }}
      >
        {seeding ? "Play" : "Reset"}
      </div>
      <BoardWrapper>
        {seeding && (
          <SeedTable
            setSeeding={setSeeding}
            setGenerations={setGenerations}
            table={table}
            setTable={setTable}
          />
        )}
        {!seeding && <GameBoard generations={generations} />}
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
