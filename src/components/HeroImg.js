import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE ENGINEER</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="./project" className="btn">
            PROJECTS
          </Link>
          <Link to="./contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};
