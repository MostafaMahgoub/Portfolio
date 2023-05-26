import React,{ useEffect, useRef } from 'react';
import bgVideo from './assets/videos/AboutMe.mp4';
import './AboutMe.sass';

function AboutMe() {
  const AboutMesectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          AboutMesectionRef.current.classList.add('AboutMe-scroll-effect');
        } else {
          AboutMesectionRef.current.classList.remove('AboutMe-scroll-effect');
        }
      },
      {
        rootMargin: '70px', 
      }
    );


    const aboutMeSectionRef = AboutMesectionRef;
    observer.observe(aboutMeSectionRef.current);

    return () => {
      observer.unobserve(aboutMeSectionRef.current);
    };
  }, []);
  return (
    <div className="AboutMe">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <h1 className="AboutMe-heading" ref={AboutMesectionRef}>About Me</h1>
      <p className="AboutMe-paragraph">A computer science graduate from the Faculty of Science at Ain Shams University and a front-end developer with over one year of experience in software engineering, I am eager to continue learning and expanding my skillset. I have a strong focus on front-end development and am seeking opportunities to further enhance my abilities. I am passionate about improving my craft and staying up to date with the latest industry trends and best practices.</p>
    </div>
  );
}

export default AboutMe;