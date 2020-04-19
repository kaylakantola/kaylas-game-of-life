import { range, last, isEmpty, reduceWhile, add } from "ramda";

const createGenerations = ({ table, maxGens }) => {
  let gens = [];

  const generate = (t) => {
    const lastGen = t;
    const newGen = t.map((row, rowIdx) =>
      row.map((cell, cellIdx) => {
        const topRowIdx = rowIdx + 1;
        const btmRowIdx = rowIdx - 1;
        const leftIdx = cellIdx - 1;
        const rightIdx = cellIdx + 1;

        const topRow = rows[topRowIdx];
        const bottomRow = rows[btmRowIdx];

        const topLeft = topRow[leftIdx];
        const top = topRow[cellIdx];
        const topRight = topRow[rightIdx];
        const left = row[leftIdx];
        const right = row[rightIdx];
        const bottomLeft = bottomRow[leftIdx];
        const bottom = bottomRow[cellIdx];
        const bottomRight = bottomRow[rightIdx];

        const neighbors = [
          leftTop,
          top,
          rightTop,
          left,
          right,
          leftBottom,
          bottom,
          rightBottom,
        ];

        const livingNeighbors = reduceWhile(
          (cell) => cell.alive,
          add,
          0,
          neighbors
        );

        const livingCell = { alive: true };
        const deadCell = { alive: false };

        if (cell.alive) {
          if (livingNeighbors === 2 || livingNeighbors === 3) {
            return livingCell;
          } else {
            return deadCell;
          }
        } else {
          if (livingNeighbors === 3) {
            return livingCell;
          } else {
            return deadCell;
          }
        }
      })
    );
    gens.push(newGen);
    if (gens.length < maxGens) {
      generate(newGen);
    } else {
      return gens;
    }
  };

  const generations = generate(table);
  return generations;
};

export default createGenerations;
