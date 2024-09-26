import React from "react";
import styles from './StakingComponent.module.css';

function StakingHeader() {
  return (
    <header className={styles.stakingHeader}>
      <h1>Staking</h1>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d17b98d585a811e4174f613069c1c711015c4976874b63ce8120187e3aaeefa?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" alt="Staking icon" className={styles.stakingIcon} />
    </header>
  );
}

export default StakingHeader;