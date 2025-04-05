import React from "react";
import "./SideBar.css";
import fireIcon from '../assets/icon _fire_.png';
import rbImage from '../assets/rb_83650 1.png';

const Sidebar = () => {
  return (
    <div className="SideBarWrapper">
      <div className="frame-container">
        {/* Left Panel with $4000 */}
        <div className="left-panel">
          <span className="money-text">$ 4000</span>
        </div>

        {/* Right Panel with fire icon and 32 */}
        <div className="right-panel">
          <div className="fire-icon">
            <img src={fireIcon} alt="Fire Icon" className="fire-img" />
          </div>
          <span className="number-text">32</span>
        </div>
      </div>

      {/* Daily Rewards Section */}
      <div className="daily-rewards-container">
        <div className="daily-rewards-bg"></div>
        <div 
          className="daily-rewards-icon"
          style={{ backgroundImage: `url(${rbImage})` }}
        ></div>
        <div className="daily-rewards-text">DAILY REWARDS</div>
      </div>
    </div>
  );
};

export default Sidebar;