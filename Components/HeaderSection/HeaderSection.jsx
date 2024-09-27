import React from "react";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./HeaderSection.module.css";
import ActiveButtonBall from "../../public/Assets/ActiveButtonBall.png"; // Retain the existing active ball image import
import Image from "next/image";

const HeaderSection = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleMenuItemClick = (name) => {
    // Retain the existing function to handle menu item clicks
    setActiveItem(name);
    if (name === "Swap") {
      setShowHero((prev) => !prev);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.navContainer}>
          <a href="#" className={styles.logo}>
            <img
              width={30}
              height={30}
              className={styles.brightness}
              src="svgs/logo.svg"
              alt="Logo"
            />
          </a>
          <div className={`${styles.navLinks} ${styles.hiddenOnMobile}`}>
            {/* <a href="#" className={styles.link}>
              Home
            </a> */}
            <div
              className={`${styles.navLinks} ${styles.NavBar_Box_left_Menu_Items}`}
            >
              {/* Map over the menu items to render them */}
              {[
                "Home",
                "Why ETFs",
                "Tokenomics",
                "Features",
                "Faq",
                "Whitepaper",
                "Blog",
              ].map((el) => (
                <div
                  key={el} // Use the name as the key for each menu item
                  className={`${styles.link} ${
                    styles.NavBar_Box_left_Menu_Item
                  } ${activeItem === el ? styles.active : ""}`} // Add active class if the item is active
                  onClick={() => handleMenuItemClick(el)} // Handle click event for menu item
                >
                  {el} {/* Display the name of the menu item */}
                  {/* Show the active button indicator (blue ball) if the item is active */}
                  {activeItem === el && (
                    <div
                      className={styles.NavBar_Box_left_Menu_Item_ActiveBall}
                    >
                      <Image
                        src={ActiveButtonBall}
                        alt="ActiveBall"
                        width={19}
                        height={11}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* <div className={styles.dropdown}>
              <button className={styles.dropdownButton}>
                <span>Trade</span>
                <svg
                  className={styles.dropdownIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  Spot
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Margin
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Futures
                </a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <button className={styles.dropdownButton}>
                <span>Explore</span>
                <svg
                  className={styles.dropdownIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  NFTs
                </a>
                <a href="#" className={styles.dropdownItem}>
                  DeFi
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Earn
                </a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <button className={styles.dropdownButton}>
                <span>Pool</span>
                <svg
                  className={styles.dropdownIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  Liquidity
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Staking
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Farming
                </a>
              </div>
            </div> 

            <a href="#" className={styles.link}>
              Stake
            </a>*/}
            <a href="#" className={`${styles.link} ${styles.borderLeft}`}>
              Connect Wallet
            </a>
            <img src="/assets/svgs/right-Arrow.svg" alt="" />

            <a href="#" className={styles.loginButton}>
              Login
            </a>
            <a href="#" className={styles.signupButton}>
              Signup
            </a>
          </div>
          <MobileMenu />
        </div>

        <div className={styles.divider}>
          <div className={styles.gradientLine}></div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
