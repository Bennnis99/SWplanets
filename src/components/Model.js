import React, { useRef, Suspense, useEffect } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useLoader, useFrame, extend, useThree } from '@react-three/fiber'

extend ({ OrbitControls });

export default function Model() {

  function Camera(props) {
    const ref = useRef()
    const set = useThree(state => state.set)
    // Make the camera known to the system
    // eslint-disable-next-line
    useEffect(() => void set({ camera: ref.current }), [])
    // Update it every frame
    useFrame(() => ref.current.updateMatrixWorld())
    return <perspectiveCamera ref={ref} {...props} />
  }

  function Asset({ url }) {
    const gltf = useLoader(GLTFLoader, url)
    return <primitive object={gltf.scene} />
  }

  const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
      camera,
      gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls 
    ref={controls} 
    args={[camera, domElement]}
    autoRotate={true}
    autoRotateSpeed={1}
     />;
  };

  const Loading = () => {
    return <p>
      Loading...
    </p>
  }

  return (
    <div id="canvas">
    <Canvas>
      <CameraControls />
      <Camera position={[0, 10, 24]} />
      <Suspense fallback={Loading}>
        <Asset url="models/coruscant.glb" />
      </Suspense>
      <directionalLight intensity={0.1} />
      <ambientLight intensity={1} />
    </Canvas>
    </div>
  );
};
