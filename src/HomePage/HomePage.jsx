import React from 'react';
import bgVideo from './assets/videos/HomePage.mp4';
import './HomePage.sass';

function HomePage() {
  return (
    <div className="HomePage">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomePage;