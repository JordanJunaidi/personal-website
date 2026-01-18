import React from "react";
import FadeInSection from "./FadeInSection";

interface ExperienceItem {
  id: number;
  company: string;
  location: string;
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
      company: "Triton Software Engineering",
      location: "San Diego, CA",
      roles: [
        {
          title: "Engineering Manager",
          period: "Sept 2025 – Present",
          description: [
            "Lead a team of 15 developers/designers building a full-stack web app visualizing relationships between nonprofit organizations for the David Brower Center",
            "Collaborate in biweekly client meetings with PM + design lead to translate requirements into technical tasks and implementation plans",
          ],
        },
      ],
    },
    {
      id: 2,
      company: "Vibes Meet",
      location: "The Bronx, NY",
      roles: [
        {
          title: "Software Engineer Intern",
          period: "June 2025 – Aug 2025",
          description: [
            "Developed and maintained core features for a creator-focused social networking platform with 200+ global users",
            "Resolved 20+ full-stack production issues (React, Django, PostgreSQL), reducing average resolution time by ~25%",
            "Restored AWS Amplify CI/CD pipeline one hour before a VC demo, ensuring smooth product delivery",
            "Built end-to-end event booking interface with authentication, checkout, and payment systems, accelerating product pivot by ~1 month",
            "Built an interactive creator earnings map with city search + live pricing tooltips using OpenStreetMap + Leaflet/Mapbox, increasing visitor-to-creator conversion rate",
          ],
        },
      ],
    },
    {
      id: 3,
      company: "Intel",
      location: "Folsom, CA",
      roles: [
        {
          title: "High School Intern, Graphics Architecture Team",
          period: "June 2022 – Aug 2022",
          description: [
            "Conducted graphics performance experiments using proprietary modeling tools, delivering insights that guided feature optimization across engineering teams",
            "Created Matplotlib visualizations to analyze cache configuration impact + ray-tracing performance metrics, supporting data-driven decisions for next-gen GPU architecture roadmap",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Experience</h2>
        </FadeInSection>
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <FadeInSection key={experience.id}>
              <div className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-company">{experience.company}</h3>
                  <span className="experience-location">{experience.location}</span>
                </div>

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
