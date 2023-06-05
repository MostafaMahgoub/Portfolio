import React from 'react';

function ProjectDescription({ showProjects, children }) {
  return (
    <p className={`projects-description ${showProjects ? 'slide-left' : ''}`}>
      {children}
    </p>
  );
}

export default ProjectDescription;
