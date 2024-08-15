import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <a href="path/to/your/resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies:</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </section>
  );
};

export default Resume;

