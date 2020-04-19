import React, { useState } from "react";

const useForm = () => {
  const [nRows, setNRows] = useState(0);
  const [nColumns, setNColumns] = useState(0);
  const [cellSize, setCellSize] = useState("25px");
  const [cellColor, setCellColor] = useState("green");

  return {
    nRows,
    setNRows,
    nColumns,
    setNColumns,
    cellSize,
    setCellSize,
    cellColor,
    setCellColor
  };
};

export default useForm;
