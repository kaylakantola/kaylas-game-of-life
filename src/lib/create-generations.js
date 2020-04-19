import { range, last, isEmpty } from "ramda";

const createGenerations = (table) => {
  const n = 25;
  let gens = [];

  const generate = (t) => {
    const lastGen = t;
    const newGen = t.map((row, rowIdx) =>
      row.map((cell, cellIdx) => {
        console.log({ cell });
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
