import React, { useState } from "react";
import styles from "../Swap/Swap.module.css";
import TokenInfo from "./SwapTokenInfo";
import {  TokenSelector, SwapInput } from "../../Components/index.js";
import Image from 'next/image';
import swapBackground from '../../public/Assets/swap_back.png'


const Swap = () => {
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [error, setError] = useState("There is an error");

  const handleBuyChange = (e) => {
    const value = e.target.value;

    // Clear previous error
    setError("");

    // Check if the input is a valid number
    if (!isNaN(value) && value.trim() !== "") {
      const sellValue = (Number(value) / 10).toFixed(2);
      setSell(sellValue);
      setBuy(value);
    } else {
      setError("Please enter a valid number");
      setBuy(value);
      setSell("");
    }
  };
  return (
    <main className={styles.swapContainer}>
      <section className={styles.swapSection}>
       {/*} <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e18b20cae4d410bb8cbceecd2e47c4ade8aed704378de4ba8605025f83ba189?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
          alt=""
          className={styles.backgroundImage}
  />*/}
  <Image
          src={swapBackground}
          alt=""
          className={styles.backgroundImage}
  />
        <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8925fa82a42490e128a2a2103ef2921b8fe1c3ee392ba2bb731a3b3a659c5b25?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
        alt="Swap"
        className={styles.swapIcon}
      />
        <SwapInput
        title='Sell'
        dropDownDisabled = {true}
        ></SwapInput>
        
        

        <SwapInput
        title='Buy'
        ></SwapInput>
      </section>

      <form>
        <input
          type="text"
          readOnly
          id="amountInput"
          styles={{ color: "red" }}
          className={styles.amountInput}
          // value={error !== "" ? error : "Enter amount"}
          value="Enter Amount"
        />
      </form>
    </main>
  );
};

export default Swap;
