// import React from 'react';
// import Project from '../components/Project';

// const projects = [
//   {
//     title: 'Project 1',
//     image: 'https://placehold.co/600x400',
//     deployedUrl: 'https://link-to-your-project1.com',
//     repoUrl: 'https://github.com/yourusername/project1',
//   },
//   {
//     title: 'Project 2',
//     image: 'https://placehold.co/600x400',
//     deployedUrl: 'https://link-to-your-project1.com',
//     repoUrl: 'https://github.com/yourusername/project1',
//   },
//   {
//     title: 'Project 3',
//     image: 'https://placehold.co/600x400',
//     deployedUrl: 'https://link-to-your-project1.com',
//     repoUrl: 'https://github.com/yourusername/project1',
//   },
//   {
//     title: 'Project 4',
//     image: 'https://placehold.co/600x400',
//     deployedUrl: 'https://link-to-your-project1.com',
//     repoUrl: 'https://github.com/yourusername/project1',
//   },
  
// ];

// const Portfolio = () => {
//   return (
//     <section>
//       <h2>Portfolio</h2>
//       {projects.map((project, index) => (
//         <Project key={index} {...project} />
//       ))}
//     </section>
//   );
// };

// export default Portfolio;

import React from 'react';
import Project from '../components/Project';
import './Portfolio.css'; 

const projects = [
  {
    title: 'Project 1',
    image: 'https://placehold.co/600x400',
    deployedUrl: 'https://link-to-your-project1.com',
    repoUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    image: 'https://placehold.co/600x400',
    deployedUrl: 'https://link-to-your-project1.com',
    repoUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 3',
    image: 'https://placehold.co/600x400',
    deployedUrl: 'https://link-to-your-project1.com',
    repoUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 4',
    image: 'https://placehold.co/600x400',
    deployedUrl: 'https://link-to-your-project1.com',
    repoUrl: 'https://github.com/yourusername/project1',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
