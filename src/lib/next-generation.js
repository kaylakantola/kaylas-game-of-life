import { indexOf, range } from "ramda";

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
    const newRows = rows.map((row) => {
      const lastRow = rows[indexOf(row - 1, rows)] || deadRow;
      const nextRow = rows[indexOf(row + 1, rows)] || deadRow;
      const newCells = row.map((cell) => {
        const leftTop = lastRow[indexOf(cell - 1, row)] || deadCell;
        const top = lastRow[indexOf(cell, row)] || deadCell;
        const rightTop = lastRow[indexOf(cell + 1, row)] || deadCell;
        const left = row[indexOf(cell - 1, row)] || deadCell;
        const right = row[indexOf(cell + 1, row)] || deadCell;
        const leftBottom = next[indexOf(cell - 1, row)] || deadCell;
        const bottom = next[indexOf(cell, row)] || deadCell;
        const rightBottom = next[indexOf(cell + 1, row)] || deadCell;

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
    setGenerations(generations + 1);
    setRows(newRows);
  }
};

export default nextGeneration;
