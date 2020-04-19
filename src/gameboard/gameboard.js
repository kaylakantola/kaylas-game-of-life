import React, { useState, useEffect } from "react";
import { updateCell } from "../lib";
import { Row, Cell } from "./";

const Gameboard = ({ cellInfo, rows, setRows }) => {
  return (
    <div
      style={{
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
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Gameboard;
