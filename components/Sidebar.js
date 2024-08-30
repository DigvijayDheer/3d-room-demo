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
      (model) => !model.id.includes("2") && !model.id.includes("3")
    );

    return uniqueModels.map((model) => (
      <div key={model.id} className="modelOption">
        <span>{model.name}</span>
        <ModelThumbnail
          modelPath={model.modelPath}
          position={model.thumbnailPosition}
          scale={model.thumbnailScale}
        />
        <div>
          <button
            className="customButton"
            onClick={() => {
              setSelected(
                model.id.includes("fan") ? `${model.id}-2` : `${model.id}-3`
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
      <button
        className="customButton"
        onClick={() => {
          onCategoryClick("fan");
          localStorage.setItem("selected-category", "fan");
        }}
      >
        Show Fans
      </button>
      <button
        className="customButton"
        onClick={() => {
          onCategoryClick("light");
          localStorage.setItem("selected-category", "light");
        }}
      >
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
