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
          <Canvas>
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
        </div>
      </div>
    </div>
  );
}

export default Projects;