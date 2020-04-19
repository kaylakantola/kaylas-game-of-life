import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      style={{
        margin: "1rem",
        cursor: "pointer",
      }}
    >
      {text}
    </div>
  );
};

export default Button;
