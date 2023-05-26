import React from 'react';
import './HomePage.sass';
import BackgroundVideo from './components/BackgroundVideo';
import SwitchButton from './components/SwitchButton';
import NavMenu from './components/NavMenu';
import IconsMenu from './components/IconsMenu';
import NeonWrapperTxt from './components/NeonWrapperTxt';

const HomePage = ({ isHidden, setIsHidden, AboutMePageRef, homePageRef }) => {
  const handleAboutMeClick = () => {
    AboutMePageRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickNav = () => {
    homePageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="HomePage" ref={homePageRef}>
      <BackgroundVideo />
      <SwitchButton isHidden={isHidden} setIsHidden={setIsHidden} handleClickNav={handleClickNav} />
      <NavMenu isHidden={isHidden} handleAboutMeClick={handleAboutMeClick} />
      <IconsMenu isHidden={isHidden} />
      <NeonWrapperTxt isHidden={isHidden} />
    </div>
  );
};

export default HomePage;