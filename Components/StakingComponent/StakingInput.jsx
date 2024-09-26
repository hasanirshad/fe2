import React from "react";
import styles from './StakingComponent.module.css';

function StakingInput() {
  return (
    <div className={styles.stakingInputWrapper}>
      <span className={styles.balance}>Bal 0.00</span>
      <input type="text" className={styles.stakingAmount} value="0" aria-label="Staking amount" />
    </div>
  );
}

export default StakingInput;