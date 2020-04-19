import { indexOf, range, filter, isNil } from "ramda";

const nextGeneration = ({
  rows,
  setRows,
  generations,
  setGenerations,
  formData,
}) => {
  const { nColumns, nRows } = formData;

  const cols = range(0, nColumns);
  const deadRow = cols.map((col) => deadCell);
  const deadCell = { alive: false };

  const newRows = rows.map((row, rowIdx) => {
    const lastRowIdx = rowIdx - 1;
    const nextRowIdx = rowIdx + 1;

    const lastRow = isNil(rows[lastRowIdx]) ? deadRow : rows[lastRowIdx];
    const nextRow = isNil(rows[nextRowIdx]) ? deadRow : rows[nextRowIdx];

    const newCells = row.map((cell, cellIdx) => {
      const lastCellIdx = cellIdx - 1;
      const nextCellIdx = cellIdx + 1;

      const leftTop = isNil(lastRow[lastCellIdx])
        ? deadCell
        : lastRow[lastCellIdx];
      const top = isNil(lastRow[cellIdx]) ? deadCell : lastRow[cellIdx];
      const rightTop = isNil(lastRow[nextCellIdx])
        ? deadCell
        : lastRow[nextCellIdx];
      const left = isNil(row[lastCellIdx]) ? deadCell : row[lastCellIdx];
      const right = isNil(row[nextCellIdx]) ? deadCell : row[nextCellIdx];
      const leftBottom = isNil(nextRow[lastCellIdx])
        ? deadCell
        : nextRow[lastCellIdx];
      const bottom = isNil(nextRow[cellIdx]) ? deadCell : nextRow[cellIdx];
      const rightBottom = isNil(nextRow[nextCellIdx])
        ? deadCell
        : nextRow[nextCellIdx];

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

      const livingNeighbors = filter((n) => n.alive, neighbors).length;
      if (cell.alive) {
        if (livingNeighbors === 2 || livingNeighbors === 3) {
          return cell;
        } else {
          const dead = { ...cell, alive: false };
          return dead;
        }
      } else {
        if (livingNeighbors === 3) {
          const alive = { ...cell, alive: true };
          return alive;
        } else {
          return cell;
        }
      }
    });

    return newCells;
  });
  setRows(newRows);
  setGenerations(generations + 1);
};

export default nextGeneration;
