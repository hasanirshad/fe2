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
      {/* 1st Row */}
      <div className={styles.row}>
        <div className={styles.leftAlign}>
          <h2 className={styles.title}>Stake USDT to get Rewards in ETFs</h2>
        </div>
        <div className={styles.rightAlign}>
          <div className={styles.tokenPairContainer}>
            <div className={styles.tokenPair}>
              <label htmlFor="stakeToken">
                Stake USDT &nbsp;
                <Image src={USDTImage} height={24} />
              </label>
            </div>
            <div className={styles.tokenPair}>
              <label htmlFor="rewardToken">
                Rewards in ETFs &nbsp;
                <Image src={ETFSwapImage} height={24} />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row */}
      <div className={styles.row}>
      <div className={styles.inputandlabel}>
        <label htmlFor="amount" className={styles.amountLabel}>
          Amount to Stake (USDT)
        </label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className={styles.input}
        />
        </div>
      </div>

      {/* 3rd Row */}
      <div className={styles.row}>
      <div className={styles.labelandradios}>
      <label htmlFor="duration" className={styles.fullWidth}>
          Staking Duration (in days)
        </label>
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
      </div>

      {/* 4th Row */}
      <div className={styles.row}>
        <div className={styles.leftAlign}>
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
        <div className={styles.rightAlign}>
          <button className={styles.stakeButton} onClick={handleStake}>
            Stake Tokens
          </button>
        </div>
      </div>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Staking;
