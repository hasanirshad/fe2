import React,{useState} from 'react';
import styles from './SendComponent.module.css';
import Image from 'next/image'
import { FaLongArrowAltUp } from 'react-icons/fa';

const SendComponent = () => {
    const [amount, setAmount] = useState('$0');
    const [error, setError] = useState('');
    const [Show, setShow] = useState('');
    const handleInputChange = (e) => {
        const value = e.target.value;
        setAmount(value);
    
        if (value < 100) {
          setError('Increase your amount to $100 or more');
        } else {
          setError(''); 
        }

        if(value > 99){
          setShow( 'Sucessfully your Amount Added ')
        }else{
            setShow('');

        }
      };
    return (
        <>
            <section className={styles.buysection} >
                <div >
                    <p className={styles.sendingp} >You’re sending</p>
                </div>
                <div className={styles.divinput}>
                    <input  type="text"  value={amount} onChange={handleInputChange} className={styles.inputclass} placeholder='$0' />
                </div>
                <div className={styles.textandicon}>
                    <p> 0 ETH</p>
                </div>
            </section>
            <section className={styles.sectiontwo}>
              <div className={styles.fleximagetext }>
                <p className={styles.flexp1}> ETH  </p>
                <p className={styles.flexp2}> Balance: ${amount}</p>
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