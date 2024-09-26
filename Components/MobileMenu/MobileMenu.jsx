import React, { useState } from 'react';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        onClick={toggleMenu} 
        className={`${styles.menuButton} z-50 p-2 text-white`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        id="mobile-menu"
        className={`${isOpen ? styles.menuOpen : styles.menuClosed} ${styles.menuContainer}`}
      >
        <a href="#" className={styles.menuLink}>Home</a>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            <span>Trade</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={styles.dropdownMenu}>
            <a href="#" className={styles.dropdownItem}>Spot</a>
            <a href="#" className={styles.dropdownItem}>Margin</a>
            <a href="#" className={styles.dropdownItem}>Futures</a>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            <span>Explore</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={styles.dropdownMenu}>
            <a href="#" className={styles.dropdownItem}>NFTs</a>
            <a href="#" className={styles.dropdownItem}>DeFi</a>
            <a href="#" className={styles.dropdownItem}>Earn</a>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            <span>Pool</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={styles.dropdownMenu}>
            <a href="#" className={styles.dropdownItem}>Liquidity</a>
            <a href="#" className={styles.dropdownItem}>Staking</a>
            <a href="#" className={styles.dropdownItem}>Farming</a>
          </div>
        </div>
        <a href="#" className={styles.menuLink}>Stake</a>
        <a href="#" className={styles.menuLinkWithIcon}>
          Connect Wallet{" "}
          <img width={12} className="ml-2" src="/assets/svgs/right-Arrow.svg" alt="" />
        </a>
        <a href="#" className={`${styles.menuLink} ${styles.loginLink}`}>Login</a>
        <a href="#" className={`${styles.menuLink} ${styles.signupButton}`}>Signup</a>
      </div>
    </>
  );
};

export default MobileMenu;
