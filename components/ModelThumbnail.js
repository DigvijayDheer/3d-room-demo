// components/ModelThumbnail.js
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import Model from "./Model";

export default function ModelThumbnail({ modelPath, position, scale }) {
  const controlsRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      // Prevent OrbitControls from allowing zooming or panning
      controls.enableZoom = false;
      controls.enablePan = false;
    }
  }, []);

  return (
    <div className="thumbnail-container">
      <Canvas ref={canvasRef}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model position={position} modelPath={modelPath} scale={scale} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}
