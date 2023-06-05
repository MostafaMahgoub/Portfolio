import React from 'react';
import bgVideo from '../assets/videos/ContactMe.mp4';

function BackgroundVideo() {
  return (
    <video autoPlay muted loop preload="auto" id="bg-video">
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;