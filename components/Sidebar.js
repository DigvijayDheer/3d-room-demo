// components/Sidebar.js
import { modelConfig } from "../config/modelConfig";
import ModelThumbnail from "./ModelThumbnail";

const Sidebar = ({
  setSelectedFan,
  setSelectedLight,
  onCategoryClick,
  selectedCategory,
}) => {
  const renderModelOptions = (type, setSelected) => {
    return modelConfig[type].map((model) => (
      <div key={model.id} className="modelOption">
        <span>{model.name}</span>
        <ModelThumbnail
          modelPath={model.modelPath}
          position={model.thumbnailPosition} // Use thumbnail position
          scale={model.thumbnailScale} // Use thumbnail scale
        />
        <div>
          <button
            className="customButton"
            onClick={() => setSelected(model.id)}
          >
            Select
          </button>
          <a href={`/model/${model.id}`}>
            <button className="customButton">View Details</button>
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div className="sidebar">
      <button className="customButton" onClick={() => onCategoryClick("fan")}>
        Show Fans
      </button>
      <button className="customButton" onClick={() => onCategoryClick("light")}>
        Show Lights
      </button>

      {selectedCategory === "fan" && (
        <>
          <h3>Select Fan</h3>
          {renderModelOptions("fans", setSelectedFan)}
        </>
      )}

      {selectedCategory === "light" && (
        <>
          <h3>Select Light</h3>
          {renderModelOptions("lights", setSelectedLight)}
        </>
      )}
    </div>
  );
};

export default Sidebar;
