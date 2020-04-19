import { range, last, isEmpty, reduceWhile, add } from "ramda";

const createGenerations = ({ table, maxGens }) => {
  let gens = [];

  const arr = range(0, 99);
  const deadRow = arr.map((cell) => deadCell);
  const deadCell = { alive: false };

  const generate = (rows) => {
    const newGen = rows.map((row, rowIdx) => {
      const newRow = row.map((cell, cellIdx) => {
        const topRowIdx = rowIdx + 1;
        const btmRowIdx = rowIdx - 1;
        const leftIdx = cellIdx - 1;
        const rightIdx = cellIdx + 1;

        const topRow = topRowIdx > 99 ? deadRow : rows[topRowIdx];
        const bottomRow = btmRowIdx < 0 ? deadRow : rows[btmRowIdx];

        const left = leftIdx < 0 ? deadCell : row[leftIdx];
        const right = rightIdx > 99 ? deadCell : row[rightIdx];

        const topLeft = leftIdx < 0 ? deadCell : topRow[leftIdx];
        const top = topRow[cellIdx];
        const topRight = rightIdx > 99 ? deadCell : topRow[rightIdx];

        const bottomLeft = leftIdx < 0 ? deadCell : bottomRow[leftIdx];
        const bottom = bottomRow[cellIdx];
        const bottomRight = rightIdx > 99 ? deadCell : bottomRow[rightIdx];

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
      });
      return newRow;
    });

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
