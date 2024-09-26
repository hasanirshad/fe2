import React from "react";
import styles from './StakingComponent.module.css';

function InterestFreeCalculator() {
  return (
    <section className={styles.calculatorSection}>
      <h2 className={styles.calculatorTitle}>Interest-free borrowing calculator</h2>
      <hr className={styles.calculatorDivider} />
      <div className={styles.calculatorInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8234f5f1db88328bfa1566426a817053a5ab071989e1cca73b642ab491094f9e?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" alt="" className={styles.infoIcon} />
        <p className={styles.calculatorDescription}>
          Staking INV can make borrowing interest-free if your DBR rewards are higher than your DBR burns, input an INV amount to get information on how much you could borrow for free.
        </p>
      </div>
    </section>
  );
}

export default InterestFreeCalculator;