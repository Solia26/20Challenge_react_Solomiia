import React from 'react';
import './AboutMe.css'; 

import myImage from "../assets/6EBD4BB1-6ACC-442F-B390-D2C8CB1A9A3E.jpg"

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <h2>About Me</h2>
      <img src={myImage} alt="Your Avatar" />
      <p>I'm Ukrainian legal assistant who is trying to change a carrier</p>
    </section>
  );
};

export default AboutMe;
