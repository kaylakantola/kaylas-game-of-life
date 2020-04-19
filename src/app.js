import React, { useState, useEffect } from "react";
import { unnest, filter } from "ramda";
import { Button } from "./button";
import { Decisions } from "./decisions";
import { Gameboard } from "./gameboard";
import { Form } from "./form";
import { useForm } from "./hooks";
import { generateRows, nextGeneration } from "./lib";

const App = () => {
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

  useEffect(() => {
    if (generations > 0 && generations <= formData.nGens && gameActive) {
      setTimeout(
        () =>
          nextGeneration({
            rows,
            setRows,
            generations,
            setGenerations,
            formData,
          }),
        2000
      );
    }
  }, [generations, gameActive]);

  useEffect(() => {
    const flattened = unnest(rows);
    const theLiving = filter((f) => f.alive, flattened);
    if (theLiving.length < 1) {
      setGameActive(false);
    }
  }, [rows]);

  return (
    <div>
      <h1>Kayla's Game of Life</h1>
      <h2>Game Active: {gameActive.toString()}</h2>
      <h2>Generations: {generations}</h2>
      {!gameActive && <Form formData={formData} />}
      {gameActive && <Decisions formData={formData} />}
      <Button
        gameActive={gameActive}
        startGame={startGame}
        rows={rows}
        genRows={genRows}
      />
      <Gameboard cellInfo={{ ...formData }} rows={rows} setRows={setRows} />
    </div>
  );
};
export default App;
