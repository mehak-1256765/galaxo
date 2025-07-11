import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Galaxy3D = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Defer initialization using requestIdleCallback with fallback
    const init = () => {
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 8);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current?.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // Load GLB Model
      const loader = new GLTFLoader();
      let model = null;

      loader.load(
        '/planet2.glb', // Use compressed model here
        (gltf) => {
          model = gltf.scene;
          model.scale.set(2, 2, 2);
          scene.add(model);
        },
        undefined,
        (error) => {
          console.error('Error loading GLB:', error);
        }
      );

      // Throttle animation (skip every other frame)
      let frame = 0;
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        if (++frame % 2 === 0) return;
        if (model) {
          model.rotation.y += 0.003;
          model.rotation.x += 0.001;
        }
        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Mark initialized
      setIsInitialized(true);

      // Cleanup
      return () => {
        cancelAnimationFrame(animationIdRef.current);
        window.removeEventListener('resize', handleResize);
        scene.clear();
        renderer.dispose();
        if (renderer.domElement && containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    };

    // Use requestIdleCallback if available, else fallback to setTimeout
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => {
        const cleanup = init();
        // Store cleanup for unmount
        return cleanup;
      });
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timeoutId = setTimeout(() => {
        const cleanup = init();
        // store cleanup if needed
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: isInitialized ? 1 : 0,
        transition: 'opacity 0.5s ease-in',
      }}
    />
  );
};

export default Galaxy3D;
