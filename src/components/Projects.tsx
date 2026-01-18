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
        "A Go CLI tool that gets full-stack projects up and running in under 3 minutes. I added automated GitHub repo creation—instead of manually setting things up, you just answer a few prompts and it handles the rest via the GitHub API.",
      technologies: ["Go", "Cobra", "Survey", "GitHub API"],
      githubUrl: "https://github.com/b-jonathan/taco"
    },
    {
      id: 2,
      title: "AI Fitness Tracker",
      description:
        "A fitness app that watches your form in real-time using computer vision. It uses MoveNet to track your body and flags when your form breaks down (95% accuracy). Also built an AI coach powered by Gemini that gives personalized feedback and tips.",
      technologies: ["TensorFlow", "MoveNet", "OpenCV", "Gemini API", "Flask", "React", "MongoDB"],
      githubUrl: "https://github.com/LAHacks25/form-fitness",
      video: "https://devpost.com/software/form-fitness-pya478",
    },
    {
      id: 3,
      title: "Facial Recognition System",
      description:
        "An identity matching system that converts faces into vector embeddings using OpenAI's CLIP model, then stores them in a PostgreSQL vector database for fast similarity search. Achieves 90%+ accuracy on identity matching.",
      technologies: ["OpenCV", "Python", "PyTorch", "NumPy", "PostgreSQL", "pgvector"],
      githubUrl: "https://github.com/JordanJunaidi/facial-recognition",
    },
    {
      id: 4,
      title: "Psyches of Color",
      description:
        "A mobile app built with a full team of developers and designers at Triton Software Engineering. The app helps destigmatize mental health in Black and Latinx communities through interactive activities, resources, and community support features.",
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase"],
      githubUrl: "https://github.com/TritonSE/Psyches-Of-Color-App",
      liveUrl: "https://psyches-of-color.vercel.app",
    },
    {
      id: 5,
      title: "Quizski",
      description:
        "A gamified study platform built in 24 hours at DiamondHacks (UCSD's annual hackathon). Students earn points by creating and studying flashcards, then spend them on a gacha system to collect Smiskis. Learning meets blind box addiction.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Auth0", "Gemini API"],
      githubUrl: "https://github.com/JordanJunaidi/Quizki",
      liveUrl: "https://quizski.vercel.app",
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
