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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowChart(true);
          }, 500);
          ExpertiseSectionRef.current.classList.add('Expertise-scroll-effect');
        } else {
          setShowChart(false);
          ExpertiseSectionRef.current.classList.remove('Expertise-scroll-effect');
        }
      },
      {
        rootMargin: '200px',
      }
    );
    const ExpertiseRef = ExpertiseSectionRef;
    observer.observe(ExpertiseRef.current);

    return () => {
      observer.unobserve(ExpertiseRef.current);
    };
  }, []);
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