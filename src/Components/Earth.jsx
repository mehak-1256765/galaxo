// src/components/Earth.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import EarthModel from './EarthModel'; // This is your Earth texture sphere

const Earth = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        {/* <Stars radius={300} depth={60} count={10000} factor={7} fade /> */}
        <EarthModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Earth;
