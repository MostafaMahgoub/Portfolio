import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage/HomePage';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import SkillsSection from './SkillsSection/SkillsSection';

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const AboutMePageRef = useRef(null);
  const homePageRef = useRef(null);
  const ContactMePage = useRef(null);
  const ProjectPageRef = useRef(null);
  const SkillsPageRef = useRef(null);

  const appClass = isHidden ? '' : 'no-scroll';

  return (
    <React.StrictMode>
      <div className={appClass}>
        <HomePage
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          AboutMePageRef={AboutMePageRef}
          homePageRef={homePageRef}
          ContactMePage={ContactMePage}
          ProjectPageRef={ProjectPageRef}
          SkillsPageRef={SkillsPageRef}
        />
        <AboutMe AboutMePageRef={AboutMePageRef} />
        <SkillsSection SkillsPageRef={SkillsPageRef} />
        <Projects ProjectPageRef={ProjectPageRef} />
        <ContactMe ContactMePage={ContactMePage} />
      </div>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
