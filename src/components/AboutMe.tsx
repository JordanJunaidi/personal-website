import React from "react";
import FadeInSection from "./FadeInSection";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">About Me</h2>
        </FadeInSection>
        <FadeInSection>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a <strong>Computer Science student at UC San Diego</strong> (Expected June 2027) 
                with a <strong>3.98 GPA</strong>. I'm passionate about building software that 
                makes a real impact—from social platforms serving hundreds of users to AI-powered 
                applications that push the boundaries of what's possible.
              </p>
              <p>
                My experience spans full-stack development at startups, graphics architecture 
                at Intel, and leading engineering teams. I thrive in fast-paced environments 
                where I can learn quickly and ship meaningful products.
              </p>
              <p>
                <strong>Relevant Coursework:</strong> Data Structures & Algorithms, 
                Machine Learning, Computer Vision, Systems Programming, Computer Organization, 
                Object-Oriented Programming, Data Science, Statistics
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutMe;
