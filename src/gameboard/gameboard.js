import React, { useState, useEffect } from "react";
import { Row } from "../Row";
import { Cell } from "../Cell";

const GameBoard = ({ generations }) => {
  const [gen, setGen] = useState(0);

  useEffect(() => {
    if (gen - 1 === generations.length) {
      setTimeout(() => setGen(gen + 1), 1000);
    }
  }, gen);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {generations[gen].map((row, rowIdx) => (
        <Row key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <Cell key={cellIdx} cell={cell} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default GameBoard;
