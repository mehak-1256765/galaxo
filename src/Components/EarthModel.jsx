import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,  useTexture } from "@react-three/drei";

const EarthMesh = () => {
  const earthTexture = useTexture("assets/galaxy2.webp");
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

const EarthModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <Suspense fallback={null}>
        <EarthMesh />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      {/* <Stars /> */}
    </Canvas>
  );
};

export default EarthModel;
