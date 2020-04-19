import React from "react";

const Button = ({ gameActive, startGame }) => {
  return (
    <button style={{ width: "200px" }} onClick={() => startGame(!gameActive)}>
      {gameActive ? "end game" : "start game"}
    </button>
  );
};

export default Button;
