const nextGeneration = ({
  rows,
  setRows,
  generations,
  setGenerations,
  formData,
}) => {
  if (generations <= formData.nGens) {
    setGenerations(generations + 1);
  }

  return [];
};

export default nextGeneration;
