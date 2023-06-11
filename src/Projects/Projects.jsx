import React, { useRef, useEffect, useState , useCallback } from 'react';
import './Projects.sass';
import ProjectsHeading from './components/ProjectsHeading';
import BackgroundVideo from './components/BackgroundVideo';
import ThreeDModel from './components/ThreeDModel';
import ProjectDescription from './components/ProjectDescription';
import phoneModal from './assets/3d-modals/phone_3d_apple.glb';
import MonitorModal from './assets/3d-modals/electron_projects.glb';
import NavProjectsMenu from './components/NavProjectsMenu';




function Projects({ProjectPageRef}) {
  const ProjectsSectionRef = useRef(null);
  const [showProjects, setShowProjects] = useState(false);
  const [activeNav, setActiveNav] = useState('ElectronJS');
  const [isInView, setIsInView] = useState(false);

  const observerCallback = useCallback(
    ([entry]) => {
      const isIntersecting = entry.isIntersecting;
      if (isIntersecting && !isInView) {
        ProjectsSectionRef.current.classList.add('Projects-scroll-effect');
        setShowProjects(true);
        setIsInView(true);
      } else if (!isIntersecting && isInView) {
        ProjectsSectionRef.current.classList.remove('Projects-scroll-effect');
        setShowProjects(false);
        setIsInView(false);
      }
    },
    [isInView]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '300px 0px 150px 0px',
    });
    const ProjectsSection = ProjectsSectionRef.current;
    observer.observe(ProjectsSection);

    return () => {
      observer.unobserve(ProjectsSection);
    };
  }, [observerCallback]);


  return (
    <div ref={ProjectPageRef} className="Projects">
      <BackgroundVideo />
      <ProjectsHeading ProjectsSectionRef={ProjectsSectionRef} />
      <div
        className={`projects-container ${
          showProjects ? 'show-projects-container' : ''
        }`}
      >
        <div className="model-container">
          {activeNav === 'ElectronJS' && (
            <>
              <ThreeDModel
                url={MonitorModal}
                showProjects={showProjects}
                fov={5}
              />
              <ProjectDescription showProjects={showProjects}>
              During my tenure at the Research and Development Center of the Egyptian Air Defense Military Commands, I have successfully completed over 7 Electron.js projects using Vanilla JS, HTML, and CSS, with varied complexity levels ranging from building projects from scratch to maintaining and adding new features to existing ones. Additionally, I possess a wealth of experience in developing over eight desktop applications using Electron, where I have worked with map APIs, managed markers, and proficiently handled databases such as MySQL and Mongo, in addition to my expertise in socket programming. Notably, I have also demonstrated my proficiency in delving into large and legacy vanilla JavaScript codebases, a skill that has proved invaluable in my development projects at my career.
              </ProjectDescription>
            </>
          )}
          {activeNav === 'A.M.S' && (
            <>
              <ThreeDModel
                url={phoneModal}
                showProjects={showProjects}
                fov={0.8}
              />
              <ProjectDescription showProjects={showProjects}>
              Flutter-based advising management system mobile app is designed to be a one-stop solution for college paperwork. It simplifies tasks for admins, doctors, and students by offering 30+ features to streamline administrative tasks and manage coursework. For doctors, it provides tools like grading, attendance tracking, and course material access to help them manage their teaching workload. And for students, it provides an easy-to-use platform for course registration, grade tracking, and attendance management.
              The app is optimized for performance, providing a fast and efficient experience for all users. It has a clean and intuitive user interface that makes it easy to navigate and use. Although it is not fully responsive, it works seamlessly on most devices and provides a reliable and consistent experience. Overall, our app is an essential tool for anyone involved in the academic process and can help simplify and streamline the administrative tasks that come with it.
              </ProjectDescription>
              <a
                href="https://github.com/MostafaMahgoub/ADVISING-MANAGEMENT-SYSTEM"
                target="_blank"
                rel="noreferrer"
              >
                <button className="Explore-button">Explore &#8594;</button>
              </a>
            </>
          )}
        </div>
        <NavProjectsMenu setActiveNav={setActiveNav} />
      </div>
    </div>
  );
}

export default React.memo(Projects);