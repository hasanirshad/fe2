import React, { useState } from "react";
import styles from './BuyComponent.module.css';
import { SlArrowDown } from "react-icons/sl";
import Image from 'next/image'
import { TbArrowsUpDown } from "react-icons/tb";
import usaflag from '../../public/Assets/usa.png';
import TokenSelector from '../TokenSelector/TokenSelector';

const BuyComponent = () => {
  const [selectedAmount, setSelectedAmount] = useState('$0');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [Show, setShow] = useState('Enter your Amount');
  const [country, setCountry] = useState({ 
    symbol: 'US',
  name: 'US' ,
  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
});

  const countries = [
    { 
      symbol: 'US',
    name: 'US' ,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960"
  },
  ];


  const handleInputChange = (e) => {
    const value = e.target.value;
    setError('');
    setShow('');

    const numericValue = Number(value);

    if (value === '') {

      setShow('Enter your Amount');
    } else if (numericValue < 0) {

      setError('Your amount should be greater than 0');
    } else if (numericValue === 0) {

      setShow("Enter your Amount");
    } else if (numericValue < 100) {

      setError('Amount should be at least 100');
    } else {

      setShow('');
      setError('');
    }

    setAmount(value);
  };
  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };


  return (
    <>
      <section className={styles.sectionfirst} >
        <div className={styles.flexwithdropdown}>
          <p className={styles.textp1}>   You’re Buying </p>
          <div className={styles.dropdownContainer}>
          <TokenSelector
          tokenData={countries}
          setselectedItemCallBack={setCountry}
            selectedBoxHeight="30px" 
            selectedIconHeight="20px"
            hideIcon={false} 
            hideSymbol={true}
            hideName={true}
            hideSearch={true}
            disabled={false}
            hideETH={true}
          />
          </div>
        </div>
        <div className={styles.divinput}>
          <input type="Number" value={amount} onChange={handleInputChange} className={styles.inputclass} placeholder={selectedAmount} />
        </div>
        <div className={styles.textandicon}>
          <p className={styles.ethtext} > 0 ETH</p>
          <TbArrowsUpDown className={styles.tbarrow} />
          <SlArrowDown  className={styles.arrowdown} />
        </div>
        <div className={styles.mainbuttoncls}>
          {/* Buttons to select amount */}
          <button
            type="button"
            className={styles.buttons}
            onClick={() => handleButtonClick('$100')}
          >
            $100
          </button>
          <button
            type="button"
            className={styles.buttons}
            onClick={() => handleButtonClick('$200')}
          >
            $200
          </button>
          <button
            type="button"
            className={styles.buttons}
            onClick={() => handleButtonClick('$300')}
          >
            $300
          </button>
        </div>
      </section>
      <section className={styles.sectionfour} >
        {error && <p className={styles.sectionfourp} >{error}</p>}
        {Show && <p className={styles.sectionfourp} >{Show}</p>}

      </section>
    </>
  );
};

export default BuyComponent;