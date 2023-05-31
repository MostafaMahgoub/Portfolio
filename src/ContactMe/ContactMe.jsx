import React , {useRef , useEffect} from 'react';
import bgVideo from './assets/videos/ContactMe.mp4';
import './ContactMe.sass';
import ContactmeHeading from './components/ContactmeHeading';

function ContactMe({ContactMePage}) {
  const ContactMeSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ContactMeSectionRef.current.classList.add('ContactMe-scroll-effect');
        } else {
          ContactMeSectionRef.current.classList.remove('ContactMe-scroll-effect');
        }
      },
      {
        rootMargin: '100px',
      }
    );
    const ProjectsRef = ContactMeSectionRef;
    observer.observe(ProjectsRef.current);

    return () => {
      observer.unobserve(ProjectsRef.current);
    };
  }, []);

  return (
    <div ref={ContactMePage} className="ContactMe">
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <ContactmeHeading ContactMeSectionRef={ContactMeSectionRef} />
    </div>
  );
}

export default ContactMe;