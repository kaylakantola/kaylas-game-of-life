import React, { useState } from "react";

const useForm = () => {
  const [nRows, setNRows] = useState(10);
  const [nColumns, setNColumns] = useState(10);
  const [nGens, setNGens] = useState(10);
  const [cellSize, setCellSize] = useState("25px");
  const [cellColor, setCellColor] = useState("green");

  const resetForm = () => {
    setNRows(10);
    setNColumns(10);
    setNGens(10);
    setCellSize("25px");
    setCellColor("green");
  };
  return {
    nRows,
    setNRows,
    nColumns,
    setNColumns,
    nGens,
    setNGens,
    cellSize,
    setCellSize,
    cellColor,
    setCellColor,
    resetForm,
  };
};

export default useForm;
