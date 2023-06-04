import React from 'react';
import GITHUB_ICON from '../assets/icons/github-mark.svg';
import LINKEDIN_ICON from '../assets/icons/linkedin.svg';

const IconsMenu = ({ isHidden }) => {
  return (
    <div className={`icons-menu ${isHidden ? 'home-page-animation' : 'fade-home-page-animation'}`}>
      <a href='https://github.com/MostafaMahgoub' target="_blank" rel="noreferrer"><img src={GITHUB_ICON} alt="GitHub Icon" className="icon" loading="lazy" /></a>
      <a href='https://www.linkedin.com/in/mostafa-reda-4650b922b/' target="_blank" rel="noreferrer"><img src={LINKEDIN_ICON} alt="LinkedIn Icon" className="icon" loading="lazy" /></a>
    </div>
  );
};


export default IconsMenu;