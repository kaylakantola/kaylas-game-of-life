import React from "react";

const Button = ({ gameActive, startGame, rows, genRows }) => {
  if (rows.length === 0) {
    return (
      <button style={{ width: "200px" }} onClick={() => genRows()}>
        generate rows
      </button>
    );
  } else if (rows.length > 0 && gameActive) {
    return (
      <button style={{ width: "200px" }} onClick={() => startGame(false)}>
        end game
      </button>
    );
  } else {
    return (
      <button style={{ width: "200px" }} onClick={() => startGame(true)}>
        start game
      </button>
    );
  }
};

export default Button;
