// pages/model/[id].js
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRouter } from "next/router";
import Model from "../../components/Model";

const modelDetails = {
  ceiling_fan: {
    position: [0, 0, 0],
    scale: [1, 1, 1],
  },
  ceiling_fan_lp: {
    position: [0, 1.5, 0],
    scale: [2, 2, 2],
  },
  ceiling_lamp: {
    position: [0, 1.5, 0],
    scale: [1.5, 1.5, 1.5],
  },
  ceiling_lamp_lp: {
    position: [0, 1.5, 0],
    scale: [2, 2, 2],
  },
  // Add more model details as needed
};

export default function ModelDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || !modelDetails[id]) return null;

  const { position, scale } = modelDetails[id];

  return (
    <div className="model-detail-container">
      <h4>Model: {id}</h4>

      <div className="model-viewer">
        <Canvas camera={{ position: [0, 4, 8], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Model
            position={position}
            modelPath={`/models/${id}/scene.gltf`}
            scale={scale}
          />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            minDistance={1}
            maxDistance={10}
            target={[0, 1.5, 0]}
            maxAzimuthAngle={Math.PI}
            minAzimuthAngle={-Math.PI}
          />
        </Canvas>
      </div>
      <p>Details about the {id} model...</p>
      <button className="custom-button" onClick={() => router.back()}>
        Back
      </button>

      <style jsx>{`
        .model-detail-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #f8f9fa 0%, #f5f5f5 100%);
          text-align: center;
        }

        .model-viewer {
          width: 90vw;
          height: 50vh;
          background-color: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        h4 {
          font-size: 24px;
          font-weight: 600;
          color: #202124;
          margin-bottom: 20px;
        }

        p {
          color: #5f6368; /* Subtle grey for the paragraph text */
          font-size: 16px;
          margin: 20px 0;
        }

        .custom-button {
          margin: 10px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #1a73e8;
          color: #fff;
          border-radius: 4px;
          transition: background-color 0.3s, box-shadow 0.3s;
        }

        .custom-button:hover {
          background-color: #174ea6;
          box-shadow: 0 4px 10px rgba(23, 74, 166, 0.3);
        }
      `}</style>
    </div>
  );
}
