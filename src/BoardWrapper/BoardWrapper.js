import React, { useState, useEffect } from "react";

const BoardWrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "250px",
        height: "250px",
        border: "1px solid green",
      }}
    >
      {children}
    </div>
  );
};

export default BoardWrapper;
