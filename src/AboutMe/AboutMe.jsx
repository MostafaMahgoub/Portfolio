import React,{ useState,useEffect, useRef } from 'react';
import bgVideo from './assets/videos/AboutMe.mp4';
import ResumePDF from './assets/MostafaReda_Resume.pdf';
import ResumeImg from './assets/images/Resume.png';
import './AboutMe.sass';


function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [text]);

  return <p className="AboutMe-paragraph">{displayText}</p>;
}


function AboutMe({AboutMePageRef}) {
  const AboutMesectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const handleDownload = () => {
    window.open(ResumePDF, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowResume(true);
          }, 5000);
          setStartTyping(true);
          AboutMesectionRef.current.classList.add('AboutMe-scroll-effect');
        } else {
          setShowResume(false);
          setStartTyping(false);
          AboutMesectionRef.current.classList.remove('AboutMe-scroll-effect');
        }
      },
      {
        rootMargin: '100px', 
      }
    );


    const aboutMeSectionRef = AboutMesectionRef;
    observer.observe(aboutMeSectionRef.current);

    return () => {
      observer.unobserve(aboutMeSectionRef.current);
    };
  }, []);
  return (
    <div ref={AboutMePageRef} className="AboutMe">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <h1 className="AboutMe-heading" ref={AboutMesectionRef}>About Me</h1>
      {startTyping && <Typewriter
      text="A computer science graduate from Ain Shams University's Faculty of Science and a front-end developer with over a year of experience in software engineering, I am highly motivated to continue honing my skills and expanding my knowledge. My primary focus is on front-end development, and I'm actively seeking opportunities to enhance my abilities and stay up-to-date with the latest industry trends and best practices. I am passionate about my craft and am dedicated to delivering high-quality work that meets and exceeds expectations."
      />}
      <img alt='' onClick={handleDownload} src={ResumeImg} className={`Resume-image-container ${showResume ? 'Resume-animation':'fade-Resume-animation'}`}></img>
    </div>
  );
}

export default AboutMe;