import React from 'react';
import bgVideo from './assets/videos/Projects.mp4';
import './Projects.sass';

function Projects({ProjectPageRef}) {
  return (
    <div ref={ProjectPageRef} className="Projects">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Projects;