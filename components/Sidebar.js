import { modelConfig } from "../config/modelConfig";
import ModelThumbnail from "./ModelThumbnail";

const Sidebar = ({
  setSelectedFan,
  setSelectedLight,
  onCategoryClick,
  selectedCategory,
}) => {
  const renderModelOptions = (type, setSelected) => {
    const uniqueModels = modelConfig[type].filter(
      (model) => model.id.endsWith("2") === false
    );

    return uniqueModels.map((model) => (
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
            onClick={() => {
              setSelected(model.id);
              localStorage.setItem(
                `${type}-selection`,
                model.id === "back-lit-downlight"
                  ? "back-lit-downlight"
                  : model.id
              );
            }}
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
