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
    title: 'Weather Project',
    image: '../assets/6EBD4BB1-6ACC-442F-B390-D2C8CB1A9A3E.jpg',
    deployedUrl: 'https://solia26.github.io/Challenge-Weather_ST/',
    repoUrl: 'https://github.com/Solia26/Challenge-Weather_ST',
  },
  {
    title: 'Bird Finder',
    image: '../assets/photo-1486365227551-f3f90034a57c.webp',
    deployedUrl: 'https://alarrabee.github.io/bird-finder/',
    repoUrl: 'https://github.com/alarrabee/bird-finder',
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
