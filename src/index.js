import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage/HomePage';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import SkillsSection from './SkillsSection/SkillsSection';

function App() {
  const [isHidden, setIsHidden] = useState(false);
  
  useEffect(() => {
    if (!isHidden) {
      document.body.classList.add('no-scroll');
      
      return () => document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isHidden]);

  return (
    <React.StrictMode>
      <HomePage isHidden={isHidden} setIsHidden={setIsHidden} />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactMe />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);