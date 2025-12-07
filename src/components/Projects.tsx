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
      title: "Open Source Project Scaffolder",
      description:
        "Go-based CLI tool that scaffolds full-stack projects in minutes, automating repo creation, template setup, and GitHub configuration to streamline onboarding and development workflows.",
      technologies: ["Go", "Cobra", "Survey", "GitHub API", "CLI"],
      // TODO: Add your real repo link here
      // githubUrl: "https://github.com/your-username/your-repo",
    },
    {
      id: 2,
      title: "Facial Recognition System",
      description:
        "End-to-end facial recognition pipeline using deep embeddings, enabling face enrollment and lookup with persistent storage and a simple search interface for identity verification.",
      technologies: [
        "OpenCV",
        "PyTorch",
        "Pillow",
        "NumPy",
        "PostgreSQL",
        "imgbeddings",
        "psycopg2",
      ],
      githubUrl: "https://github.com/JordanJunaidi/facial-recognition",
    },
    {
      id: 3,
      title: "AI Fitness Tracker",
      description:
        "AI-powered fitness tracker that uses Google MoveNet pose estimation to analyze user movements and provide real-time feedback on form and technique for common exercises.",
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
      id: 4,
      title: "Quizski: Gamified Learning Platform",
      description:
        "Gamified flashcard platform where students earn points by studying, unlock rewards, and generate AI-assisted flashcards to make exam prep more engaging and personalized.",
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
      id: 5,
      title: "Psyches of Color",
      description:
        "Mobile app built for non-profit Psyches of Color to promote mental health awareness through journaling, interactive activities, and a mobile-first experience designed for students of color.",
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
                      href={project.video}
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
