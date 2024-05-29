/*
  File name: Projects.js
  Student's Name: Eunseo Park
  Student ID: 301423139
  Date: May 28, 2024
*/
import React from 'react';

const Projects = () => {

  const imgStyle = {
    width: '500px',
    height: 'auto'
  }
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project">
        <img src="/project.jpg" alt="Project 1" style={imgStyle} />
        <p>My future Project 1 will show up.</p>
      </div>
      <div className="project">
        <img src="/project.jpg" alt="Project 2" style={imgStyle} />
        <p>My future Project 2 will show up.</p>
      </div>
      <div className="project">
        <img src="/project.jpg" alt="Project 3" style={imgStyle} />
        <p>My future Project 3 will show up.</p>
      </div>
    </div>
  );
};

export default Projects;
