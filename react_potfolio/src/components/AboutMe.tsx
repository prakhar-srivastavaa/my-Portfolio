import React from 'react';
import '../styles/AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="container">
      <div>
        <img src="/images/Remove background project.png" className="profile_image" alt="Prakhar Srivastava" />
      </div>
      <div>
        <h1>
          Hi, I'm Prakhar Srivastava! <img src="/images/waving-hand.png" width="60px" alt="Waving hand" />
        </h1>
        <p>
          Full Stack Developer with hands-on experience in building scalable web applications and cloud-based solutions. 
          Skilled in Java, Spring Boot, React, and modern backend technologies. Delivered real-world projects including 
          an e-commerce platform, NLP translator, and automation systems. Passionate about clean code, API design, 
          and solving real problems with technology.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
