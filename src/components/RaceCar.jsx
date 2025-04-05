import React from 'react';
import './RaceCar.css';
import carImage from '../assets/logo 1.png';

function RaceCar() {
  return (
    <div className="race-car">
      <img src={carImage} alt="Formula Racing Car" />
      {/* Add water/rain effects */}
      <div className="rain-effects"></div>
    </div>
  );
}

export default RaceCar;