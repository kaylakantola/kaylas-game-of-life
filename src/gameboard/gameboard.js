import React, { useState, useEffect } from "react";
import { Row, Cell } from "./";

const Gameboard = ({ cellInfo, rows }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column-reverse",
        overflowX: "scroll",
        overflowY: "scroll"
      }}
    >
      {rows.map(row => (
        <Row height={cellInfo.cellSize}>
          {row.map(cell => (
            <Cell cell={{ ...cell, ...cellInfo }} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Gameboard;
