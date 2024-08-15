// import React from 'react';

// const Project = ({ title, image, deployedUrl, repoUrl }) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <img src={image} alt={title} />
//       <a href={deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed App</a>
//       <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
//     </div>
//   );
// };

// export default Project;


import React from 'react';
import './Project.css'; // Importing the CSS

const Project = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div className="project-container">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
