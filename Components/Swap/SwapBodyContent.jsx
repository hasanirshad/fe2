import React, { useState } from "react";
import styles from "../Swap/SwapBodyConten.module.css";
import { FaCog, FaExchangeAlt, FaMoneyBillAlt, FaUsers, FaArrowUp, FaArrowDown } from "react-icons/fa"; 
import BuyComponent from "../BuyComponent/BuyComponent";
import {
  SelectPare,
  Swap,
  Staking,
  SendComponent,
} from "../";
import Image from "next/image";
import SmalllightBulb from "./smalllightbulb.png";
import lineimge from "../../public/Assets/RisingLine.png";
import shadowball from "../../public/Assets/OrangeShadow.png";
import orangeball from "../../public/Assets/OrangeBall.png";
import rightshadowball from "../../public/Assets/PurpleShadow.png";
import blueball from "../../public/Assets/PurpleBall.png";
import topleftcornerimage from "../../public/Assets/Pathner.png";
const tabData = [
  { key: "pool", label: "Pool", image: SmalllightBulb },
  { key: "swap", label: "Swap", image: SmalllightBulb },
  { key: "stake", label: "Stake", image: SmalllightBulb },
  { key: "sell", label: "Sell", image: SmalllightBulb },
  { key: "buy", label: "Buy", image: SmalllightBulb },
];

const SwapBodyContent = () => {
  const [activeTab, setActiveTab] = useState("pool");
  const [showSettings, setShowSettings] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "pool":
        return <SelectPare />;
      case "swap":
        return <Swap />;
      case "stake":
        return <Staking />;
      case "sell":
        return <SendComponent />;
      case "buy":
        return <BuyComponent />;
      default:
        return <div />;
    }
  };

  return (
    <>
      <div className={styles.toplestcornerimg}>
        <Image
          src={topleftcornerimage}
          alt="top-left-bulb"
          className={styles.imagestop}
        />
      </div>
      <div className={styles.container}>
        {/* Tabs */}
        <div className={styles.tabflex}>
          <div className={styles.tabs}>
            {tabData.map(({ key, label, image }) => (
              <div key={key} className={`${styles.tabContainer} ${styles.imageandnavitem}`}>
                <button
                  className={activeTab === key ? styles.activeTab : styles.tab}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
                {/* Render image only for the active tab */}
                {activeTab === key && (
                  <Image src={image} alt={`${label} image`} className={styles.tabImage} />
                )}
              </div>
            ))}
            {/* Settings Button */}
            <button
              className={styles.settingsButton}
              onClick={() => setShowSettings(!showSettings)}
            >
              <FaCog className={styles.icon} />
            </button>
          </div>
        </div>
        {/* Tab Content */}
        <div className={styles.mainclasss}>
          <div>
            <Image src={lineimge} alt="" className={styles.leftline} />
            <Image src={orangeball} alt="" className={styles.orangeball} />
            <Image src={shadowball} alt="" className={styles.shadowball} />
          </div>
          <div className={styles.content}>{renderContent()}</div>
          <div>
            <Image src={lineimge} alt="" className={styles.rightline} />
            <Image src={blueball} alt="" className={styles.blueball} />
            <Image
              src={rightshadowball}
              alt=""
              className={styles.rightshadowball}
            />
          </div>
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
    </>
  );
};

export default SwapBodyContent;
