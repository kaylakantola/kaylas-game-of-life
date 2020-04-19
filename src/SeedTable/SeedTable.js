import React, { useState, useEffect } from "react";
import { Row } from "../Row";
import { Cell } from "../Cell";
import initialTable from "./initial-table";

const SeedTable = ({ setSeeding, setGenerations }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {initialTable.map((row) => (
        <Row>
          {row.map((cell) => (
            <Cell cell={cell} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default SeedTable;
