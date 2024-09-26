import React from 'react';
import Image from 'next/image';

//external imports
import Style from './TokenList.module.css'; // Ensure this path is correct
import Close from '../../Assets/Assets-Daulat/Close.png'; 
import Uniswap from '../../Assets/uniswap.png';
import MetaMask2 from '../../Assets/metamask 2.png';
import Settings from '../../Assets/Assets-Daulat/cross.png';
import Off from '../../Assets/off.png';
import WalletIcon from '../../Assets/WalletIcon.png';
import ArrowDown from '../../Assets/arrow-right.png';

const TokenList = ({ tokenDate, setOpenTokenBox }) => {
  // Sample data for demonstration purposes
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={Style.TokenList}>
      {/* Close button to hide the token list */}
      <div className={Style.TokenList_Title_img}>
      <Image src={Uniswap} alt="uniswap" width={35} height={40} />
      </div>
      <div className={Style.TokenList_Title_img2}>
      <Image src={MetaMask2} alt="metamask" width={20} height={20} />
      </div>
      <div className={Style.TokenList_Title_img3}>
      <Image src={Settings} alt="Settings" width={30} height={30}/>
      <p className={Style.TokenList_close} onClick={() => setOpenTokenBox(false)}>
        <Image src={Off} alt="Close" width={30} height={30} />
      </p>
      </div>
      {/* Title section */}
      <div className={Style.TokenList_Title_box}>
        <div className={Style.TokenList_Title_h2}>
        <h2>0XCA....S453</h2>
        </div>
      {/* Mapping through sample data to display token information */}
      <div className={Style.TokenList_Box_Buy_Heading}>
        <h4>$0.00</h4>
      </div>

      {/* All the below code is for no reason beacuse when i should click the address the metamask extension should be opened so yes you can say that i wasted alot of time on it */}
      <div className={Style.TokenList_Box_Buy}>
        <Image src={WalletIcon} alt='Wallet' width={24.87} height={18}/>
      <div className={Style.TokenList_Box_Buy_Subtitle}>
        <p>Buy</p>
      </div>
      </div>
      <div className={Style.TokenList_Box_Recieve}>
      <Image src={ArrowDown} alt='Recieve' width={24.87} height={18}/>
      <div className={Style.TokenList_Box_Recieve_Heading}>
        <h4>Recieve</h4>
      </div>
      </div>
      <div className={Style.TokenList_Title_2}>
        <h4>Welcome to Your Wallet !</h4>
      <div className={Style.TokenList_Subtitle}>
        <p>Looks like you have a new wallet. Let’s get it funded before
        you make your first swap. </p>
      </div>
      </div>
      <div className={Style.TokenList_Box_Buy_ByCreditCard}>
        <Image src={WalletIcon} alt='Wallet' width={24.87} height={18}/>
        <div className={Style.TokenList_Box_Buy_ByCreditCard_Subtitle}>
          <p>Purchase crypto with a debit card or a bank account</p>
        </div>
      </div>
      <div className={Style.TokenList_Box_Recieve_Crypto}>
        <Image src={ArrowDown} alt='Arrow' width={24} height={24} />
        <div className={Style.TokenList_Box_Recieve_Crypto_Subtitle}>
          <p>Fund your wallet by transferring crypto from another wallet 
          or account</p>
        </div>
      </div>
         </div>
        </div>
      
  
    );
};

export default TokenList;
