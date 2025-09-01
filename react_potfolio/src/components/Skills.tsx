import React from 'react';
import '../styles/Skills.css';

interface Skill {
  name: string;
  level: string;
  image: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 'Intermediate', image: '/images/html5.png' },
    { name: 'CSS', level: 'Intermediate', image: '/images/CSS3.png' },
    { name: 'JavaScript', level: 'Intermediate', image: '/images/js.jpeg' },
    { name: 'Java', level: 'Intermediate', image: '/images/java.png' },
    { name: 'Spring Boot', level: 'Intermediate', image: '/images/springboot.png' },
    { name: 'React', level: 'Intermediate', image: '/images/react.png' }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{ clear: 'both' }}></div>
      <div className="all_skills">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.image} alt={skill.name} />
            <h6>{skill.name}</h6>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
