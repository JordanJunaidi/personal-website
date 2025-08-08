import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with a love for creating elegant
              solutions to complex problems. With experience in both frontend
              and backend development, I enjoy building full-stack applications
              that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
