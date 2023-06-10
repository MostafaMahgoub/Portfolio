import React, { useState, useEffect, useRef , useCallback } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import AboutMeHeading from './components/AboutMeHeading';
import Typewriter from './components/Typewriter';
import ResumeImage from './components/ResumeImage';
import './AboutMe.sass';

function AboutMe({ AboutMePageRef }) {
  const AboutMesectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [observerCalled, setObserverCalled] = useState(false);

  const observerCallback = useCallback(([entry]) => {
    if (entry.isIntersecting && !observerCalled) {
      setTimeout(() => {
        setShowResume(true);
      }, 5000);
      setStartTyping(true);
      AboutMesectionRef.current.classList.add('AboutMe-scroll-effect');
      setObserverCalled(true);
    } else if (!entry.isIntersecting && observerCalled) {
      setShowResume(false);
      setStartTyping(false);
      AboutMesectionRef.current.classList.remove('AboutMe-scroll-effect');
      setObserverCalled(false);
    }
  }, [observerCalled]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '300px 0px 50px 0px',
    });
    const aboutMeSectionRef = AboutMesectionRef;
    observer.observe(aboutMeSectionRef.current);

    return () => {
      observer.unobserve(aboutMeSectionRef.current);
    };
  }, [observerCallback]);

  return (
    <div ref={AboutMePageRef} className="AboutMe">
      <BackgroundVideo />
      <AboutMeHeading AboutMesectionRef={AboutMesectionRef} />
      {startTyping && (
        <Typewriter
          text="A computer science graduate from Ain Shams University's Faculty of Science and a front-end developer with over a year of experience in software engineering, I am highly motivated to continue honing my skills and expanding my knowledge. My primary focus is on front-end development, and I'm actively seeking opportunities to enhance my abilities and stay up-to-date with the latest industry trends and best practices. I am passionate about my craft and am dedicated to delivering high-quality work that meets and exceeds expectations."
        />
      )}
      <ResumeImage showResume={showResume} />
    </div>
  );
}

export default React.memo(AboutMe);
