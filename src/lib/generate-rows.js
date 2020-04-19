import { range } from "ramda";

const generateRows = ({ nRows, nColumns }) => {
  const rowArr = range(0, nRows);
  const colArr = range(0, nColumns);
  const rows = rowArr.map((r) => colArr.map((col) => ({ alive: true })));
  return rows;
};

export default generateRows;
