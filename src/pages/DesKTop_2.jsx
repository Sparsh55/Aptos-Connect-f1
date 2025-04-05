import React from 'react'
import GameBackground from '../components/GameBackground';
import RaceCar from '../components/RaceCar';
import GameMenu from '../components/GameMenu';
import Sidebar from '../components/Sidebar';

const DeskTop_2 = () => {
    return (
        <div className="game-container">
          <GameBackground />
          <div className="game-content">
            <RaceCar />
            <GameMenu />
            <Sidebar/>
          </div>
          {/* <Footer/> */}
        </div>
      );
}

export default DeskTop_2