import React, { useState, useEffect } from "react";
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

  const startGame = (v) => {
    setGameActive(v);
    if (v) {
      const rows = generateRows(formData);
      setRows(rows);
      setGenerations(1);
    } else {
      formData.resetForm();
    }
  };

  useEffect(() => {
    if (generations > 0) {
      setTimeout(
        () =>
          nextGeneration({
            rows,
            setRows,
            generations,
            setGenerations,
            formData,
          }),
        1000
      );
    }
  }, [generations]);
  return (
    <div>
      <h1>Kayla's Game of Life</h1>
      <h2>Generations: {generations}</h2>
      {!gameActive && <Form formData={formData} />}
      {gameActive && <Decisions formData={formData} />}
      <Button gameActive={gameActive} startGame={startGame} />
      {gameActive && <Gameboard cellInfo={{ ...formData }} rows={rows} />}
    </div>
  );
};
export default App;
