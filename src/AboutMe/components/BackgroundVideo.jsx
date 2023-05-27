import React from 'react';
import bgVideo from '../assets/videos/AboutMe.mp4';

function BackgroundVideo() {
  return (
    <video autoPlay muted loop id="bg-video">
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
