import React, { useState } from "react";
import styles from "../SwapComponent/SwapComponent.module.css";
import Image from "next/image";


const SwapTokenInfo = ({logo, balance }) => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { value: 'option1', label: 'USDC', img: '../../Assets/SwapToken/usdc.png', desc: 'ETH' },
    { value: 'option2', label: 'Ethereum', img: '/images/option2.png', desc: 'ZRX' },
    { value: 'option3', label: 'Ox Protocol', img: '/images/option3.png', desc: '1INCH' },
    { value: 'option4', label: '1inch', img: '/images/option3.png', desc: 'AAVE' },
    { value: 'option5', label: 'Aave', img: '/images/option3.png', desc: 'ACX' },
    { value: 'option6', label: 'AdEx', img: '/images/option3.png', desc: 'ADX' },
    { value: 'option7', label: 'AIOZ Network', img: '/images/option3.png', desc: 'AIOZ' },

  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.tokenInfo}>
      <img src={logo} />
        <div className={styles.maindropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownbutton}>
        {selectedOption.label|| 'Select a token'}
      </button>
      {isOpen && (
        <ul>
            <p className={styles.selectoption}>Select a Token</p>
            <input type="text" id="fname" name="search" placeholder="Search tokens" className={styles.searchinput}></input>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              <img src={option.img} alt={option.label} className={styles.image} />
              <span className={styles.spandesc}>{option.desc}</span>
            </li>
          ))}
          
        </ul>
      )}
    </div>
      <div className={styles.balance}>{balance}</div>
    </div>
    

    
  );
};

export default SwapTokenInfo;
