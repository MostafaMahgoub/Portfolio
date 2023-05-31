import React from 'react';
import bgVideo from './assets/videos/SkillsSection.mp4';
import './SkillsSection.sass';
import Chart from './components/Chart';

function SkillsSection({SkillsPageRef}) {
  return (
    <div ref={SkillsPageRef} className="SkillsSection">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Chart />
    </div>
  );
}

export default SkillsSection;