import React from 'react';
import bgVideo from './assets/videos/ContactMe.mp4';
import './ContactMe.sass';

function ContactMe({ContactMePage}) {
  return (
    <div ref={ContactMePage} className="ContactMe">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default ContactMe;