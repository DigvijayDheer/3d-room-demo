import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";

export default function Model({
  position,
  modelPath,
  scale = [1, 1, 1],
  onClick,
  rotation = [0, 0, 0],
}) {
  const model = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotation);
    }
  }, [rotation]);

  return (
    <primitive
      ref={modelRef}
      object={model.scene}
      position={position}
      scale={scale}
      onClick={onClick}
    />
  );
}
