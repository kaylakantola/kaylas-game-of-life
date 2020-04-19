import { update } from "ramda";

const updateCell = ({ rows, setRows, rowIdx, colIdx, alive }) => {
  const existingRow = rows[rowIdx];
  const existingCell = existingRow[colIdx];
  const newCell = { rowIdx, colIdx, alive };
  const newRow = update(colIdx, newCell, existingRow);
  const newRows = update(rowIdx, newRow, rows);

  setRows(newRows);
};

export default updateCell;
