import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage/HomePage';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import SkillsSection from './SkillsSection/SkillsSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HomePage />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactMe />
  </React.StrictMode>
);

