import React, { useState } from "react";
import styles from "../SwapComponent/SwapComponent.module.css";
import Image from "next/image";


const SwapTokenInfo = ({logo, balance }) => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const originalTokens = [
    { name: 'Ox Protocol', symbol: 'ZRX', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
    { name: '1inch', symbol: '1INCH', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0679934e2f2bb54d66551ba323ea53b5e2d578f9099347a41ba7d10342c477ab?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
    { name: 'Aave', symbol: 'AAVE', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c065506ae2ae8f8fa678e29e56ac185aa6d4120c914c0f2e346abd1f47fdd?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
    { name: 'Across Protocol', symbol: 'ACX', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3be2771f01a18591fb5f8f5a5b9f926c61e61c04b61836158d241b8ee9581070?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
    { name: 'AdEx', symbol: 'ADX', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0e409a5c87c9719f8a2e78fbcbc92819bb4b5db5d741456f6d0e63c3f754f15?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
    { name: 'AIOZ Network', symbol: 'AIOZ', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a42c2d69199f0a18625e7ffa45215fc0f59daf7261996227b6a3cc890e282f26?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
  ];


  const options = originalTokens.map((token, index) => ({
    value: `option${index + 1}`,
    label: token.name,
    img: token.icon,
    desc: token.symbol
  }));
  
  const old_array = [
    { value: 'option1', label: 'USDC', img: '../Assets/SwapToken/usdc.png', desc: 'ETH' },
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
