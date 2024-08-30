import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Room from "../components/Room";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons"; // Import refresh icon

const Home = () => {
  const [selectedFan, setSelectedFan] = useState(null);
  const [selectedLight, setSelectedLight] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Load initial state from local storage
  useEffect(() => {
    const storedFan = localStorage.getItem("fan-selection");
    const storedLight = localStorage.getItem("light-selection");
    const storedCategory = localStorage.getItem("selected-category");

    if (storedFan) {
      setSelectedFan(storedFan);
    }

    if (storedLight) {
      setSelectedLight(storedLight);
    }

    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

  // Handle state changes and trigger page reload
  const handleSelectionChange = (type, value) => {
    if (type === "fan") {
      setSelectedFan(value);
      localStorage.setItem("fan-selection", value);
    } else if (type === "light") {
      setSelectedLight(value);
      localStorage.setItem("light-selection", value);
    }
    window.location.reload(); // Reload page to re-render models properly
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selected-category", category);
    window.location.reload(); // Reload page to reflect menu state change
  };

  const handlePointerClick = (type) => {
    if (type === "fan") {
      handleCategoryChange("fan");
      setShowFanPointer(false); // Hide the pointer after selecting
    }
    if (type === "light") {
      handleCategoryChange("light");
      setShowLightPointer(false); // Hide the pointer after selecting
    }
  };

  // Function to clear local storage and reload the page
  const handleClearStorage = () => {
    localStorage.removeItem("fan-selection");
    localStorage.removeItem("light-selection");
    localStorage.removeItem("selected-category");
    window.location.reload(); // Reload the page to reset to the initial state
  };

  return (
    <div className="container">
      {/* Clear button to reset the state */}
      {/* <button onClick={handleClearStorage} className="clear-button">
        Reset Room
      </button> */}
      <Room
        selectedFan={selectedFan}
        selectedLight={selectedLight}
        onPointerClick={handlePointerClick}
      />
      <Sidebar
        setSelectedFan={(value) => handleSelectionChange("fan", value)}
        setSelectedLight={(value) => handleSelectionChange("light", value)}
        onCategoryClick={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      {/* Button with refresh icon */}
      <button onClick={handleClearStorage} className="clear-button">
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

export default Home;
