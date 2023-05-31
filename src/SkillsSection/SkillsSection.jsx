import React ,{useRef , useEffect , useState} from 'react';
import bgVideo from './assets/videos/SkillsSection.mp4';
import './SkillsSection.sass';
import Chart from './components/Chart';
import ExpertiseHeading from './components/ExpertiseHeading';

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
        rootMargin: '100px',
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
      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <ExpertiseHeading ExpertiseSectionRef={ExpertiseSectionRef} />
      <Chart showChart={showChart} />
    </div>
  );
}

export default SkillsSection;