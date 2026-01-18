import React from "react";
import FadeInSection from "./FadeInSection";

interface SkillCategory {
  id: number;
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      name: "Languages",
      skills: [
        "Python",
        "Go",
        "TypeScript",
        "JavaScript",
        "Java",
        "C",
        "C++",
        "SQL",
        "HTML/CSS",
        "MATLAB",
      ],
    },
    {
      id: 2,
      name: "Web / Backend",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "Flask",
        "Django",
        "Postman",
        "PostgreSQL",
        "NoSQL",
      ],
    },
    {
      id: 3,
      name: "AI / ML",
      skills: [
        "NumPy",
        "pandas",
        "Matplotlib",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "seaborn",
        "scikit-learn",
      ],
    },
    {
      id: 4,
      name: "Infra / DevOps",
      skills: [
        "Git",
        "GitHub",
        "Agile",
        "Scrum",
        "AWS Amplify",
        "Vercel",
        "CI/CD",
        "Linux",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Skills</h2>
        </FadeInSection>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <FadeInSection key={category.id}>
              <div className="skill-category">
                <h3 className="category-title">{category.name}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
