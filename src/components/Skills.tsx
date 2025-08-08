import React from "react";

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
        "Java",
        "Python",
        "C++",
        "C",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      name: "Frameworks",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "Express.js",
        "Node.js",
        "FastAPI",
        "Flask",
        "Django",
        "TailwindCSS",
      ],
    },
    {
      id: 3,
      name: "Tools & Others",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "supabase",
        "Firebase",
        "Git",
        "Postman",
        "JUnit",
        "Figma",
        "Unix",
        "MacOS",
        "Windows",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
