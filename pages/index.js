import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Room from "../components/Room";

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
    if (type === "fan") handleSelectionChange("fan", "coffee-color-fan-2");
    if (type === "light")
      handleSelectionChange("light", "back-lit-downlight-2");
  };

  return (
    <div className="container">
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
    </div>
  );
};

export default Home;
