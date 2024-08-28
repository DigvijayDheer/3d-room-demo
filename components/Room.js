// components/Room.js
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { useRef, useEffect } from "react";
import { Box3, Vector3 } from "three";

export default function Room({ selectedFan, selectedLamp }) {
  const controlsRef = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const boundingBox = new Box3(new Vector3(-5, -1, -5), new Vector3(5, 5, 5));

  useEffect(() => {
    const controls = controlsRef.current;
    const cameraPosition = new Vector3();

    const handleControlChange = () => {
      controls.object.position.copy(cameraPosition);
      controls.object.updateMatrixWorld();

      if (!boundingBox.containsPoint(cameraPosition)) {
        cameraPosition.clamp(boundingBox.min, boundingBox.max);
        controls.object.position.copy(cameraPosition);
        controls.update();
      }
    };

    if (controls) {
      controls.addEventListener("change", handleControlChange);
    }

    return () => {
      if (controls) {
        controls.removeEventListener("change", handleControlChange);
      }
    };
  }, [boundingBox]);

  const renderFanModel = () => {
    switch (selectedFan) {
      case "ceiling_fan":
        return (
          <Model
            key="ceiling_fan"
            position={[0, -4, 0]}
            modelPath="/models/ceiling_fan/scene.gltf"
            scale={[4, 3, 4]}
          />
        );
      case "ceiling_fan_lp":
        return (
          <Model
            key="ceiling_fan_lp"
            position={[0, 4.8, 0]}
            modelPath="/models/ceiling_fan_lp/scene.gltf"
            scale={[2, 2, 2]}
          />
        );
      default:
        return null;
    }
  };

  const renderLampModel = () => {
    switch (selectedLamp) {
      case "ceiling_lamp":
        return (
          <Model
            key="ceiling_lamp"
            position={[4, 4.7, 0]}
            modelPath="/models/ceiling_lamp/scene.gltf"
            scale={[0.8, 0.8, 0.8]}
          />
        );
      case "ceiling_lamp_lp":
        return (
          <Model
            key="ceiling_lamp_lp"
            position={[4, 5.2, 0]}
            modelPath="/models/ceiling_lamp_lp/scene.gltf"
            scale={[1, 0.5, 1]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 4, 8], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        <Model
          position={[0, 0, 0]}
          modelPath="/models/white_modern_living_room/scene.gltf"
          scale={[2, 2, 2]}
          rotation={[0, -Math.PI / 2, 0]}
        />

        {renderFanModel()}
        {renderLampModel()}

        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          minDistance={1.1}
          maxDistance={10}
          target={[0, 1.5, 0]}
          maxAzimuthAngle={Math.PI}
          minAzimuthAngle={-Math.PI}
        />
      </Canvas>
      <style jsx>{`
        .canvas-container {
          height: 100%;
          width: 100%;
        }

        @media (max-width: 768px) {
          .canvas-container {
            height: 100vw;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
