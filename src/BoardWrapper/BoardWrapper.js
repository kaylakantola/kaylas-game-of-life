import React, { useState, useEffect } from "react";

const BoardWrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "2500px",
        height: "2500px",
        border: "1px solid green",
      }}
    >
      {children}
    </div>
  );
};

export default BoardWrapper;
