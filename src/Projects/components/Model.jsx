import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model({ url }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

export default Model;
