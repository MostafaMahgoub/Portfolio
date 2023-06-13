import React from 'react';
import bgVideo from '../assets/videos/Projects.mp4';

function BackgroundVideo({ProjectsSectionRef}) {
  return (
    <video autoPlay muted loop preload="auto" id="bg-video" ref={ProjectsSectionRef}>
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;