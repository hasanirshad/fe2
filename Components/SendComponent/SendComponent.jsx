import React,{useState} from 'react';
import styles from './SendComponent.module.css';
import Image from 'next/image'
import { TbArrowsUpDown } from "react-icons/tb";
import starimg from '../../public/Assets/etherlogo.png';

const SendComponent = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [Show, setShow] = useState('Enter your Amount');
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
    return (
        <>
            <section className={styles.buysection} >
                <div >
                    <p className={styles.sendingp} >You’re sending</p>
                </div>
                <div className={styles.divinput}>
                    <input  type="Number"  value={amount} onChange={handleInputChange} className={styles.inputclass} placeholder='$0' />
                </div>
                <div className={styles.textandicon}>
                <p className={styles.ethtext} > 0 ETH</p>
                    <TbArrowsUpDown className={styles.tbarrow} />
                </div>
            </section>
            <section className={styles.sectiontwo}>
              <div className={styles.fleximagetext }>
                <div className={styles.mainimgclass} >
                <Image src={ starimg } className={styles.img} alt='' />
                </div>
                <div className={styles.maintextscls} >
                <p className={styles.flexp1}> ETH  </p>
                <p className={styles.flexp2}> Balance: ${amount}</p>
                </div>
              </div>
            </section>
            <section className={styles.sectionthree} >
             <label className={styles.labelclass} >
                To
             </label><br/>
             <input className={styles.secondinputclass}  placeholder='Wallet address or ENS name' />
            </section>
            <section className={styles.sectionfour} >
            {error && <p  className={styles.sectionfourp} >{error}</p>}
            {Show && <p  className={styles.sectionfourp} >{Show}</p>}
            </section>
        </>
    )

};
export default SendComponent;