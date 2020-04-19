import { indexOf, range, filter, isNil } from "ramda";

const nextGeneration = ({
  rows,
  setRows,
  generations,
  setGenerations,
  formData,
}) => {
  const { nColumns } = formData;

  const cols = range(0, nColumns);
  const deadRow = cols.map((col) => deadCell);
  const deadCell = { alive: false };

  if (generations <= formData.nGens) {
    const newRows = rows.map((row, rowIdx) => {
      const lastRowIdx = rowIdx - 1;
      const nextRowIdx = rowIdx + 1;

      const lastRow = isNil(rows[lastRowIdx]) ? deadRow : rows[lastRowIdx];
      const nextRow = isNil(rows[nextRowIdx]) ? deadRow : rows[nextRowIdx];

      const newCells = row.map((cell, cellIdx) => {
        const lastCellIdx = cellIdx - 1;
        const nextCellIdx = cellIdx + 1;
        const leftTop = lastRow[lastCellIdx] || deadCell;
        const top = lastRow[cellIdx] || deadCell;
        const rightTop = lastRow[nextCellIdx] || deadCell;
        const left = row[lastCellIdx] || deadCell;
        const right = row[nextCellIdx] || deadCell;
        const leftBottom = nextRow[lastCellIdx] || deadCell;
        const bottom = nextRow[cellIdx] || deadCell;
        const rightBottom = nextRow[nextCellIdx] || deadCell;

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

        const livingNeighbors = filter((n) => n.alive, neighbors);
        const deadNeighbors = 8 - livingNeighbors;

        if (cell.alive) {
          if (livingNeighbors >= 2 && livingNeighbors <= 3) {
            return { ...cell, alive: true };
          } else {
            return { ...cell, alive: false };
          }
        } else {
          if (deadNeighbors === 3) {
            return { ...cell, alive: true };
          }
        }
      });

      return newCells;
    });
    setRows(newRows);
    setGenerations(generations + 1);
  }
};

export default nextGeneration;
