import React, { useState, useEffect } from "react";
import { Row, Cell } from "./";

const GameBoard = ({ rows }) => {
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
        <Row>
          {row.map(cell => (
            <Cell cell={cell} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default GameBoard;
