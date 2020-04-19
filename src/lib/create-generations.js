import {
  range,
  last,
  isEmpty,
  reduceWhile,
  add,
  filter,
  unnest,
  all,
} from "ramda";

const livingCell = { alive: true };
const deadCell = { alive: false };

const createGenerations = ({ table, maxGens, tableN }) => {
  let gens = [];

  const generate = (rows) => {
    const newGen = rows.map((row, rowIdx) => {
      const newRow = row.map((cell, cellIdx) => {
        const arr = range(0, tableN);

        const deadRow = arr.map(() => deadCell);

        const topRowIdx = rowIdx + 1;
        const btmRowIdx = rowIdx - 1;
        const leftIdx = cellIdx - 1;
        const rightIdx = cellIdx + 1;

        const topRow = topRowIdx > tableN - 1 ? deadRow : rows[topRowIdx];
        const bottomRow = btmRowIdx < 0 ? deadRow : rows[btmRowIdx];

        const topLeft = leftIdx < 0 ? deadCell : topRow[leftIdx];
        const top = topRow[cellIdx];
        const topRight = rightIdx > tableN - 1 ? deadCell : topRow[rightIdx];

        const left = leftIdx < 0 ? deadCell : row[leftIdx];
        const right = rightIdx > tableN - 1 ? deadCell : row[rightIdx];

        const bottomLeft = leftIdx < 0 ? deadCell : bottomRow[leftIdx];
        const bottom = bottomRow[cellIdx];
        const bottomRight =
          rightIdx > tableN - 1 ? deadCell : bottomRow[rightIdx];

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

        const livingNeighbors = filter((n) => n.alive, neighbors).length;

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

    const unnested = unnest(newGen);
    const extinct = all((v) => !v.alive)(unnested);

    if (extinct || gens.length + 1 > maxGens) {
      return gens;
    } else {
      return generate(newGen);
    }
  };

  return generate(table);
};

export default createGenerations;
