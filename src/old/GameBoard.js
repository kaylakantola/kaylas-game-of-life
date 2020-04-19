import React, { useState, useEffect } from "react";
import { updateCell } from "../lib";
import { Row, Cell } from "./";

const GameBoard = ({ cellInfo, rows, setRows, gameActive }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column-reverse",
        overflowX: "scroll",
        overflowY: "scroll",
      }}
    >
      {rows.map((row, i) => (
        <Row key={i} height={cellInfo.cellSize}>
          {row.map((cell, i) => (
            <Cell
              key={i}
              cell={{ ...cell, ...cellInfo }}
              rows={rows}
              setRows={setRows}
              gameActive={gameActive}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default GameBoard;
