import React, { useState, useEffect } from "react";
import { Row, Cell } from "./";

const Gameboard = ({ cellInfo, rows }) => {
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
            <Cell key={i} cell={{ ...cell, ...cellInfo }} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Gameboard;
