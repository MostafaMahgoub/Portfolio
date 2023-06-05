import React, { useState, useEffect } from 'react';

function TextSlider({ skills }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);

  useEffect(() => {
    const imagesToLoad = skills.map((skill) => skill.icon);
    const newImages = [];

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      newImages.push(img);
    });

    setPreloadedImages(newImages);
  }, [skills]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentTextIndex) =>
        currentTextIndex === skills.length - 1 ? 0 : currentTextIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [skills, preloadedImages]);

  return (
    <div className='text-icon-wrapper'>
      <div className="text-slider">
        <div className='side-text-label'>Experienced in ,</div>
        <div key={skills[currentTextIndex].skillName} className="slide-up">{skills[currentTextIndex].skillName}</div>
      </div>
      <img
        key={skills[currentTextIndex].icon}
        src={skills[currentTextIndex].icon}
        loading="lazy"
        className='icon-3d'
        alt=''
      />
    </div>
  );
}

export default TextSlider;