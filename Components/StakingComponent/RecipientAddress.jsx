import React from "react";
import styles from './StakingComponent.module.css';

function RecipientAddress() {
  return (
    <div className={styles.recipientAddressWrapper}>
      <label htmlFor="recipientAddress" className={styles.recipientAddressLabel}>
        Recipient address (optional)
      </label>
      <div className={styles.recipientAddressInput}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/04f8ca175254543dfbc976325ebf48638f5cc5daa88b2f8b0d3403f13206069b?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" alt="" className={styles.addressIcon} />
      </div>
    </div>
  );
}

export default RecipientAddress;