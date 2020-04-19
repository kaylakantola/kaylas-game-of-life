import React, { useState } from "react";
import { BoardWrapper } from "./BoardWrapper";
import { Button } from "./Button";
import { CreateTable } from "./CreateTable";
import { SeedTable } from "./SeedTable";
import { GameBoard } from "./GameBoard";

import { createGenerations, createInitialTable } from "./lib";

const App = () => {
  const [step, setStep] = useState("initialize");

  const [maxGens, setMaxGens] = useState(25);
  const [tableN, setTableN] = useState(25);

  const [table, setTable] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [gen, setGen] = useState(0);

  const createTable = () => {
    const iT = createInitialTable(tableN);
    setTable(iT);
    setStep("seed");
  };

  const setSeeds = () => {
    const gens = createGenerations({ table, maxGens, tableN });
    setGenerations(gens);
    setStep("play");
  };

  const resetTable = () => {
    setMaxGens(25);
    setTableN(25);
    setTable([]);
    setGenerations([]);
    setGen(0);
    setStep("initialize");
  };

  const renderHeader = () => {
    switch (step) {
      case "initialize":
        return <h2>Pick your starter values.</h2>;
      case "seed":
        return <h2>Select some squares to start, then click play.</h2>;
      case "play":
        return (
          <h2>
            Generation: {gen}/{generations.length - 1}
          </h2>
        );
    }
  };

  const renderButton = () => {
    switch (step) {
      case "initialize":
        return <Button onClick={() => createTable()} text="Create Board" />;
      case "seed":
        return <Button onClick={() => setSeeds()} text="Play Game" />;
      case "play":
        return <Button onClick={() => resetTable()} text="Reset Board" />;
      default:
        return <Button onClick={() => resetTable()} text="Reset Board" />;
    }
  };

  const renderBoard = () => {
    switch (step) {
      case "initialize":
        return (
          <CreateTable
            setMaxGens={setMaxGens}
            setTableN={setTableN}
            maxGens={maxGens}
            tableN={tableN}
          />
        );
      case "seed":
        return <SeedTable table={table} setTable={setTable} />;
      case "play":
        return (
          <GameBoard generations={generations} gen={gen} setGen={setGen} />
        );

      default:
        return (
          <CreateTable
            setMaxGens={setMaxGens}
            setTableN={setTableN}
            maxGens={maxGens}
            tableN={tableN}
          />
        );
    }
  };
  return (
    <div>
      <h1>Kayla's Game of Life</h1>
      {renderHeader()}
      {renderButton()}
      <BoardWrapper tableN={tableN}>{renderBoard()}</BoardWrapper>
    </div>
  );
};
export default App;
