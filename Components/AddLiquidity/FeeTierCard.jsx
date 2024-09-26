import React from "react";
import styles from "./AddLiquidity.module.css";

const FeeTierCard = ({
  percentage,
  description,
  selectPercentage,
  selected,
}) => {
  const cardClass = selected ? styles.selectedFeeTierCard : styles.feeTierCard;

  return (
    <div className={cardClass}>
      {selected ? (
        <div className={styles.selectedFeeTierHeader}>
          <span>{percentage}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a710e26578bc6c4b4cba5618b03e5702c6be5b037a38236d0f8ea7e49b638c?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
            alt="Selected"
            className={styles.checkIcon}
          />
        </div>
      ) : (
        <div className={styles.feeTierPercentage}>{percentage}</div>
      )}
      <p className={styles.feeTierCardDescription}>{description}</p>
      <div className={styles.feeTierSelect}>{selectPercentage} Select</div>
    </div>
  );
};

export default FeeTierCard;
