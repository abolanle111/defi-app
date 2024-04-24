import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../Assets/icons/menu.svg";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <>
      <div className="header">
        <div className="logo">CoinQuest</div>
        <div className="nav">
          <div className="nav-links">
            <a href="/">App</a>
            <a href="/">Products</a>
            <a href="/">Build</a>
            <a href="/">Careers</a>
            <a href="/">About</a>
          </div>
        </div>
        <div className="wallet-btn">
          <button className="primary">Enter App</button>
        </div>
        <button className="hamburger" onClick={toggleExpanded}>
          <MenuIcon />
        </button>
      </div>
      {isExpanded && (
        <div className="nav-overlay">
          <div className="nav-links">
            <a href="/">App</a>
            <a href="/">Products</a>
            <a href="/">Build</a>
            <a href="/">Careers</a>
            <a href="/">About</a>
            <a href="/">Enter App</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;