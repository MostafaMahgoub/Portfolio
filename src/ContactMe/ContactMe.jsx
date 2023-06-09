import React , {useRef , useEffect , useState} from 'react';
import './ContactMe.sass';
import ContactmeHeading from './components/ContactmeHeading';
import BackgroundVideo from './components/BackgroundVideo';

function ContactMe({ContactMePage}) {
  const ContactMeSectionRef = useRef(null);
  const [showContactMe, setShowContactMe] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {

          ContactMeSectionRef.current.classList.add('ContactMe-scroll-effect');
          setShowContactMe(true);
          setIsInView(true);

        } else if (!entry.isIntersecting && isInView) {

          ContactMeSectionRef.current.classList.remove('ContactMe-scroll-effect');
          setShowContactMe(false);
          setIsInView(false);

        }
      },
      {
        rootMargin: '800px 0px 150px 0px',
      }
    );
    const ProjectsRef = ContactMeSectionRef;
    observer.observe(ProjectsRef.current);

    return () => {
      observer.unobserve(ProjectsRef.current);
    };
  }, [isInView]);

  return (
    <div ref={ContactMePage} className="ContactMe">
      <BackgroundVideo />
      <ContactmeHeading ContactMeSectionRef={ContactMeSectionRef} />
      <div
        className={`ContactMe-container ${
          showContactMe ? 'show-ContactMe-container' : ''
        }`}
      ></div>
    </div>
  );
}

export default ContactMe;