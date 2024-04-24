import React from 'react'
import { Card } from "./Card";
import discord from "../Assets/discord2.svg";
import youtube from "../Assets/youtube2.svg";
import paper from "../Assets/paper.svg";
import blog from "../Assets/blog.svg";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <Card>
        <>
          <div className="social-media-text">
            <h2>
              <span className="highlight">Join</span> our community
            </h2>
          </div>
          <div className="social-media-icons">
            <a href="/">
              <img src={discord} alt="discord" />
            </a>
            <a href="/">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="/">
              <img src={paper} alt="white paper" />
            </a>
            <a href="/">
              <img src={blog} alt="blog" />
            </a>
          </div>
        </>
      </Card>
    </div>
  )
}

export default SocialMedia