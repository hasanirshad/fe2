import React from "react";
import styles from "./TokenSelector.module.css";

function TokenItem({ name, icon }) {
  return (
    <div className={styles.tokenItem}>
      <img
        loading="lazy"
        src={icon}
        className={styles.icon}
        alt={`${name} logo`}
      />
      <div>{name}</div>
    </div>
  );
}

export default TokenItem;
