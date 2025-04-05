import React from "react";
import "./GameButton.css";

const GameButton = ({ children }) => {
  return (
    <button className="game-button">
      <span className="gradient-text">{children}</span>
    </button>
  );
};

export default GameButton;
