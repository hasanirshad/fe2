import React, { useState } from "react";
import styles from "./BodyContent.module.css";
import { FaCog } from "react-icons/fa"; // Importing a settings icon from react-icons
//imported from the components we created
import {
    AddLiquidity,
    SwapComponent,
    StakingComponent,
    PoolAdd
  } from "../";

const BodyContent = () => {
  const [activeTab, setActiveTab] = useState("pool");
  const [showSettings, setShowSettings] = useState(false); // State to handle the popup visibility

  const renderContent = () => {
    switch (activeTab) {
    case "pool":
        return <PoolAdd></PoolAdd>;  
    case "swap":
        return <SwapComponent></SwapComponent>;
    case "stake":
        return <StakingComponent></StakingComponent>;
    case "buy":
        return <SwapComponent>Buy Content</SwapComponent>;
    case "sell":
        return <SwapComponent>Sell Content</SwapComponent>;
    default:
        return <div>Swap Content</div>;
    }
  };

  return (
    <div className={styles.container}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={activeTab === "pool" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("pool")}
        >
          Pool
        </button>
        <button
          className={activeTab === "swap" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("swap")}
        >
          Swap
        </button>
        <button
          className={activeTab === "stake" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("stake")}
        >
          Stake
        </button>
        <button
          className={activeTab === "buy" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("buy")}
        >
          Buy
        </button>
        <button
          className={activeTab === "sell" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("sell")}
        >
          Sell
        </button>

        {/* Settings Button */}
        <button
          className={styles.settingsButton}
          onClick={() => setShowSettings(!showSettings)}
        >
          <FaCog className={styles.icon} /> {/* Settings Icon */}
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.content}>
        {renderContent()}
      </div>

      {/* Settings Popup */}
      {showSettings && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Settings</h3>
            <p>Configure your preferences here.</p>
            <button onClick={() => setShowSettings(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyContent;
