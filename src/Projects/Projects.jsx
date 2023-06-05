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
          <Canvas className={`${
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
          </Canvas>
          <p className={`projects-description ${
        showProjects ? 'slide-left' : ''
      }`}>Throughout my extensive career in software development, I have successfully completed over 7 Electron.js projects using Vanilla JS, HTML, and CSS, with varied complexity levels ranging from building projects from scratch to maintaining and adding new features to existing ones. Furthermore, I possess a wealth of experience in developing over eight desktop applications using Electron, where I have worked with map APIs, managed markers, and proficiently handled databases such as MySQL and Mongo, in addition to my expertise in socket programming. Notably, I have also demonstrated my proficiency in delving into large and legacy vanilla JavaScript codebases, a skill that has proved invaluable in my development projects.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;