import React from 'react';
import bgVideo from './assets/videos/ContactMe.mp4';
import './ContactMe.sass';

function ContactMe() {
  return (
    <div className="ContactMe">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default ContactMe;