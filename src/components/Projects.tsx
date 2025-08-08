import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  video?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Fitness Tracker",
      description:
        "An AI-Powered Fitness Tracker that utilizes Google MoveNet to track user's movements and provide feedback on their form and technique.",
      technologies: [
        "React",
        "Flask",
        "TensorFlow",
        "OpenCV",
        "MoveNet",
        "Google Gemini API",
      ],
      githubUrl: "https://github.com/LAHacks25/form-fitness",
      video: "https://devpost.com/software/form-fitness-pya478",
    },
    {
      id: 2,
      title: "Quizski: Gamified Learning Platform",
      description:
        "A gamified flashcard-based learning platform where users can earn points by studying, which can then be used to trade in for prizes (Smiski) in order to make studying a much more engaging and rewarding experience!",
      technologies: [
        "React",
        "TypeScript",
        "Google Gemini API",
        "MongoDB",
        "OAuth",
      ],
      githubUrl: "https://github.com/DiamondHacksTeam/Quizki",
      video:
        "https://devpost.com/software/quizme-bjn8dk?_gl=1*1pwjgpu*_gcl_au*MTYxNTg2MTM2NS4xNzU0NjExNTk1*_ga*MTM1OTQwNjk2MS4xNzU0NjExNTk1*_ga_0YHJK3Y10M*czE3NTQ2MTE1OTQkbzEkZzEkdDE3NTQ2MTE2MTIkajQyJGwwJGgw",
    },
    {
      id: 3,
      title: "Psyches of Color",
      description:
        "A mobile app built for non-profit organization Psyches of Color that is aimed at raising mental health awareness.",
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      githubUrl: "https://github.com/TritonSE/Psyches-Of-Color-App",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Video Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
