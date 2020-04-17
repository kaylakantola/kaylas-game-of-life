import React, { useState, useEffect } from "react";

const maxRows = 100;

const fillRow = { lastRow };
const GameBoard = () => {
  const [n, setN] = useState(1);
  const [pastRows, setPastRows] = useState([]);
  const [lastRow, setLastRow] = useState([
    { alive: true },
    { alive: true },
    { alive: true },
    { alive: false },
    { alive: false },
    { alive: false },
    { alive: false },
    { alive: true },
    { alive: true },
    { alive: false }
  ]);

  useEffect(() => {
    if (pastRows.length > maxRows) {
      const newRow = fillRow({ lastRow });
      setPastRows([...pastRows, lastRow]);
      setLastRow(newRow);
      setN(n + 1);
    }
  }, [lastRow]);

  return <div>GameBoard</div>;
};
export default GameBoard;
