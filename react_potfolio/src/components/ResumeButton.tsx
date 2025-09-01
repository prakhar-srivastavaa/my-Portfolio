import React from 'react';
import '../styles/ResumeButton.css';

const ResumeButton: React.FC = () => {
  const downloadResume = () => {
    // Replace this URL with your actual resume link (Google Drive, Dropbox, GitHub, etc.)
    const resumeUrl = 'https://drive.google.com/file/d/1egUGwRPE6XtbLNA-v4fl1E4hrx9l0Nyp/view?usp=drive_link';
    
    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Prakhar_Srivastava_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Resume download initiated');
  };

  return (
    <div className="floating-resume-btn">
      <div className="btn-tab"></div>
      <div className="btn-content" onClick={downloadResume}>
        <div className="btn-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" width="20px" height="20px">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </div>
        <span className="btn-text">Download Resume</span>
      </div>
    </div>
  );
};

export default ResumeButton;
