import React, { useState, useRef, useEffect } from "react";
import styles from "./SelectPare.module.css";
import TokenSelector from "../TokenSelector/TokenSelector";

const SelectPare = () => {
  const [selectDrowdown, setSelectDrowdown] = useState(false);
  const [value, setValue] = useState(true);
  const dropdownRef = useRef(null);
  const tokenSelectorRef = useRef(null);

  function handleDrowpdown(e) {
    setSelectDrowdown((prev) => !prev);
  }
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      tokenSelectorRef.current &&
      !tokenSelectorRef.current.contains(event.target)
    ) {
      setSelectDrowdown(false);
    }
  };
  function handleShow() {
    setValue((prev) => !prev);
    console.log(value);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 const PercentageBox = ({ value1, value2 }) => {
    return (
      <div className={styles.percentageBoxContainer}>
        <span>{`${value1}%`}</span>
        <span>Best for very stable Pairs</span>
        <span>{`${value2}% Select `}</span>
      </div>
    );
  };

  const PriceRange = ({ priceLable }) => {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount((prev) => prev + 1);
    }
  
    function decrement() {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
  
    const handleChange = (e) => {
      const value = e.target.value;
      // Ensure the input is a number and non-negative
      if (!isNaN(value) && value >= 0) {
        setCount(Number(value));
      }
    };
  
    return (
      <div className={styles.priceRangeContainer}>
        <div>
          <span>{priceLable}</span>
          <input
            type="number"
            value={count}
            onChange={handleChange}
            min="0" 
            className={styles.backGroundNone}
          />
          <span>Per</span>
        </div>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    );
  };
  

  return (
    <>
      <div className={styles.container}>
        {selectDrowdown && (
          <div ref={tokenSelectorRef}>
            <TokenSelector />
          </div>
        )}
        <div className={styles.section1}>
          <span>Select Pair</span>
        </div>
        <div className={styles.section2}>
          <div>
            <img src="svgs/logo.svg" alt="loading..." />
            <span>ETFSwap</span>
          </div>
          <div ref={dropdownRef}>
            <img src="svgs/slectPairImg2.svg" alt="loading..." />
            <select
              name="selecPair"
              id="select_id"
              onClick={handleDrowpdown}
            ></select>
          </div>
        </div>
        <div className={styles.section3}>
          <div>
            <span>Fee tier</span>
            <span>The % you will earn in fees.</span>
          </div>
          <div>
            <button onClick={handleShow}>{value ? "Hide" : "Show"}</button>
          </div>
        </div>
        <div
          className={`${styles.section4} ${
            value ? styles.boxShow : styles.hide
          }`}
        >
          <PercentageBox value1="0.01" value2="0" />
          <PercentageBox value1="0.05" value2="0" />
          <PercentageBox value1="0.30" value2="9" />
          <PercentageBox value1="1.00" value2="91" />
        </div>
        <div className={styles.section5}>
          <div>
            <span>Set Price Range</span>
          </div>
          <div>
            <div>
              <span>1INCH</span>
              <span>ETH</span>
            </div>
          </div>
        </div>
        <div>
          <PriceRange priceLable="Low Price" />
        </div>
        <div>
          <PriceRange priceLable="High Price" />
        </div>
      </div>
    </>
  );
};

export default SelectPare;