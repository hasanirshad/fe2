import React,{ useState } from "react";
import styles from './BuyComponent.module.css';
const BuyComponent = () => {
    const [selectedAmount, setSelectedAmount] = useState('$100');

    const handleButtonClick = (amount) => {
      setSelectedAmount(amount); 
    };
  
    return (
        <>
        <section className={styles.sectionfirst} >
            <div className={styles.flexwithdropdown}>
                <p className={styles.textp1}>   You’re Buying </p>
                <p className={styles.textp2}> dropdown</p>
            </div>
            <div className={styles.divinput}>
                <input type="text"  className={styles.inputclass} placeholder={selectedAmount} />
            </div>
            <div className={styles.textandicon}>
                <p> 0 ETH</p>
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
            <p  className={styles.sectionfourp} > Enter an amount</p>
            
            </section>
        </>
    );
};

export default BuyComponent;