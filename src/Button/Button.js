import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      style={{
        margin: "1rem",
        cursor: "pointer",
        border: "1px solid green",
        width: "100px",
        padding: "5px",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
};

export default Button;
