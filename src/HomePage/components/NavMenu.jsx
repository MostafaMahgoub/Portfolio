import React from 'react';

const NavMenu = ({ isHidden, handleAboutMeClick }) => {
  const buttons = [
    { key: 'About-Me-Key', text: 'About Me', onClick: handleAboutMeClick },
    { key: 'Expertise-Key', text: 'Expertise', onClick: '' },
    { key: 'Projects-Key', text: 'Projects', onClick: '' },
    { key: 'Contact-Me-Key', text: 'Contact Me', onClick: '' },
  ];

  return (
    <div className={`Nav-menu ${isHidden ? 'home-page-animation' : 'fade-home-page-animation'}`}>
      {buttons.map((button) => (
        <button key={button.key} id='menu-button' onClick={button.onClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default NavMenu;