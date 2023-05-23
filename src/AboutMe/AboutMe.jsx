import React from 'react';
import bgVideo from './assets/videos/AboutMe.mp4';
import './AboutMe.sass';

function AboutMe() {
  return (
    <div className="AboutMe">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default AboutMe;