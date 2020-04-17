import React, { useState, useEffect } from "react";

const initialLastRow = [
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false }
];

const initialCurrentRow = [
  { alive: true },
  { alive: true },
  { alive: false },
  { alive: true },
  { alive: true },
  { alive: true },
  { alive: false },
  { alive: false },
  { alive: true },
  { alive: true }
];
const maxRows = 9;

const checkRules = family => {
  const familyMembers = Object.keys(family);
  const { me } = family;
  const livingNeighbors = familyMembers.filter(f => {
    const alive = family[f] ? family[f].alive : false;
    const notMe = f !== "me";
    return alive && notMe;
  }).length;

  if (me.alive) {
    // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    return livingNeighbors >= 2 && livingNeighbors <= 3;
  } else {
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    return livingNeighbors === 3;
  }
};

const fillRow = ({ last, current }) => {
  const nextRow = current.map((item, i) => {
    const family = {
      left: current[i - 1],
      me: current[i],
      right: current[i + 1],
      bottomLeft: last[i - 1],
      bottom: last[i],
      bottomRight: last[i + 1]
    };
    const alive = checkRules(family);
    return { alive };
  });
  return nextRow;
};

const GameBoard = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const play = () => {
    console.log("playing!");
    let allRows = [];
    let lastRow = initialLastRow;
    let currentRow = initialCurrentRow;

    const okGo = ({ last, current }) => {
      console.log("go!");
      const newRow = fillRow({ last, current });
      allRows.push(lastRow);
      lastRow = currentRow;
      currentRow = newRow;
      if (allRows.length - 1 < maxRows) {
        okGo({ last: lastRow, current: currentRow });
      } else {
        const rows = allRows.slice(1);
        console.log({ rows });
        setLoading(false);
        setRows(rows);
      }
    };
    okGo({ last: lastRow, current: currentRow });
  };

  useEffect(() => {
    play();
  }, []); //eslint-disable-line

  return (
    <div>
      <div
        style={{
          width: "1000px",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {loading && <div>LOADING!</div>}
        {!loading && rows.map(row => <Row row={row} />)}
      </div>
    </div>
  );
};

const Row = ({ row }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row"
      }}
    >
      {row.map(item => (
        <div
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid red",
            backgroundColor: item.alive ? "black" : "white"
          }}
        ></div>
      ))}
    </div>
  );
};
export default GameBoard;
