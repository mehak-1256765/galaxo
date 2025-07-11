import React, { useEffect, useRef } from 'react';

const Bee3D = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
      import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

      const camera = new THREE.PerspectiveCamera(
          23,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
      );
      camera.position.z = 10;

      const scene = new THREE.Scene();
      let bee;
      let mixer;

      const loader = new GLTFLoader();
      loader.load('/animated_butterfly.glb',
          function (gltf) {
              bee = gltf.scene;
              scene.add(bee);
              bee.position.set(0, 0, 0);
              mixer = new THREE.AnimationMixer(bee);
              mixer.clipAction(gltf.animations[0]).play();
              animateBee();
          },
          undefined,
          function (error) {
              console.error('Error loading model:', error);
          }
      );

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('container3D').appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
      scene.add(ambientLight);

      const topLight = new THREE.DirectionalLight(0xffffff, 1);
      topLight.position.set(500, 500, 500);
      scene.add(topLight);

      let isScrolling = false;
      let scrollTimeout;
      let zigzagSpeed = 0;

      const animateBee = () => {
        const clock = new THREE.Clock();
        const baseY = -1;
        const baseZ = 0;

        const animate = () => {
          requestAnimationFrame(animate);
          const time = clock.getElapsedTime();

          if (bee) {
            if (isScrolling) {
              zigzagSpeed = Math.min(zigzagSpeed + 0.02, 1); // smoother ramp up
            } else {
              zigzagSpeed = Math.max(zigzagSpeed - 0.02, 0); // smoother ramp down
            }

            // Slower zig-zag motion
            const zigzagX = Math.sin(time * 1.5) * zigzagSpeed * 2.5; // reduced frequency and movement
            const zigzagY = Math.sin(time * 1) * 0.5;

            bee.position.x = zigzagX;
            bee.position.y = baseY + zigzagY;
            bee.position.z = baseZ;

            // Rotate based on motion direction
            bee.rotation.y = zigzagX * 0.15;
            bee.rotation.x = Math.cos(time * 0.8) * 0.2;
            bee.rotation.z = Math.sin(time * 1.0) * 0.1;
          }

          if (mixer) mixer.update(0.02);
          renderer.render(scene, camera);
        };
        animate();
      };

      // Detect scroll
      window.addEventListener('scroll', () => {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 150);
      });

      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    `;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      id="container3D"
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Bee3D;
