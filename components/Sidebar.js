import React from "react";
import ModelThumbnail from "./ModelThumbnail";
import { modelConfig } from "../config/modelConfig";

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
              const selectedId = model.id.includes("fan")
                ? `${model.id}-2`
                : `${model.id}-2`;
              setSelected(selectedId);
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
        }}
      >
        Show Fans
      </button>
      <button
        className="customButton"
        onClick={() => {
          onCategoryClick("light");
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
