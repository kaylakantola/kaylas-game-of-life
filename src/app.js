import React from "react";
import { Gameboard } from "./gameboard";
import rows from "./rows.json";

const App = () => {
  return (
    <div>
      <h1>Kayla's Game of Life</h1>
      <Gameboard rows={rows} />
    </div>
  );
};
export default App;
