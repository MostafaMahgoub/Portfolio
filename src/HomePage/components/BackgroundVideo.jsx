import React from 'react';
import BACKGROUND_VIDEO from '../assets/videos/HomePage.mp4';

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop preload="auto" id="bg-video">
      <source src={BACKGROUND_VIDEO} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;