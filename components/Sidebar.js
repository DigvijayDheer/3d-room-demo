// components/Sidebar.js
import styles from "../styles/Home.module.css";

const Sidebar = ({ setSelectedFan, setSelectedLamp }) => {
  const fans = [
    { id: "ceiling_fan", name: "Ceiling Fan" },
    { id: "ceiling_fan_lp", name: "Ceiling Fan LP" },
  ];

  const lamps = [
    { id: "ceiling_lamp", name: "Ceiling Lamp" },
    { id: "ceiling_lamp_lp", name: "Ceiling Lamp LP" },
  ];

  return (
    <div className={styles.sidebar}>
      <h3>Select Fan</h3>
      {fans.map((fan) => (
        <div key={fan.id} className={styles.modelOption}>
          <span>{fan.name}</span>
          <div>
            <button
              className={styles.customButton}
              onClick={() => setSelectedFan(fan.id)}
            >
              Select
            </button>
            <a href={`/model/${fan.id}`}>
              <button className={styles.customButton}>View Details</button>
            </a>
          </div>
        </div>
      ))}

      <h3>Select Lamp</h3>
      {lamps.map((lamp) => (
        <div key={lamp.id} className={styles.modelOption}>
          <span>{lamp.name}</span>
          <div>
            <button
              className={styles.customButton}
              onClick={() => setSelectedLamp(lamp.id)}
            >
              Select
            </button>
            <a href={`/model/${lamp.id}`}>
              <button className={styles.customButton}>View Details</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
