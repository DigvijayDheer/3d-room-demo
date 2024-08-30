// components/Room.js
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { Box3, Vector3, SphereGeometry } from "three";
import Model from "./Model";
import { modelConfig } from "../config/modelConfig";

// Extend the geometry
extend({ SphereGeometry });

export default function Room({ selectedFan, selectedLight, onPointerClick }) {
  const controlsRef = useRef();
  const boundingBox = new Box3(new Vector3(-5, -1, -5), new Vector3(5, 5, 5));
  const [showFanPointer, setShowFanPointer] = useState(true);
  const [showLightPointer, setShowLightPointer] = useState(true);

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

  const renderModel = (type, selectedModel) => {
    const models = modelConfig[type];
    const selected = models.find((model) => model.id === selectedModel);

    if (selected) {
      return (
        <Model
          key={selected.id}
          position={selected.position}
          modelPath={selected.modelPath}
          scale={selected.scale}
        />
      );
    }

    return null;
  };

  const handlePointerClick = (type) => {
    onPointerClick(type);
    if (type === "fan") setShowFanPointer(false);
    if (type === "light") setShowLightPointer(false);
  };

  return (
    <div className="modelBox">
      <Canvas camera={{ position: [450, 105, 10], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        <Model
          position={[-100, -80, -60]}
          modelPath="/Living_Room/Living_Room.gltf"
          scale={[300, 300, 300]}
          rotation={[0, -Math.PI / 2, 0]}
        />

        {renderModel("fans", selectedFan)}
        {renderModel("lights", selectedLight)}

        {showFanPointer && (
          <mesh
            position={[-350, 95, -25]}
            onClick={() => handlePointerClick("fan")}
          >
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial color="red" bumpScale={1} />
          </mesh>
        )}

        {showLightPointer && (
          <mesh
            position={[-115, 95, -25]}
            onClick={() => handlePointerClick("light")}
          >
            <sphereGeometry args={[4, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
        )}

        {showLightPointer && (
          <mesh
            position={[-56, 95, -25]}
            onClick={() => handlePointerClick("light")}
          >
            <sphereGeometry args={[4, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
        )}

        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          minDistance={10} // Adjusted minimum zoom distance
          maxDistance={200} // Maximum zoom distance - adjust as needed
          target={[0, 0, 0]} // Target point in the room
          maxAzimuthAngle={Math.PI}
          minAzimuthAngle={-Math.PI}
        />
      </Canvas>
    </div>
  );
}
