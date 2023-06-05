import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera} from '@react-three/drei';
import Model from './Model';

function ThreeDModel({ url, showProjects, fov }) {
  return (
    <Canvas className={`${showProjects ? 'slide-right' : ''}`}>
      <PerspectiveCamera
        makeDefault
        position={[10, 10, 10]}
        rotation={[0, Math.PI * 1.75, 0]}
        fov={fov}
        near={0.1}
        far={100}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Model url={url} />
      </Suspense>
    </Canvas>
  );
}

export default ThreeDModel;
