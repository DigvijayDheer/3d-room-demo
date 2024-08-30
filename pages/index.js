import Room from "../components/Room";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedFan, setSelectedFan] = useState(null);
  const [selectedLight, setSelectedLight] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handlePointerClick = (type) => {
    if (type === "fan") {
      setSelectedCategory("fan");
      localStorage.setItem("selected-category", "fan");
    } else if (type === "light") {
      setSelectedCategory("light");
      localStorage.setItem("selected-category", "light");
    }
    window.location.reload(); // Reload the page whenever a category is selected
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selected-category", category);
    window.location.reload(); // Reload the page whenever a category is selected
  };

  return (
    <div className="container">
      <Room
        selectedFan={selectedFan}
        selectedLight={selectedLight}
        onPointerClick={handlePointerClick}
      />
      <Sidebar
        setSelectedFan={(fan) => {
          setSelectedFan(fan);
          localStorage.setItem("fan-selection", fan);
          window.location.reload(); // Reload the page whenever a fan is selected
        }}
        setSelectedLight={(light) => {
          setSelectedLight(light);
          localStorage.setItem("light-selection", light);
          window.location.reload(); // Reload the page whenever a light is selected
        }}
        onCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
