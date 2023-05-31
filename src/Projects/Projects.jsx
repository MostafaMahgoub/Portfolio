import React , {useRef , useEffect} from 'react';
import './Projects.sass';
import ProjectsHeading from './components/ProjectsHeading';
import BackgroundVideo from './components/BackgroundVideo';

function Projects({ProjectPageRef}) {
  const ProjectsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ProjectsSectionRef.current.classList.add('Projects-scroll-effect');
        } else {
          ProjectsSectionRef.current.classList.remove('Projects-scroll-effect');
        }
      },
      {
        rootMargin: '100px',
      }
    );
    const ProjectsRef = ProjectsSectionRef;
    observer.observe(ProjectsRef.current);

    return () => {
      observer.unobserve(ProjectsRef.current);
    };
  }, []);

  return (
    <div ref={ProjectPageRef} className="Projects">
      <BackgroundVideo />
      <ProjectsHeading ProjectsSectionRef={ProjectsSectionRef} />
    </div>
  );
}

export default Projects;