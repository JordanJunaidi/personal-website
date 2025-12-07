import React from "react";
import FadeInSection from "./FadeInSection";

interface ExperienceItem {
  id: number;
  company: string;
  roles: {
    title: string;
    period: string;
    description: string[];
  }[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Vibes Meet",
      roles: [
        {
          title: "Software Engineering Intern",
          period: "June 2025 - August 2025",
          description: [
            "Identified and resolved critical bugs across the entire stack, from React UI responsiveness and Django API errors to PostgreSQL query failures and CI/CD build issues, strengthening app stability and accelerating release cycles",
            "Restored CI/CD pipeline just 1 hour before an important VC product demo by identifying and resolving a critical backend dependency conflict",
            "Uploaded landing page video assets to an AWS S3 bucket, improving media scalability and availability while offloading bandwidth from application servers",
            "Integrated a third-party exchange-rate API to support international currencies, ensuring a tailored user experience for 200+ active global users",
          ],
        },
      ],
    },
    {
      id: 2,
      company: "Triton Software Engineering",
      roles: [
        {
          title: "Engineering Manager",
          period: "September 2025 - Present",
          description: [
            "Coordinated with executive board to execute fall recruitment drive, attracting 430+ applicants",
            "Led weekly cross-functional team meetings, aligning developers and designers to ensure clear communication, project cohesion, and timely milestone delivery",
          ],
        },
        {
          title: "Full Stack Developer",
          period: "November 2024 - September 2025",
          description: [
            "Developed a cross-platform mobile app pro bono for non-profit organization Psyches of Color focused on raising mental health awareness via interactive activities",
            "Implemented a secure user authentication system using Firebase Auth",
            "Built dynamic UI components and the sign-up flow based on Figma prototypes, integrating RESTful API endpoints for seamless backend integration",
            "Created an animated carousel in React Native and TypeScript, incorporating ref-based scroll handling, custom animation interpolation and state management",
          ],
        },
      ],
    },
    {
      id: 3,
      company: "Intel Corporation",
      roles: [
        {
          title: "Graphics Architecture Intern",
          period: "June 2022 - August 2022",
          description: [
            "Utilized proprietary performance modeling tools to run graphics performance experiments, providing actionable insights to engineering teams for feature optimization",
            "Measured and visualized the impact of cache configurations and ray-tracing features, supporting data-driven design decisions",
            "Presented findings and recommendations with senior graphics architects, influencing the roadmap for next-generation GPU features",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <FadeInSection key={experience.id}>
              <div className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-company">{experience.company}</h3>
                </div>

                {/* Render each role inside the same box */}
                {experience.roles.map((role, index) => (
                  <div key={index} className="experience-role">
                    <h4 className="experience-title">{role.title}</h4>
                    <div className="experience-period">{role.period}</div>
                    <div className="experience-description">
                      <ul>
                        {role.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
