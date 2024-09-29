import React, { useState, useRef, useEffect } from "react";
import styles from "./SelectPare.module.css";
import TokenSelector from "../TokenSelector/TokenSelector";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const SelectPare = () => {
  const [selectedBox, setSelectedBox] = useState(null); // To manage selected box
  const [value, setValue] = useState(true); // To manage hide/show
  const dropdownRef = useRef(null);
  const tokenSelectorRef = useRef(null);

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
      <div className="w-[820px] h-[701px] rounded-[8px] p-6 flex flex-col  border bg-[#1E1E49EB] border-[#162A69]">
        <span className="text-left mb-2">Select Pair</span>
        <div className="flex flex-row gap-2 mb-2">
          <div className="bg-transparent flex items-center gap-4 rounded-[8px] w-[382px] border border-[#162A69] p-2 ">
            <img
              className="w-[49px] h-[44px]"
              src="svgs/logo.svg"
              alt="loading..."
            />
            <span>ETFSwap</span>
          </div>
          <TokenSelector />
        </div>

        <div className="flex text-left justify-between pr-4 mb-2">
          <div className="flex flex-col space-y-2 ">
            <span className="font-[Inter] font-bold text-[16px]">Fee tier</span>
            <span>The % you will earn in fees.</span>
          </div>
          <button onClick={handleShow}>{value ? "Hide" : "Show"}</button>
        </div>

        {value && (
          <div className="flex gap-2 ">
            {/* Render PercentageBox components */}
            {["0.01", "0.05", "0.30", "1.00"].map((val, index) => (
              <PercentageBox
                key={index}
                value1={val}
                value2={index === selectedBox ? "Selected" : "0"}
                isSelected={index === selectedBox}
                onClick={() => setSelectedBox(index)}
              />
            ))}
          </div>
        )}

        <div className="flex justify-between p-1 rounded-[4px] ">
          <span className="text-[16px] font-[Inter] font-bold">
            Set Price Range
          </span>
          <div className="flex gap-2 p-2 border border-[#162A69]">
            <span>1INCH</span>
            <span className="bg-[#162A69] ">ETH</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 p-2">
          <PriceRange priceLable="Low Price" />
          <PriceRange priceLable="High Price" />
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
      <span className="text-[Inter] font-bold text-[16px]">{`${value1}%`}</span>
      <span className="text-[14px] font-light">Best for very stable Pairs</span>
      <span>{`${value2} Select `}</span>

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

  return (
    <div className="w-full h-[120px] rounded-[8px] bg-[#162A69] p-3">
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between">
          <span>{priceLable}</span>
          <button
            className="text-[#162A69] text-center h-[20px] w-[20px] bg-[#0892D0]"
            onClick={increment}
          >
            +
          </button>
        </div>
        <span className="text-left">{count}</span>
        <div className="flex justify-between">
          <span>Per</span>
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
