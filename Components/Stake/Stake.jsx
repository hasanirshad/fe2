import React, { useState } from 'react';
import styles from './Stake.module.css';

const Stake = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className={styles.stakeContainer}>
      {/* 1st Row */}
      <div className={styles.row}>
        <div className={styles.leftAlign}>
          <p>Left Aligned Item</p>
        </div>
        <div className={styles.rightAlign}>
          <p>Right Aligned Item</p>
        </div>
      </div>

      {/* 2nd Row */}
      <div className={styles.row}>
        <p className={styles.fullWidth}>Title</p>
        <input
          className={styles.inputText} // Apply local class here
          type="text"
          value={inputValue}
          placeholder="Enter Amount"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {/* 3rd Row */}
      <div className={styles.row}>
        <p className={styles.fullWidth}>Title</p>
        <div className={styles.fullWidth}>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={() => setSelectedOption('option1')}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={() => setSelectedOption('option2')}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={() => setSelectedOption('option3')}
            />
            Option 3
          </label>
        </div>
      </div>

      {/* 4th Row */}
      <div className={styles.row}>
        <div className={styles.leftAlign}>
          <p>Left Aligned Item</p>
        </div>
        <div className={styles.rightAlign}>
          <p>Right Aligned Item</p>
        </div>
      </div>
    </div>
  );
};

export default Stake;
