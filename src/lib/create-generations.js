import { range, last, isEmpty } from "ramda";

const createGenerations = (table) => {
  const n = 25;
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
      })
    );
    gens.push(newGen);
    if (gens.length < n) {
      generate(newGen);
    } else {
      return gens;
    }
  };

  const generations = generate(table);
  return generations;
};

export default createGenerations;
