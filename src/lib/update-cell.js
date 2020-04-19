import { update } from "ramda";

const updateCell = ({ rows, rowIdx, colIdx, alive, setRows }) => {
  const existingRow = rows[rowIdx];
  const existingCell = row[colIdx];
  const newCell = { rowIdx, colIdx, alive };
  const newRow = update(colIdx, newCell, existingRow);
  const newRows = update(rowIdx, newRow, rows);
  const rowArr = range(0, nRows);
  const colArr = range(0, nColumns);
  const rows = rowArr.map((r, rowIdx) =>
    colArr.map((col, colIdx) => ({ alive: false, rowIdx, colIdx }))
  );
  setRows(rows);
};

export default updateCell;
