import React from 'react';
import '../styles/Projects.css';

interface Project {
  title: string;
  details: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      details: [
        'Designed a full-stack e-commerce platform using Spring Boot and React',
        'Used H2 in-memory database with Hibernate ORM for efficient data persistence',
        'Implemented product catalog, user management, and order processing functionality',
        'Created RESTful APIs and tested endpoints using Postman for CRUD operations'
      ]
    },
    {
      title: 'English to Hinglish Translator',
      details: [
        'Developed an English to Hinglish translation model using Transformer architecture and NLP',
        'Fine-tuned Llama 3 with PEFT, LoRA, and quantization for optimal performance',
        'Utilized Unsloth for efficient fine-tuning and deployment'
      ]
    },
    {
      title: 'WhatsApp Auto-Reply System',
      details: [
        'Engineered a Python-based automation using Selenium to handle WhatsApp inquiries',
        'Reduced manual response time by 60% and automated 95% of information delivery tasks',
        'Improved productivity for 100+ students with positive feedback'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div style={{ clear: 'both' }}></div>
      <div id="projects-container" className="projects-container">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="project-card">
              <h3>{project.title}</h3>
              <ul>
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
            {index < projects.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
