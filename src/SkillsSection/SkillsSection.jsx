import React ,{useRef , useEffect , useState} from 'react';
import './SkillsSection.sass';
import Chart from './components/Chart';
import ExpertiseHeading from './components/ExpertiseHeading';
import BackgroundVideo from './components/BackgroundVideo';
import TextSlider from './components/SlideupText';
import githubIcon from './assets/icons/github.svg';
import reactIcon from './assets/icons/react.svg';
import sassIcon from './assets/icons/sass.svg';
import jsIcon from './assets/icons/javascript.svg';
import cssIcon from './assets/icons/css.svg';
import htmlIcon from './assets/icons/html.svg';
import mysqlIcon from './assets/icons/mysql.svg';
import mongoIcon from './assets/icons/mongo.svg';
import dartIcon from './assets/icons/dart.svg';
import flutterIcon from './assets/icons/flutter.svg';
import firebaseIcon from './assets/icons/firebase.svg';
import cppIcon from './assets/icons/c++.svg';
import pythonIcon from './assets/icons/python.svg';
import ElectronIcon from './assets/icons/electronjs.svg';
import NodeIcon from './assets/icons/nodejs.svg';
import bootstrapIcon from './assets/icons/bootstrap.svg';
import gitIcon from './assets/icons/git.svg';
import unityIcon from './assets/icons/unity.svg';
import phpIcon from './assets/icons/php.svg';


function SkillsSection({SkillsPageRef}) {
  const ExpertiseSectionRef = useRef(null);
  const [showChart, setShowChart] = useState(false);
  
  const skills = [
    { skillName: 'ReactJS', icon: reactIcon },
    { skillName: 'Sass', icon: sassIcon },
    { skillName: 'Javascript', icon: jsIcon},
    { skillName: 'HTML', icon: htmlIcon },
    { skillName: 'CSS', icon: cssIcon },
    { skillName: 'MySQL', icon: mysqlIcon },
    { skillName: 'MongoDB', icon: mongoIcon},
    { skillName: 'Dart', icon: dartIcon},
    { skillName: 'Flutter', icon: flutterIcon},
    { skillName: 'Firebase', icon: firebaseIcon },
    { skillName: 'C++', icon: cppIcon},
    { skillName: 'Python', icon: pythonIcon },
    { skillName: 'ElectronJS', icon: ElectronIcon },
    { skillName: 'NodeJS', icon: NodeIcon },
    { skillName: 'Bootstrap', icon: bootstrapIcon },
    { skillName: 'Git', icon: gitIcon },
    { skillName: 'Github', icon: githubIcon },
    { skillName: 'Unity', icon: unityIcon },
    { skillName: 'PHP', icon: phpIcon },
  ];
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
      <BackgroundVideo />
      <ExpertiseHeading ExpertiseSectionRef={ExpertiseSectionRef} />
      <div className='skills-container'>
        <Chart showChart={showChart} />
        <TextSlider skills={skills} />
        {/* <img src={githubIcon} className='icon-3d' alt='' /> */}
      </div>
    </div>
  );
}

export default SkillsSection;