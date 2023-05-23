import React from 'react';
import bgVideo from './assets/videos/HomePage.mp4';
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

    </div>
  );
}

export default HomePage;