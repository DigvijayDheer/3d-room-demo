// pages/index.js
import Room from "../components/Room";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [selectedFan, setSelectedFan] = useState(null);
  const [selectedLight, setSelectedLight] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handlePointerClick = (type) => {
    if (type === "fan") {
      setSelectedCategory("fan");
    } else if (type === "light") {
      setSelectedCategory("light");
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <Room
        selectedFan={selectedFan}
        selectedLight={selectedLight}
        onPointerClick={handlePointerClick}
      />
      <Sidebar
        setSelectedFan={setSelectedFan}
        setSelectedLight={setSelectedLight}
        onCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
