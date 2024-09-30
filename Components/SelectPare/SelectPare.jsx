import React, { useState, useRef, useEffect } from "react";
import TokenSelector from "../TokenSelector/TokenSelector";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styles from "./SelectPare.module.css";
import Image from 'next/image'
import wallet from "../../public/Assets/Wallet.png";
import usdt from "../../public/Assets/usdt_green.png";


const tokenData = [
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
const SelectPare = () => {
  const [selectedBox, setSelectedBox] = useState(null); // To manage selected box
  const [value, setValue] = useState(false); // To manage hide/show
  const dropdownRef = useRef(null);
  const tokenSelectorRef = useRef(null);
  const [selectedToke, setSelectedToken] = useState({
    name: '',
    symbol: '',
    icon: '',
  });

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      tokenSelectorRef.current &&
      !tokenSelectorRef.current.contains(event.target)
    ) {
      setValue(false);
    }
  };
  

  function handleShow() {
    setValue((prev) => !prev);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  return (
    <>
      <div
        className="w-[820px] h-[701px] rounded-[8px] p-6 flex flex-col border bg-[#1E1E49EB] border-[#162A69]"
        style={{ height: "auto", margin: "auto" }}
      >
        <span className="text-left mb-2 text-[16px] font-[500] font-['Inter']">Pool Pair</span>
        <div className="flex flex-row gap-2 mb-2">
          <div className="bg-transparent flex items-center gap-4 rounded-[8px] w-[382px] border border-[#162A69] p-2 ">
            <img
              className="w-[49px] h-[44px]"
              src="svgs/logo.svg"
              alt="loading..."
            />
            <span className="text-[20px] font-[500] font-['Inter']">ETFSwap</span>
          </div>
          <div className="bg-transparent flex items-center gap-4 rounded-[8px] w-[382px] border border-[#162A69] p-2 ">
            <img
              className="w-[49px] h-[44px]"
              src="Assets/usdt_green.png"
              alt="loading..."
            />
            <span className="text-[20px] font-[500] font-['Inter']">USDT</span>
          </div>
        </div>

        <div className="flex text-left justify-between pr-4 mb-2">
          <div className="flex flex-col space-y-2 ">
            <span className="font-[Inter] font-[500] text-[16px]">Fee tier</span>
            <span className="font-[Inter] font-[400] text-[14px]">The % you will earn in fees.</span>
          </div>
          <button className="font-[Inter] font-[400] text-[14px]" onClick={handleShow}>{value ? "Hide" : "Show"}</button>
        </div>

        {value && (
          <div className="flex gap-2">
            {/* Render PercentageBox components */}
            {["0.01", "0.05", "0.30", "1.00"].map((val, index) => (
              <PercentageBox
                key={index}
                value1={val}
                value2={index === selectedBox ? "Selected" : ""}
                isSelected={index === selectedBox}
                onClick={() => setSelectedBox(index)}
              />
            ))}
          </div>
        )}
        <div className="flex justify-between p-1 rounded-[4px]">
          <span className="text-[16px] font-[Inter] font-[500]">
            Enter USDT (value in USDT)
          </span>
          <div className="flex gap-2 p-2 border border-[#162A69]">
            <span className="text-[14px] font-[Inter] font-[400]">USDT</span>
            <span className="bg-[#162A69] text-[14px] font-[Inter] font-[500]">ETFS</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-2 pricerange">
          <PriceRange className="lowprice" priceLable="" />
          <button className={styles.stakeButton}>Add Liquidity</button>
          </div>
      </div>
    </>
  );
};

export default SelectPare;

export const PercentageBox = ({ value1, value2, isSelected, onClick }) => {
  return (
    <div
      className={`w-[186px] h-[127px] bg-transparent rounded-[4px] flex flex-col text-left p-4 border border-[#162A69] space-y-2 relative cursor-pointer mb-2 ${
        isSelected ? "border-[#0892D0]" : ""
      }`}
      onClick={onClick}
    >
      <span className="text-[Inter] font-[500] text-[16px]">{`${value1}%`}</span>
      <span className="text-[14px] font-[400] text-[Inter] text-[#FFFFFFCC]">Best for very stable Pairs</span>
      <span className="text-[12px] font-[400] text-[#FFFFFFE5]">{`${value2} `}</span>

      {/* Show check icon on top-right corner if selected */}
      {isSelected && (
        <div className="absolute top-0 right-2">
          <IoIosCheckmarkCircleOutline size={20} color="#0892D0" />
        </div>
      )}
    </div>
  );
};

export const PriceRange = ({ priceLable }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    count > 0 ? setCount((prev) => prev - 1) : setCount(0);
  }

  function handleInputChange(e) {
    const value = parseInt(e.target.value, 10);
    setCount(isNaN(value) || value < 0 ? 0 : value); // Ensure the value is valid
  }

  return (
    <div className="w-full h-[120px] rounded-[8px] bg-[#162A69] p-3">
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between">
          <span className="text-[14px] font-[inter] font-[400] text-[#FFFFFFCC]">{priceLable}</span>
          <button
            className="text-[#162A69] text-center h-[20px] w-[20px] bg-[#0892D0]"
            onClick={increment}
          >
            +
          </button>
        </div>
        <input
  type="text"
  className="w-[100%] appearance-none bg-transparent border-none outline-none ${styles.noSpinner} text-[20px] font-[500]"
  value={count}
  onChange={handleInputChange}
  style={{
    textAlign: "left",
    WebkitAppearance: "none", // For Chrome, Safari, Opera
    MozAppearance: "textfield", // For Firefox
    appearance: "textfield", // Generic appearance removal
  }}
/>
        <div className="flex justify-between">
          <span className="text-[14px] font-[400]"></span>
          <button
            className="text-[#162A69] text-center h-[20px] w-[20px] bg-[#0892D0]"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
