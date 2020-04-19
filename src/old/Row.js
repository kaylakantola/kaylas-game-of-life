import React from "react";

const Row = ({ children, height }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      height
    }}
  >
    {children}
  </div>
);

export default Row;
