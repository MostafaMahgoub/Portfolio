import React from 'react';
import './HomePage.sass';
import BackgroundVideo from './components/BackgroundVideo';
import SwitchButton from './components/SwitchButton';
import NavMenu from './components/NavMenu';
import IconsMenu from './components/IconsMenu';
import NeonWrapperTxt from './components/NeonWrapperTxt';

const HomePage = ({ isHidden, setIsHidden, AboutMePageRef, homePageRef , ContactMePage , ProjectPageRef , SkillsPageRef }) => {
  const sections = [
    { ref: AboutMePageRef, label: "About Me" },
    { ref: SkillsPageRef, label: "Expertise" },
    { ref: ProjectPageRef, label: "Projects" },
    { ref: ContactMePage, label: "Contact Me" },
  ];

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" ,  passive: true});
  };

  const handleSectionClick = (ref) => {
    scrollToRef(ref);
  };

  const handleClickNav = () => {
    homePageRef.current.scrollIntoView({ behavior: "smooth" , passive: true});
  };

  return (
    <div className="HomePage" ref={homePageRef}>
      <BackgroundVideo />
      <SwitchButton isHidden={isHidden} setIsHidden={setIsHidden} handleClickNav={handleClickNav} />
      <NavMenu isHidden={isHidden} sections={sections} handleSectionClick={handleSectionClick} />
      <IconsMenu isHidden={isHidden} />
      <NeonWrapperTxt isHidden={isHidden} />
    </div>
  );
};

export default React.memo(HomePage);