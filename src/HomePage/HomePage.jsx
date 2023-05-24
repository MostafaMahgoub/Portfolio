import React from 'react';
import bgVideo from './assets/videos/HomePage.mp4';
import gitHubIcon from './assets/icons/github-mark.svg';
import linkedinIcon from './assets/icons/linkedin.svg'
import './HomePage.sass';

function HomePage() {
  return (
    <div className="HomePage">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
        <div className="round">
          <input type="checkbox" id="onoff" name="onoff" />
          <div className="back">
            <label className="but" htmlFor="onoff">
              <span className="on">I</span>
              <span className="off">0</span>
            </label>
          </div>
        </div>
        <div className="Nav-menu">
          <a id='menu-button' href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          About Me
          </a>
          <a id='menu-button' href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Expertise
          </a>
          <a id='menu-button' href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Projects
          </a>
          <a id='menu-button' href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contact Me
          </a>
        </div>
        <div className="icons-menu">
          <a href='https://github.com/MostafaMahgoub' target="_blank"><img src={gitHubIcon} alt="Icon" className="icon" /></a>
          <a href='https://www.linkedin.com/in/mostafa-reda-4650b922b/' target="_blank"><img src={linkedinIcon} alt="Icon" className="icon" /></a>
        </div>

    </div>
  );
}

export default HomePage;