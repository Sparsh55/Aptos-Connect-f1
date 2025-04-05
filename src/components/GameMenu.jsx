import React from "react";
import "./GameMenu.css";
// import gameLogo from '../assets/logo 1.png';
import GameButton from "./GameButton";
function GameMenu() {
  return (
    <div className="game-menu">
      <div className="menu-buttons">
        <GameButton>ENTER GAME</GameButton>
        <GameButton>DISCONNECT WALLET</GameButton>
      </div>
    </div>
  );
}

export default GameMenu;
