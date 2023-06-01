import React, { useState, useEffect } from 'react';

function TextSlider({ skills }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentTextIndex) =>
        currentTextIndex === skills.length - 1 ? 0 : currentTextIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [skills]);

  return (
    <div>
       <div className="text-slider">
         <div className='side-text-label'>Experienced in ,</div>
         <div key={skills[currentTextIndex].skillName} className="slide-up">{skills[currentTextIndex].skillName}</div>
       </div>
       <img key={skills[currentTextIndex].icon} src={skills[currentTextIndex].icon} className='icon-3d' alt='' />
    </div>
  );
}

export default TextSlider;