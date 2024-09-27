import React from "react";
import styles from "./SelectPare.module.css";

const SelectPare = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <span>Select Pair</span>
        </div>
        <div className={styles.section2}>
          <div>
            <img src="svgs/logo.svg" alt="loading..." />
            <span>ETFSwap</span>
          </div>
          <div>
            <img src="svgs/slectPairImg2.svg" alt="loading..." />
            <select name="selecPair" id="select_id">
              <option value="1inch">1inch</option>
              <option value="2inch">2inch</option>
              <option value="3inch">3inch</option>
            </select>
          </div>
        </div>
        <div className={styles.section3}>
          <div>
            <span>Fee tier</span>
            <span>The % you will earn in fees.</span>
          </div>
          <div>
            <button>Hide</button>
          </div>
        </div>
        <div className={styles.section4}>
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
          <PriceRange value="0" />
        </div>
        <div>
          <PriceRange value="0" />
        </div>
      </div>
    </>
  );
};

export default SelectPare;

export const PercentageBox = ({ value1, value2 }) => {
  return (
    <div className={styles.percentageBoxContainer}>
      <span>{`${value1}%`}</span>
      <span>Best for very stable Pairs</span>
      <span>{`${value2}% Select `}</span>
    </div>
  );
};

export const PriceRange = ({ value }) => {
  return (
    <div className={styles.priceRangeContainer}>
      <div>
        <span>Low price</span>
        <span>{value}</span>
        <span>Per</span>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};
