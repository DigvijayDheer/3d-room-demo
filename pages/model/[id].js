import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRouter } from "next/router";
import Model from "../../components/Model";
import { getModelConfig } from "../../config/modelConfig";
import { useEffect, useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const generateModelData = (name, type) => {
  const randomPrice = (Math.random() * 5000 + 2000).toFixed(2);
  const randomOriginalPrice = (parseFloat(randomPrice) * 1.5).toFixed(2);
  const randomDiscount = Math.floor(Math.random() * 50) + 10;
  const randomRatings = Math.floor(Math.random() * 100) + 10;
  const randomRatingStars = Math.floor(Math.random() * 5) + 1;

  let details;

  if (type === "fan") {
    details = [
      { label: "Power Source", value: "Electric" },
      { label: "Style", value: "1200MM" },
      {
        label: "Product Dimensions",
        value: `${Math.floor(Math.random() * 150) + 100}D x ${
          Math.floor(Math.random() * 150) + 100
        }W x 42.5H cm`,
      },
      { label: "Room Type", value: "Living Room, Bedroom, Dining Room" },
      { label: "Special Feature", value: "Remote Control, Built-in LED Light" },
      {
        label: "Wattage",
        value: `${Math.floor(Math.random() * 100) + 50} Watts`,
      },
      { label: "Finish Type", value: "Metallic" },
      { label: "Warranty", value: "2 years" },
    ];
  } else if (type === "light") {
    details = [
      { label: "Power Source", value: "Electric" },
      { label: "Style", value: "Modern" },
      {
        label: "Product Dimensions",
        value: `${Math.floor(Math.random() * 50) + 10}D x ${
          Math.floor(Math.random() * 50) + 10
        }W x ${Math.floor(Math.random() * 30) + 5}H cm`,
      },
      { label: "Room Type", value: "Living Room, Office, Kitchen" },
      { label: "Special Feature", value: "Energy Efficient, Dimmable" },
      {
        label: "Wattage",
        value: `${Math.floor(Math.random() * 50) + 10} Watts`,
      },
      {
        label: "Color Temperature",
        value: `${Math.floor(Math.random() * 2000) + 3000}K`,
      },
      {
        label: "Warranty",
        value: `${Math.floor(Math.random() * 3) + 1} years`,
      },
    ];
  }

  return {
    name,
    price: `₹${randomPrice}`,
    originalPrice: `₹${randomOriginalPrice}`,
    discount: `${randomDiscount}% off`,
    ratings: `${randomRatings} ratings`,
    stars: randomRatingStars,
    details,
  };
};

export default function ModelDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [model, setModel] = useState(null);
  const [modelData, setModelData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const fetchedModel = getModelConfig(id);
      setModel(fetchedModel);

      if (fetchedModel) {
        const modelType = fetchedModel.modelPath.includes("/Fans/")
          ? "fan"
          : "light";

        const randomData = generateModelData(fetchedModel.name, modelType);
        setModelData(randomData);
      } else {
        console.error("Model not found for ID:", id);
      }
    }
  }, [router.isReady, id]);

  if (!model || !modelData) return <div>Loading model...</div>;

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="model-detail-page">
      <div className="model-detail-container">
        <div className="model-viewer-section">
          <button className="wishlist-button">
            <AiFillHeart style={{ color: "red" }} />
          </button>
          <Canvas camera={{ position: [0, 4, 8], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Model
              position={model.detailPosition}
              modelPath={model.modelPath}
              scale={model.detailScale}
            />
            <OrbitControls minDistance={4} maxDistance={10} />
          </Canvas>
        </div>

        <div className="model-details-section">
          <div className="title">
            <h2>{modelData.name}</h2>
            <p>
              <strong>Brand:</strong> {modelData.name.split(" ")[0]}{" "}
            </p>
          </div>
          <div className="price-section">
            <p>
              <strong>Price:</strong>{" "}
              <span className="new_price">{modelData.price}</span>{" "}
              <span className="discount">({modelData.discount})</span>
            </p>
            <p>
              <strong>Original Price:</strong>{" "}
              <span className="old_price">{modelData.originalPrice}</span>
            </p>
          </div>

          <p className="rating-section">
            <strong>Ratings:</strong>{" "}
            {[...Array(modelData.stars)].map((_, index) => (
              <AiFillStar key={index} color="gold" />
            ))}
            <span>({modelData.ratings})</span>
          </p>

          <ul className={`product-details-list ${showMore ? "show-more" : ""}`}>
            {modelData.details.map((detail, index) => (
              <li key={index}>
                <strong>{detail.label}:</strong> {detail.value}
              </li>
            ))}
          </ul>

          <div className="show-more-container">
            <a href="#" className="show-more-link" onClick={toggleShowMore}>
              {showMore ? "Show Less" : "Show More"}
            </a>
          </div>

          <div className="purchase-section">
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
