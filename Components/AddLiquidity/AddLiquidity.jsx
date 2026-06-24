import { React } from "react";
import styles from "./AddLiquidity.module.css";
import FeeTierCard from "./FeeTierCard";
// import PriceInput from "./PriceInput";

const AddLiquidity = () => {
  const feeTiers = [
    {
      percentage: "0.01%",
      description: "Best for very stable Pairs",
      selectPercentage: "0%",
    },
    {
      percentage: "0.05%",
      description: "Best for very stable Pairs",
      selectPercentage: "0%",
    },
    {
      percentage: "0.30%",
      description: "Best for very stable Pairs",
      selectPercentage: "9%",
    },
    {
      percentage: "1.00%",
      description: "Best for very stable Pairs",
      selectPercentage: "91%",
      selected: true,
    },
  ];

  return (
    <div className={styles.mainContent}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aca28e42db634c426a60e4b1d5c7a44f140f7d90934fa1ec3785e1bcc9f5566?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
        alt=""
        className={styles.backgroundImage}
      />
      <form className={styles.liquidityForm}>
        <header className={styles.header}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34cd699e7df657df10fa0968985f67ca2087bfd3ba8ef6133ebef0d90e0dfa2f?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
            alt="Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Add Liquidity</h1>
          <div className={styles.clearAll}>
            <span>Clear all</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1722f8ec1a28b73df07a68057c64cf9845a8a8d44d3c97e591bae6ba854d490?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
              alt="Clear"
              className={styles.clearIcon}
            />
          </div>
        </header>
        <div className={styles.divider} />

        <label htmlFor="pairSelection" className={styles.selectPairLabel}>
          Select Pair
        </label>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/63b7d2d40a7ae8b68dddaa605f22d507263a0b6109d8ed9855dcdf8fffc24db2?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
          alt="Pair icon"
          className={styles.pairIcon}
        />
        <div className={styles.pairSelection}>
          <button type="button" className={styles.etfSwapButton}>
            ETFSwap
          </button>
          <div className={styles.selectedPair}>
            <div className={styles.pairInfo}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4976d99fcd96f00fbd618041e9d4ba6e7a3dff79dc76917718189267cc75c54c?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
                alt="1inch logo"
                className={styles.pairLogo}
              />
              <span className={styles.pairName}>1inch</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/290e59bce89d65772dfdeed4ac677e78ae7f44ead65d0cd0ba39baf4daa00dd8?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
              alt="Dropdown"
              className={styles.dropdownIcon}
            />
          </div>
        </div>

        <div className={styles.feeTierSection}>
          <div className={styles.feeTierInfo}>
            <h2 className={styles.feeTierLabel}>Fee tier</h2>
            <p className={styles.feeTierDescription}>
              The % you will earn in fees.
            </p>
          </div>
          <button type="button" className={styles.hideButton}>
            Hide
          </button>
        </div>

        <div className={styles.feeTierOptions}>
          <div className={styles.feeTierGrid}>
            {feeTiers.map((tier, index) => (
              <FeeTierCard key={index} {...tier} />
            ))}
          </div>
        </div>

        <div className={styles.priceRangeSection}>
          <h2 className={styles.priceRangeLabel}>Set Price Range</h2>
          <div className={styles.tokenSelector}>
            <span className={styles.tokenName}>1INCH</span>
            <span className={styles.selectedToken}>ETH</span>
          </div>
        </div>

        <PriceInput label="Low price" />
        <PriceInput label="High price" />
      </form>
    </div>
  );
};

export default AddLiquidity;
