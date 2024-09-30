import React, { useState } from "react";
import styles from "../Swap/SwapBodyConten.module.css";
import { FaCog, FaExchangeAlt, FaMoneyBillAlt, FaUsers, FaArrowUp, FaArrowDown } from "react-icons/fa"; 
import BuyComponent from "../BuyComponent/BuyComponent";
import {
  SelectPare,
  Swap,
  Staking,
  SendComponent,
  SwapSell
} from "../";
import Image from "next/image";
import SmalllightBulb from "./smalllightbulb.png";
import lineimge from "../../public/Assets/RisingLine.png";
import shadowball from "../../public/Assets/OrangeShadow.png";
import orangeball from "../../public/Assets/OrangeBall.png";
import rightshadowball from "../../public/Assets/PurpleShadow.png";
import blueball from "../../public/Assets/PurpleBall.png";
import topleftcornerimage from "../../public/Assets/Pathner.png";
import etfswap from '../../public/Assets/etfswap2.png'
import usdt from '../../public/Assets/usdt_green.png'
const tabData = [
  { key: "pool", label: "Invest", image: SmalllightBulb },
  { key: "buy", label: "Buy", image: SmalllightBulb },
  { key: "sell", label: "Sell", image: SmalllightBulb },
  { key: "stake", label: "Stake", image: SmalllightBulb },
];





const Sell = [
  {
    name: 'ETFS',
    symbol: 'ETFS',
    icon: etfswap,
  },
  {
    name: 'Ox Protocol',
    symbol: 'ZRX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: '1inch',
    symbol: '1INCH',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0679934e2f2bb54d66551ba323ea53b5e2d578f9099347a41ba7d10342c477ab?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c065506ae2ae8f8fa678e29e56ac185aa6d4120c914c0f2e346abd1f47fdd?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Across Protocol',
    symbol: 'ACX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3be2771f01a18591fb5f8f5a5b9f926c61e61c04b61836158d241b8ee9581070?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AdEx',
    symbol: 'ADX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0e409a5c87c9719f8a2e78fbcbc92819bb4b5db5d741456f6d0e63c3f754f15?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AIOZ Network',
    symbol: 'AIOZ',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a42c2d69199f0a18625e7ffa45215fc0f59daf7261996227b6a3cc890e282f26?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
];
const Buy = [
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: usdt,
  },
  {
    name: 'ETFS',
    symbol: 'ETFS',
    icon: etfswap,
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: usdt,
  },
  {
    name: 'Ox Protocol',
    symbol: 'ZRX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: '1inch',
    symbol: '1INCH',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0679934e2f2bb54d66551ba323ea53b5e2d578f9099347a41ba7d10342c477ab?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c065506ae2ae8f8fa678e29e56ac185aa6d4120c914c0f2e346abd1f47fdd?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Across Protocol',
    symbol: 'ACX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3be2771f01a18591fb5f8f5a5b9f926c61e61c04b61836158d241b8ee9581070?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AdEx',
    symbol: 'ADX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0e409a5c87c9719f8a2e78fbcbc92819bb4b5db5d741456f6d0e63c3f754f15?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AIOZ Network',
    symbol: 'AIOZ',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a42c2d69199f0a18625e7ffa45215fc0f59daf7261996227b6a3cc890e282f26?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
];
const SwapBodyContent = () => {
  const [activeTab, setActiveTab] = useState("pool");
  const [showSettings, setShowSettings] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "pool":
        return <SelectPare />;
      case "stake":
        return <Staking />;
      case "sell":
        return <SwapSell 
        Sell={Sell}
        Buy={Buy}
        title='sell'/>;
      case "buy":
        return <Swap 
        Sell={Buy}
        Buy={Sell}
        title='buy'/>;
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
