import React from "react";

const Row = ({ children }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      height: "25px"
    }}
  >
    {children}
  </div>
);

export default Row;
