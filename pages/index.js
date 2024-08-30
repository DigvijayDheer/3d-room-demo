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

    if (storedFan) {
      setSelectedFan(storedFan);
    }

    if (storedLight) {
      setSelectedLight(storedLight);
    }
  }, []);

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
        setSelectedFan={(fan) => {
          setSelectedFan(fan);
          localStorage.setItem("fan-selection", fan);
        }}
        setSelectedLight={(light) => {
          setSelectedLight(light);
          localStorage.setItem("light-selection", light);
        }}
        onCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
