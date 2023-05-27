import React from 'react';

const NavMenu = ({ isHidden, sections, handleSectionClick }) => {
  return (
    <div className={`Nav-menu ${isHidden ? 'home-page-animation' : 'fade-home-page-animation'}`}>
      {sections.map((section) => (
        <button key={section.label} id='menu-button' onClick={() => handleSectionClick(section.ref)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default NavMenu;