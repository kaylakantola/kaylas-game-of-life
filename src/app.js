import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Gameboard } from "./gameboard";
import { Form } from "./form";
import { useForm } from "./hooks";
import rows from "./rows.json";

const App = () => {
  const [gameActive, startGame] = useState(false);
  const formData = useForm();
  return (
    <div>
      <h1>Kayla's Game of Life</h1>
      {!gameActive && <Form />}
      <Button gameActive={gameActive} startGame={startGame} />
      {gameActive && <Gameboard cellInfo={{ ...formData }} rows={rows} />}
    </div>
  );
};
export default App;
