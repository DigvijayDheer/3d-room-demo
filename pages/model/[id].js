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
    <div className="model-detail-page">
      <div className="model-detail-container">
        {/* Model Section */}
        <div className="model-viewer-section">
          <Canvas camera={{ position: [0, 4, 8], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Model
              position={model.detailPosition}
              modelPath={model.modelPath}
              scale={model.detailScale}
            />
            <OrbitControls />
          </Canvas>
        </div>

        {/* Details Section */}
        <div className="model-details-section">
          <h4>{model.name}</h4>
          <p>
            <strong>Description:</strong>{" "}
            {model.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
          <p>
            <strong>Features:</strong>{" "}
            {model.features ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
          <p>
            <strong>Specifications:</strong>{" "}
            {model.specifications ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
          <button className="back-button" onClick={() => router.push("/")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
