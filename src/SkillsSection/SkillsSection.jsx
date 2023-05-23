import React from 'react';
import bgVideo from './assets/videos/SkillsSection.mp4';
import './SkillsSection.sass';

function SkillsSection() {
  return (
    <div className="SkillsSection">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default SkillsSection;