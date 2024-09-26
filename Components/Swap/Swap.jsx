import React from 'react';
import styles from '../Swap/Swap.module.css';
import TokenInfo from './SwapTokenInfo';

const navItems = ['Swap', 'Stake', 'Buy', 'Sell'];

const Swap = () => {
  return (
    <main className={styles.swapContainer}>
      {/*<nav className={styles.navBar}>
        {navItems.map((item, index) => (
          <div key={index} className={index === 0 ? styles.activeNavItem : ''}>
            {item}
          </div>
        ))}
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab0a3e8d87101cebdd14a55c0a3919bacfbdedcb6fe386ac6710c307cd463de0?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" 
          alt="Settings" 
          className={styles.settingsIcon} 
        />
        </nav>
      
      <hr className={styles.divider} />*/}
      
      <section className={styles.swapSection}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e18b20cae4d410bb8cbceecd2e47c4ade8aed704378de4ba8605025f83ba189?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" 
          alt="" 
          className={styles.backgroundImage} 
        />
        
        <div className={styles.swapItem}>
          <div className={styles.swapLabel}>Sell</div>
          <div className={styles.swapAmount}>0</div>
        </div>
        
        <div className={styles.swapDetails}>
          <img
          className={styles.tokeninfoimg}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d6a8e649cee81c004c2ac877e69ca79bd49aa26b55bd9d764d32516bad400fe?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" 
            balance="Balance: 0" 
          />
          <p className={styles.balance}>Balance: 0</p>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8925fa82a42490e128a2a2103ef2921b8fe1c3ee392ba2bb731a3b3a659c5b25?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" 
            alt="Swap" 
            className={styles.swapIcon} 
          />
          
        </div>
        
        <div className={styles.swapItemBuy}>
          <div className={styles.swapLabel}>Buy</div>
          <div className={styles.swapAmount}>0</div>
        </div>
        
        <div className={styles.swapDetail}>
          <TokenInfo 
            logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/18f73ec708b8739bf17d3203f367a963bdeed6428aa10c53ff72696ae613aa0e?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" 
            balance="Balance: 0" 
          />
        </div>
      </section>
      
      <form>
        
        <input 
          type="text" 
          id="amountInput" 
          className={styles.amountInput} 
          placeholder="Enter an amount" 
        />
      </form>
    </main>
  );
};

export default Swap;