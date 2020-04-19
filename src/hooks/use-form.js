import React, { useState } from "react";

const useForm = () => {
  const [nRows, setNRows] = useState(25);
  const [nColumns, setNColumns] = useState(25);
  const [nGens, setNGens] = useState(25);
  const [cellSize, setCellSize] = useState("25px");
  const [cellColor, setCellColor] = useState("green");

  const resetForm = () => {
    setNRows(25);
    setNColumns(25);
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
