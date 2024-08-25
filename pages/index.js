import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Room from "../components/Room";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [selectedFan, setSelectedFan] = useState("ceiling_fan");
  const [selectedLamp, setSelectedLamp] = useState("ceiling_lamp");

  // Load the selected fan and lamp from localStorage on initial load
  useEffect(() => {
    const savedFan = localStorage.getItem("selectedFan");
    const savedLamp = localStorage.getItem("selectedLamp");

    if (savedFan) setSelectedFan(savedFan);
    if (savedLamp) setSelectedLamp(savedLamp);
  }, []);

  // Save the selected fan and lamp to localStorage and reload the page
  const handleSetSelectedFan = (modelId) => {
    setSelectedFan(modelId);
    localStorage.setItem("selectedFan", modelId);
    window.location.reload(); // Reloads the page
  };

  const handleSetSelectedLamp = (modelId) => {
    setSelectedLamp(modelId);
    localStorage.setItem("selectedLamp", modelId);
    window.location.reload(); // Reloads the page
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.modelBox}>
          <Room selectedFan={selectedFan} selectedLamp={selectedLamp} />
        </div>
        <div className={styles.sidebar}>
          <Sidebar
            setSelectedFan={handleSetSelectedFan}
            setSelectedLamp={handleSetSelectedLamp}
          />
        </div>
      </div>
    </Layout>
  );
}
