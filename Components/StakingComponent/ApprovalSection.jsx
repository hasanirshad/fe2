import React from "react";
import styles from './StakingComponent.module.css';

function ApprovalSection() {
  return (
    <section className={styles.approvalSection}>
      <div className={styles.infiniteApproval}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/47fbd21e6fd08ae9c8dea2d7b5c95c52ab178f4dc43650753975d244e1c26be3?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" alt="" className={styles.approvalIcon} />
        <span>Infinite Approval</span>
      </div>
      <button className={styles.approveButton}>Approve</button>
    </section>
  );
}

export default ApprovalSection;