import React from 'react';
import styles from './HPool.module.css'; // Assuming you will add the CSS here

const HPool = () => {
  return (
    <div className={styles.container}>
      {/* Section for Select Pair */}
      <div className={styles.section}>
        <div className={styles.header}>
          <span>Select Pair</span>
        </div>
        <div className={styles.pairSelector}>
          <div className={styles.logoBox}>
            <img src="svgs/logo.svg" alt="ETFSwap logo" />
            <span>ETFSwap</span>
          </div>
          <div className={styles.dropdown}>
            <img src="svgs/selectPairImg2.svg" alt="1inch logo" />
            <select>
              <option value="1inch">1inch</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
      </div>

      {/* Section for Fee Tier */}
      <div className={styles.section}>
        <div className={styles.header}>
          <span>Fee Tier</span>
          <span>The % you will earn in fees.</span>
        </div>
        <div className={styles.feeOptions}>
          <div className={styles.feeBox}>0.01% <span>Best for very stable Pairs</span></div>
          <div className={styles.feeBox}>0.05% <span>Best for very stable Pairs</span></div>
          <div className={styles.feeBox}>0.30% <span>Best for very stable Pairs</span></div>
          <div className={styles.feeBox}>1.00% <span>Best for very stable Pairs</span></div>
        </div>
      </div>

      {/* Section for Set Price Range */}
      <div className={styles.section}>
        <div className={styles.header}>
          <span>Set Price Range</span>
        </div>
        <div className={styles.priceRange}>
          <div className={styles.rangeBox}>
            <span>Low Price</span>
            <input type="number" placeholder="0" />
            <span>Per</span>
          </div>
          <div className={styles.rangeBox}>
            <span>High Price</span>
            <input type="number" placeholder="0" />
            <span>Per</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPool;
