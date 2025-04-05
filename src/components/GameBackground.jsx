import React from 'react';
import racetrackBg from '../assets/Hue_n 1 2.png';
import './GameBackground.css';

function GameBackground() {
  return (
    <div 
      className="game-background" 
      style={{ backgroundImage: `url(${racetrackBg})` }}
    >
      {/* Add overlay for dark blue tint */}
      <div className="overlay"></div>
    </div>
  );
}

export default GameBackground;