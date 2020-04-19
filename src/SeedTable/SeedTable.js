import React, { useState, useEffect } from "react";
import { update } from "ramda";
import { Row } from "../Row";
import { SeedCell } from "../SeedCell";

const SeedTable = ({ table, setTable }) => {
  const setCell = ({ alive, rowIdx, cellIdx }) => {
    const row = table[rowIdx];
    const newRow = update(cellIdx, { alive }, row);
    const newTable = update(rowIdx, newRow, table);
    setTable(newTable);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {table.map((row, rowIdx) => (
        <Row key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <SeedCell
              key={cellIdx}
              cell={{ ...cell, rowIdx, cellIdx }}
              setCell={setCell}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default SeedTable;
