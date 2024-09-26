import React from "react";
import styles from './StakingComponent.module.css';
import StakingHeader from './StakingHeader';
import StakingInput from './StakingInput';
import RecipientAddress from './RecipientAddress';
import InterestFreeCalculator from './InterestFreeCalculator';
import ApprovalSection from './ApprovalSection';

function StakingComponent() {
  return (
    <main className={styles.stakingContainer}>
      <section className={styles.stakingContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a539d22a7c1a0ff7163a5d2e83ca0ffdc62209779e84f0d242dda3c583dc6e9f?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" alt="" className={styles.backgroundImage} />
        <StakingHeader />
        <StakingInput />
        <RecipientAddress />
        <InterestFreeCalculator />
        <hr className={styles.divider} />
      </section>
      <ApprovalSection />
    </main>
  );
}

export default StakingComponent;