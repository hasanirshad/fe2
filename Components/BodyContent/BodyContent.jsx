import React, { useState } from "react";
import styles from "./BodyContent.module.css";
import { SendComponent } from "../";
 import BuyComponent from "../BuyComponent/BuyComponent";
import { FaCog } from "react-icons/fa"; // Importing a settings icon from react-icons
//imported from the components we created
import {
    AddLiquidity,
    SwapComponent,
    StakingComponent,
    PoolAdd,
    Staking
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
        return <Staking></Staking>;
    case "Send":
        return <SendComponent>Send Content</SendComponent>;
    case "Buy":
        return <BuyComponent>Buy Content</BuyComponent>;
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
          className={activeTab === "Send" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("Send")}
        >
          Send
        </button>
        <button
          className={activeTab === "Buy" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("Buy")}
        >
          Buy
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
