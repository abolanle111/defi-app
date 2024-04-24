import React from "react";
import hero from "../Assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="hero-info">
        <div className="text">
          <h1>
            The Future of <span className="highlight">Decentralized</span> <br />
            exchange
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed non
            ipsa nulla. Illo possimus  adipisci amet sed qui aliquid consectetur
            ad.
          </p>
          <div className="search">
            <div className="input">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                className="search-input"
                placeholder="search 3000+ tokens across 5 chains..."
              />
            </div>
            <button className="search-btn primary">
              <span className="swap">Swap Now</span>
            </button>
          </div>
          <div className="socials">
            <div className="social-links">
              <a href="/">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div>
            <img className="hero-img" src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
