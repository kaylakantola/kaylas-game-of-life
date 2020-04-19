import React from "react";

const BoardWrapper = ({ children, tableN }) => {
  return (
    <div
      style={{
        width: `${tableN * 25}px`,
        height: `${tableN * 25}px`,
        border: "1px solid green",
      }}
    >
      {children}
    </div>
  );
};

export default BoardWrapper;
