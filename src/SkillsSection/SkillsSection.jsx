import React ,{useRef , useEffect , useState} from 'react';
import './SkillsSection.sass';
import Chart from './components/Chart';
import ExpertiseHeading from './components/ExpertiseHeading';
import BackgroundVideo from './components/BackgroundVideo';
import TextSlider from './components/SlideupText';
import skills from './components/icons';


function SkillsSection({SkillsPageRef}) {
  const ExpertiseSectionRef = useRef(null);
  const [showChart, setShowChart] = useState(false);
  const [observerCalled, setObserverCalled] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observerCalled) {
          setTimeout(() => {
            setShowChart(true);
          }, 500);
          ExpertiseSectionRef.current.classList.add('Expertise-scroll-effect');
          setObserverCalled(true);
        } else if (!entry.isIntersecting && observerCalled){
          setShowChart(false);
          ExpertiseSectionRef.current.classList.remove('Expertise-scroll-effect');
          setObserverCalled(false);
        }
      },
      {
        rootMargin: '300px 0px 150px 0px',
      }
    );
    const ExpertiseRef = ExpertiseSectionRef;
    observer.observe(ExpertiseRef.current);

    return () => {
      observer.unobserve(ExpertiseRef.current);
    };
  }, [observerCalled]);
  return (
    <div ref={SkillsPageRef} className="SkillsSection">
      <BackgroundVideo />
      <ExpertiseHeading ExpertiseSectionRef={ExpertiseSectionRef} />
      <div className={`skills-container ${
        showChart ? 'show-skils-container' : ''
      }`}>
        <Chart showChart={showChart} />
        <TextSlider skills={skills} />
      </div>
    </div>
  );
}

export default SkillsSection;