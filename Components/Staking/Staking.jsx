import React, { useState } from "react";
import styles from "./Staking.module.css";
import { ethers } from "ethers";
import StakingABI from "../../public/artifacts/contracts/ETFStaking.sol/ETFStaking.json";
import Image from "next/image";
import USDTImage from "../../public/Assets/usdt.png";
import ETFSwapImage from "../../public/Assets/etfswap2.png";

const Staking = ({ provider }) => {
  const [stakeTokenAddress, setStakeTokenAddress] = useState("");
  const [rewardTokenAddress, setRewardTokenAddress] = useState("");
  const [stakingContractAddress, setStakingContractAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("30"); // Default duration to 30 days
  const [autoReinvest, setAutoReinvest] = useState(false);
  const [message, setMessage] = useState("");

  const handleStake = async () => {
    try {
      const signer = provider.getSigner();
      const stakingContract = new ethers.Contract(
        stakingContractAddress,
        StakingABI,
        signer
      );

      // Approve token transfer
      const stakeToken = new ethers.Contract(
        stakeTokenAddress,
        [
          "function approve(address spender, uint256 amount) public returns (bool)",
        ],
        signer
      );
      const approveTx = await stakeToken.approve(
        stakingContractAddress,
        ethers.utils.parseUnits(amount, 18)
      );
      await approveTx.wait();

      setMessage("Tokens approved for staking...");

      // Perform the staking action
      const stakeTx = await stakingContract.stake(
        ethers.utils.parseUnits(amount, 18),
        duration,
        autoReinvest
      );
      await stakeTx.wait();

      setMessage("Staking successful!");
    } catch (error) {
      setMessage(`Error during staking: ${error.message}`);
    }
  };

  return (
    <div className={styles.stakingContainer}>
      <h2 className={styles.title}>Stake USDT to get Rewards in ETFs</h2>
      <div>
        <div className={styles.left}>
          <label htmlFor="stakeToken">
            Stake USDT &nbsp;
            <Image src={USDTImage} height={24}></Image>
            {/*<Image  height={24}></Image>*/}
          </label>
          {/* <input
          type="text"
          id="stakeToken"
          value={stakeTokenAddress}
          onChange={(e) => setStakeTokenAddress(e.target.value)}
          placeholder="Enter Stake Token Address"
          className={styles.input}
        /> */}
        </div>

        <div className={styles.right}>
          <label htmlFor="rewardToken">
            Rewards in ETFs &nbsp;
            <Image src={ETFSwapImage} height={24}></Image>
          {/*<Image height={24}></Image>*/}
          </label>
          {/* <input
          type="text"
          id="rewardToken"
          value={rewardTokenAddress}
          onChange={(e) => setRewardTokenAddress(e.target.value)}
          placeholder="Enter Reward Token Address"
          className={styles.input}
        /> */}
        </div>
      </div>
      {/* <div className={styles.formGroup}>
        <label htmlFor="stakingContract">Staking Contract Address</label>
        <input
          type="text"
          id="stakingContract"
          value={stakingContractAddress}
          onChange={(e) => setStakingContractAddress(e.target.value)}
          placeholder="Enter Staking Contract Address"
          className={styles.input}
        />
      </div> */}

      <div className={styles.formGroupFirstField}>
        <label htmlFor="amount">Amount to Stake (USDT)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="duration">Staking Duration (in days)</label>
        <div>
          <label>
            <input
              type="radio"
              id="duration30"
              value="30"
              onChange={(e) => setDuration(e.target.value)}
              checked={duration === "30"}
              className={styles.radioInput}
            />
            30 Days
          </label>
          <label>
            <input
              type="radio"
              id="duration50"
              value="50"
              onChange={(e) => setDuration(e.target.value)}
              checked={duration === "50"}
              className={styles.radioInput}
            />
            50 Days
          </label>
          <label>
            <input
              type="radio"
              id="duration70"
              value="70"
              onChange={(e) => setDuration(e.target.value)}
              checked={duration === "70"}
              className={styles.radioInput}
            />
            70 Days
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="autoReinvest">
          Auto Reinvest
          <input
            type="checkbox"
            id="autoReinvest"
            checked={autoReinvest}
            onChange={(e) => setAutoReinvest(e.target.checked)}
            className={styles.checkbox}
          />
        </label>
      </div>

      <button className={styles.stakeButton} onClick={handleStake}>
        Stake Tokens
      </button>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Staking;
