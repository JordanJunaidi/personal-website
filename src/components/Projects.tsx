import React from "react";
import FadeInSection from "./FadeInSection";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  video?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Taco — Open Source Project Scaffolder",
      description:
        "Contributed to an open-source Go CLI that scaffolds full-stack projects in under 3 minutes, improving developer workflow and setup speed. Implemented automated GitHub repo creation using Cobra flags + GitHub API, replacing manual configuration with a streamlined interactive CLI flow.",
      technologies: ["Go", "Cobra", "Survey", "GitHub API"],
      githubUrl: "https://github.com/b-jonathan/taco"
    },
    {
      id: 2,
      title: "AI Fitness Tracker",
      description:
        "Integrated MoveNet-based CV algorithm to analyze exercise form in real time with 95% accuracy. Customized and deployed an LLM chatbot using Gemini API + system prompts to improve user engagement. Developed Flask backend with secure authentication + REST APIs to manage user data in MongoDB.",
      technologies: ["TensorFlow", "MoveNet", "OpenCV", "Gemini API", "Flask", "React", "MongoDB"],
      githubUrl: "https://github.com/LAHacks25/form-fitness",
      video: "https://devpost.com/software/form-fitness-pya478",
    },
    {
      id: 3,
      title: "Facial Recognition System",
      description:
        "Built facial recognition system using ML models (OpenAI CLIP) to embed face images into high-dimensional vectors, achieving 90%+ identity matching accuracy. Deployed PostgreSQL vector database (pgvector) for scalable similarity search + identity matching.",
      technologies: ["OpenCV", "Python", "PyTorch", "NumPy", "PostgreSQL", "pgvector"],
      githubUrl: "https://github.com/JordanJunaidi/facial-recognition",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Projects</h2>
        </FadeInSection>
        <div className="projects-grid">
          {projects.map((project) => (
            <FadeInSection key={project.id}>
              <div className="project-card">
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
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Live
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
