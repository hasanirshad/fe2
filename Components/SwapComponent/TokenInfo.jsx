import React from "react";
import styles from "./SwapComponent.module.css";

const TokenInfo = ({ logoSrc, balance }) => {
  return (
    <div className={styles.tokenInfo}>
      <img src={logoSrc} alt="Token logo" className={styles.tokenLogo} />
      <div className={styles.balance}>{balance}</div>
    </div>
  );
};

export default TokenInfo;
