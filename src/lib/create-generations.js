import { range, last, isEmpty, reduceWhile, add } from "ramda";

const livingCell = { alive: true };
const deadCell = { alive: false };

const createGenerations = ({ table, maxGens }) => {
  let gens = [];

  const generate = (rows) => {
    console.log("Generate!", gens.length);
    const newGen = rows.map((row, rowIdx) => {
      const newRow = row.map((cell, cellIdx) => {
        const arr = range(0, 10);

        const deadRow = arr.map(() => deadCell);

        const topRowIdx = rowIdx + 1;
        const btmRowIdx = rowIdx - 1;
        const leftIdx = cellIdx - 1;
        const rightIdx = cellIdx + 1;

        const topRow = topRowIdx > 9 ? deadRow : rows[topRowIdx];
        const bottomRow = btmRowIdx < 0 ? deadRow : rows[btmRowIdx];

        const left = leftIdx < 0 ? deadCell : row[leftIdx];
        const right = rightIdx > 9 ? deadCell : row[rightIdx];
        console.log({ leftyDead: leftIdx < 0, left, deadCell });
        const topLeft = leftIdx < 0 ? deadCell : topRow[leftIdx];
        const top = topRow[cellIdx];
        const topRight = rightIdx > 9 ? deadCell : topRow[rightIdx];

        const bottomLeft = leftIdx < 0 ? deadCell : bottomRow[leftIdx];
        const bottom = bottomRow[cellIdx];
        const bottomRight = rightIdx > 9 ? deadCell : bottomRow[rightIdx];

        const neighbors = [
          topLeft,
          top,
          topRight,
          left,
          right,
          bottomLeft,
          bottom,
          bottomRight,
        ];

        const livingNeighbors = reduceWhile(
          (cell) => cell.alive,
          add,
          0,
          neighbors
        );

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
      });
      return newRow;
    });

    gens.push(newGen);

    if (gens.length < maxGens) {
      return generate(newGen);
    } else {
      return gens;
    }
  };

  const generations = generate(table);

  return generations;
};

export default createGenerations;
