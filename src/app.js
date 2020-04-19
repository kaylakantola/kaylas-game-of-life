import React, { useState } from "react";
import { BoardWrapper } from "./BoardWrapper";
import { GameBoard } from "./GameBoard";
import { SeedTable } from "./SeedTable";
import initialTable from "./initial-table";
import { createGenerations } from "./lib";

const App = () => {
  const maxGens = 25;
  const [table, setTable] = useState(initialTable);
  const [generations, setGenerations] = useState([]);
  const [gen, setGen] = useState(0);
  const [seeding, setSeeding] = useState(true);

  const toggleBtn = () => {
    if (seeding) {
      setSeeding(false);
      const gens = createGenerations({ table, maxGens });
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
      {!seeding && (
        <h2>
          Generation: {gen}/{generations.length - 1}
        </h2>
      )}
      {seeding && <h2>Select some squares to start, then click play.</h2>}
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
        {!seeding && (
          <GameBoard generations={generations} gen={gen} setGen={setGen} />
        )}
      </BoardWrapper>
    </div>
  );
};
export default App;
