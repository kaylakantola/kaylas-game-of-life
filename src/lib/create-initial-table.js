import { range } from "ramda";
const createInitialTable = (n) => {
  const arr = range(0, n);
  const rows = arr.map((row) => {
    const returnRow = arr.map((cell) => {
      const returnCell = { alive: false };
      return returnCell;
    });
    return returnRow;
  });
  return rows;
};

export default createInitialTable;
