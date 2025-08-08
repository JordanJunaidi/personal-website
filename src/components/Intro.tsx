import React from "react";
import self from "../assets/self.png";

const Intro: React.FC = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="container">
        <img src={self} alt="Jordan Junaidi" className="intro-image" />
        <div className="intro-content">
          <h1 className="intro-title">
            Hi, I'm <span className="highlight">Jordan</span>
          </h1>
          <h2 className="intro-subtitle">
            Computer Science Student at UC San Diego
          </h2>
          <p className="intro-description">
            I build modern web applications with passion and precision. Let's
            create something amazing together.
          </p>
          <div className="intro-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
