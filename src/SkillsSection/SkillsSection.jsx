import React ,{useRef , useEffect , useState , useCallback} from 'react';
import './SkillsSection.sass';
import Chart from './components/Chart';
import ExpertiseHeading from './components/ExpertiseHeading';
import BackgroundVideo from './components/BackgroundVideo';
import TextSlider from './components/SlideupText';
import skills from './components/icons';


function SkillsSection({SkillsPageRef}) {
  const ExpertiseSectionRef = useRef(null);
  const [showChart, setShowChart] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  const observerCallback = useCallback(([entry], observer) => {
    const isIntersecting = entry.isIntersecting;
    if (isIntersecting && !isInView) {
      setShowChart(true);
      ExpertiseSectionRef.current.classList.add('Expertise-scroll-effect');
      setIsInView(true);
    } else if (!isIntersecting && isInView) {
      setShowChart(false);
      ExpertiseSectionRef.current.classList.remove('Expertise-scroll-effect');
      setIsInView(false);
    }
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '300px 0px 150px 0px',
    });
    const ExpertiseRef = ExpertiseSectionRef.current;
    observer.observe(ExpertiseRef);

    return () => {
      observer.unobserve(ExpertiseRef);
    };
  }, [observerCallback]);
  return (
    <div ref={SkillsPageRef} className="SkillsSection">
      <BackgroundVideo />
      <ExpertiseHeading ExpertiseSectionRef={ExpertiseSectionRef} />
      <div className={`skills-container ${
        showChart ? 'show-skills-container' : ''
      }`}>
        <Chart showChart={showChart} />
        <TextSlider skills={skills} />
      </div>
    </div>
  );
}

export default React.memo(SkillsSection);