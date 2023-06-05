import React, { useRef, useEffect, useState } from 'react';
import './Projects.sass';
import ProjectsHeading from './components/ProjectsHeading';
import BackgroundVideo from './components/BackgroundVideo';
import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';



function Model({ url }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

function Projects({ProjectPageRef}) {
  const ProjectsSectionRef = useRef(null);
  const [showProjects, setShowProjects] = useState(false);
  const [activeNav, setActiveNav] = useState('ElectronJS');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ProjectsSectionRef.current.classList.add('Projects-scroll-effect');
          setShowProjects(true);
        } else {
          ProjectsSectionRef.current.classList.remove('Projects-scroll-effect');
          setShowProjects(false);
        }
      },
      {
        rootMargin: '200px',
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
      <div
        className={`projects-container ${
          showProjects ? 'show-projects-container' : ''
        }`}
      >
        <div className="model-container">
          {activeNav === 'ElectronJS' && <Canvas className={`${
        showProjects ? 'slide-right' : ''
      }`}>
        
            <PerspectiveCamera
               makeDefault
               position={[10, 10, 10]} // Set the initial position of the camera
               rotation={[0, Math.PI * 1.75, 0]} // Set the rotation to 315 degrees around the y-axis
               fov={5} // Set the field of view (zoom level)  monitor => 5//0.8 => phont
               near={0.1} // Set the near clipping plane
               far={100} // Set the far clipping plane
            />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[0, 10, 5]}
              intensity={1}
              castShadow
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <Model url="/3d-modals/electron_projects.glb" />
            </Suspense>
          </Canvas>}
          {activeNav === 'A.M.S' && <Canvas className={`${
        showProjects ? 'slide-right' : ''
      }`}>
        
            <PerspectiveCamera
               makeDefault
               position={[10, 10, 10]} // Set the initial position of the camera
               rotation={[0, Math.PI * 1.75, 0]} // Set the rotation to 315 degrees around the y-axis
               fov={0.8} // Set the field of view (zoom level)  monitor => 5//0.8 => phont
               near={0.1} // Set the near clipping plane
               far={100} // Set the far clipping plane
            />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[0, 10, 5]}
              intensity={1}
              castShadow
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <Model url="/3d-modals/phone_3d_apple.glb" />
            </Suspense>
          </Canvas>}
          {activeNav === 'ElectronJS' && <p className={`projects-description ${
        showProjects ? 'slide-left' : ''
      }`}>During my tenure at the Research and Development Center of the Egyptian Air Defense Military Commands, I have successfully completed over 7 Electron.js projects using Vanilla JS, HTML, and CSS, with varied complexity levels ranging from building projects from scratch to maintaining and adding new features to existing ones. Additionally, I possess a wealth of experience in developing over eight desktop applications using Electron, where I have worked with map APIs, managed markers, and proficiently handled databases such as MySQL and Mongo, in addition to my expertise in socket programming. Notably, I have also demonstrated my proficiency in delving into large and legacy vanilla JavaScript codebases, a skill that has proved invaluable in my development projects at my career.
           </p>}
           {activeNav === 'A.M.S' && <p className={`projects-description ${
        showProjects ? 'slide-left' : ''
      }`}>Flutter-based advising management system mobile app simplifies college paperwork for admins, doctors, and students. It offers 30+ features to streamline administrative tasks such as course scheduling, student record management, and performance reporting. For doctors, it offers features like grading, attendance tracking, and course material access. And for students, it provides a convenient way to manage coursework with features like registration, grade tracking, and attendance management. Our app is optimized for performance and offers a clean, intuitive user interface. Although it is not responsive, it provides a fast, reliable, and easy-to-use experience for all users.
           </p>}
        </div>
        <div>
        <nav className="nav" aria-label="In-page jump links">
  <ul>
    <li>
      <a className="nav-link" href="#electronJS" onClick={function() { setActiveNav('ElectronJS') }}>
        <span className="nav-indicator" />
        <span className="nav-text">ElectronJS</span>
      </a>
    </li>
    <li>
      <a className="nav-link" href="#a.m.s" onClick={function() { setActiveNav('A.M.S') }}>
        <span className="nav-indicator" />
        <span className="nav-text">A.M.S</span>
      </a>
    </li>
  </ul>
</nav>

        </div>
      </div>
    </div>
  );
}

export default Projects;