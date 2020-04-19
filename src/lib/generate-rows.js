import { range } from "ramda";

const generateRows = ({ nRows, nColumns }) => {
  const rowArr = range(1, nRows);
  const colArr = range(1, nColumns);
  const rows = [
    rowArr.map((r) => {
      colArr.map((col) => ({ alive: true }));
    }),
  ];
  console.log({ rows });
  return rows;
};

export default generateRows;
