import React from 'react';
import styles from './AddLiquidity.module.css';

const PriceInput = ({ label }) => {
  return (
    <div className={styles.priceInput}>
      <div className={styles.priceInputHeader}>
        <span>{label}</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b382c763abc387a58d65dbc7cbf9149a10a80a55838ff6a84262c491a5de7d1?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" alt="Price icon" className={styles.priceInputIcon} />
      </div>
      <div className={styles.priceInputValue}>0</div>
      <div className={styles.priceInputFooter}>
        <span>Per</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c66642ed83d3957aa6f933e43d0692b6092c166606adbed445956ebaafbddf85?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" alt="Token icon" className={styles.priceInputIcon} />
      </div>
    </div>
  );
};

export default PriceInput;