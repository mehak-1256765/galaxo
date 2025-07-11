import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Galaxy3D = () => {
  const containerRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, model;
    let animationId;

    // Initialize scene
    scene = new THREE.Scene();

    // Initialize camera
    camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      '/star_cluster_-_15k_stars_model.glb',
      (gltf) => {
        model = gltf.scene;
        model.scale.set(2, 2, 2);
        scene.add(model);
        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading GLB:', error);
      }
    );

    // Animation loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.003;
        model.rotation.x += 0.001;
      }
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      containerRef.current.removeChild(renderer.domElement);
    };
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
      }}
    />
  );
};

export default Galaxy3D;
