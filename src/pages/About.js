/*
  File name: About.js
  Student's Name: Eunseo Park
  Student ID: 301423139
  Date: May 28, 2024
*/
import React from 'react';

const About = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img src="/about.jpg" alt="Eunseo Park" />
      <p>Hello, My name is Eunseo Park.</p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
    </div>
  );
};

export default About;
