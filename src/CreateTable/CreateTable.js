import React from "react";

const CreateTable = ({ setMaxGens, setTableN, maxGens, tableN }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
      }}
    >
      <div style={{ flexDirection: "row", width: "100%" }}>
        <button role="button" onClick={() => setMaxGens(maxGens - 1)}>
          less
        </button>
        <div>{maxGens}</div>
        <button role="button" onClick={() => setMaxGens(maxGens + 1)}>
          more
        </button>
      </div>
      <div style={{ flexDirection: "row", width: "100%" }}>
        <button role="button" onClick={() => setTableN(tableN - 1)}>
          less
        </button>
        <div>{tableN}</div>
        <button role="button" onClick={() => setTableN(tableN + 1)}>
          more
        </button>
      </div>
    </div>
  );
};

export default CreateTable;
