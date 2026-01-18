import React, { useState, useEffect } from "react";
import self from "/self.png";

const phrases = [
  "CS Student @ UC San Diego",
  "Software Engineer",
  "Food Enthusiast",
  "Video Game Enjoyer",
];

const Intro: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro" className="intro-section">
      <div className="container">
        <img src={self} alt="Jordan Junaidi" className="intro-image" />
        <div className="intro-content">
          <div className="intro-badge">Open to opportunities</div>
          <h1 className="intro-title">
            Hi, I'm <span className="highlight">Jordan Junaidi</span>
          </h1>
          <h2 className="intro-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="intro-description">
            Software engineer focused on building scalable products and exploring 
            AI/ML-driven solutions that solve real-world problems.
          </p>
          <div className="intro-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get in touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                window.open("https://github.com/JordanJunaidi", "_blank")
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/jordan-junaidi",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
