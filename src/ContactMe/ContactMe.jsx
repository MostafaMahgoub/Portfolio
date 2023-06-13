import React , {useRef , useEffect , useState , useCallback} from 'react';
import './ContactMe.sass';
import ContactmeHeading from './components/ContactmeHeading';
import BackgroundVideo from './components/BackgroundVideo';
import Map from './components/Map';
import ContactForm from './components/ContactForm';

function ContactMe({ContactMePage}) {
  const ContactMeSectionRef = useRef(null);
  const [showContactMe, setShowContactMe] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const observerCallback = useCallback(
    ([entry]) => {
      const isIntersecting = entry.isIntersecting;
      if (isIntersecting && !isInView) {
        ContactMeSectionRef.current.classList.add('ContactMe-scroll-effect');
        setShowContactMe(true);
        setIsInView(true);
      } else if (!isIntersecting && isInView) {
        ContactMeSectionRef.current.classList.remove('ContactMe-scroll-effect');
        setShowContactMe(false);
        setIsInView(false);
      }
    },
    [isInView]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px',
    });
    const ContactMeSection = ContactMePage.current;
    observer.observe(ContactMeSection);

    return () => {
      observer.unobserve(ContactMeSection);
    };
  }, [observerCallback,ContactMePage]);

  return (
    <div ref={ContactMePage} className="ContactMe">
      <BackgroundVideo />
      <ContactmeHeading ContactMeSectionRef={ContactMeSectionRef} />
      <div
        className={`ContactMe-container ${
          showContactMe ? 'show-ContactMe-container' : ''
        }`}
      >
        <div className='contact-box'>
           <ContactForm />
        </div> 
        <Map />
      </div>
    </div>
  );
}

export default React.memo(ContactMe);