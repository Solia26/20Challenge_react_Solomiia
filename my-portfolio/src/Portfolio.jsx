import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project 1',
    image: 'path/to/image1.jpg',
    deployedUrl: 'https://link-to-your-project1.com',
    repoUrl: 'https://github.com/yourusername/project1',
  },
  
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
