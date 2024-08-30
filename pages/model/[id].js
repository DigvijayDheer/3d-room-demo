// pages/model/[id].js
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRouter } from "next/router";
import Model from "../../components/Model";
import { getModelConfig } from "../../config/modelConfig";
import { useEffect, useState } from "react";

export default function ModelDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [model, setModel] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const fetchedModel = getModelConfig(id);
      setModel(fetchedModel);
      if (!fetchedModel) {
        console.error("Model not found for ID:", id);
      }
    }
  }, [router.isReady, id]);

  if (!model) return <div>Loading model...</div>;

  return (
    <div className="model-detail-container">
      <h4>Model: {model.name}</h4>

      <div className="model-viewer">
        <Canvas camera={{ position: [0, 4, 8], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Model
            position={model.detailPosition} // Use detail page position
            modelPath={model.modelPath}
            scale={model.detailScale} // Use detail page scale
          />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
