import React , {useRef , useEffect} from 'react';
import './ContactMe.sass';
import ContactmeHeading from './components/ContactmeHeading';
import BackgroundVideo from './components/BackgroundVideo';

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
      <BackgroundVideo />
      <ContactmeHeading ContactMeSectionRef={ContactMeSectionRef} />
    </div>
  );
}

export default ContactMe;