const createInitialTable = (n) => {
  const arr = range(0, n);
  const rows = arr.map((row) =>
    arr.map((cell) => {
      alive: false;
    })
  );
  return rows;
};

export default createInitialTable;
