import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div id="home">
        <div className="profile_name">
          Prakhar Srivastava
          <div className="contact_info">
            <img src="/images/envelope.png" alt="Email icon" />
            emailprakharsrivastava@gmail.com
          </div>
          <div style={{ clear: 'both' }}></div>
          <div className="contact_info">
            <img src="/images/phone.png" alt="Phone icon" />
            +919199899761
          </div>
        </div>
        <div className="topdiv">
          <a className="topmenu" href="#about-me">About Me</a>
          <a className="topmenu" href="#skills">Skills</a>
          <a className="topmenu" href="#projects">Projects</a>
          <a className="topmenu" href="#recommendations">Recommendations</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
