import React, { useState } from 'react';
import { TokenSelector } from '../../index'; // Assuming the TokenSelector component is already created
import styles from './SwapInput.module.css';

const tokenData = [
  {
    name: 'Ox Protocol',
    symbol: 'ZRX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: '1inch',
    symbol: '1INCH',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0679934e2f2bb54d66551ba323ea53b5e2d578f9099347a41ba7d10342c477ab?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c065506ae2ae8f8fa678e29e56ac185aa6d4120c914c0f2e346abd1f47fdd?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Across Protocol',
    symbol: 'ACX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3be2771f01a18591fb5f8f5a5b9f926c61e61c04b61836158d241b8ee9581070?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AdEx',
    symbol: 'ADX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0e409a5c87c9719f8a2e78fbcbc92819bb4b5db5d741456f6d0e63c3f754f15?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AIOZ Network',
    symbol: 'AIOZ',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a42c2d69199f0a18625e7ffa45215fc0f59daf7261996227b6a3cc890e282f26?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
];
const SwapInput = ({title='sell', dropDownDisabled=false}) => {
  const [inputValue, setInputValue] = useState(0);
  const [balance, setBalance] = useState(100); // Initial balance of 100
  const [selectedToke, setSelectedToken] = useState({
    name: '',
    symbol: '',
    icon: '',
  });

  const handleInputChange = (event) => {
    const value = event.target.value ? parseFloat(event.target.value) : 0;
    setInputValue(value);
    setBalance(100 - value); // Subtract input value from initial balance
  };

  return (
    <div className={styles.container}>
      {/* Row 1 */}
      <div className={styles.row}>
        <span className={styles.sellText}>{title}</span>
      </div>

      {/* Row 2 */}
      <div className={styles.row}>
        <div className={styles.inputColumn}>
          <input
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className={styles.dropdownColumn}>
          <TokenSelector
          tokenData={tokenData}
          setselectedItemCallBack={setSelectedToken}
            selectedBoxHeight="40px" 
            selectedIconHeight="35px"
            hideIcon={false} 
            hideSymbol={false}
            hideName={true}
            hideSearch={true}
            disabled={dropDownDisabled}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className={styles.row} style={{justifyContent:'flex-end'}}>
        <span className={styles.balanceText}>Balance: {balance}</span>
      </div>
    </div>
  );
};

export default SwapInput;
