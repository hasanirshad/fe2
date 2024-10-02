import React, { useEffect, useState } from "react";
import Image from "next/image";
import Style from './Model.module.css';
import Close from "../../public/Assets/Assets-Daulat/Close.png";
import MetaMask from "../../public/Assets/metamask 2.png";
import Coinbase from "../../public/Assets/Coinbase.png";
import WalletConnect from "../../public/Assets/WalletConnect.png";
import Wallet from "../../public/Assets/Wallet.png";
import ETFSwapLogo from "../../public/Assets/uniswap.png";
import ActiveBallRight from "../../public/Assets/ActiveBallRight.png";
import Rectangle1 from "../../public/Assets/Rectangle1.png";
import Rectangle2 from "../../public/Assets/Rectangle2.png";
import Line2 from "../../public/Assets/Line2.png";
import HorizontalLine from "../../public/Assets/LineBlue.png";
import ArrowRight from "../../public/Assets/arrow-right.png";
import ArrowUpDown from "../../public/Assets/ArrowUpDown.png";
// import { ethers } from "ethers";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import { Web3Provider } from "@ethersproject/providers";

const Model = ({ isOpenModel }) => {
  const [provider, setProvider] = useState(null);
  const [openModal, setOpenModal] = useState(isOpenModel);
  const [wallets, setWallets] = useState([]);

  let metaMask, coinbase, trust;
// const walletMenu = [
  //   { name: "MetaMask", image: MetaMask, connect: connectMetaMask },
  //   { name: "Coinbase", image: Coinbase, connect: openCoinbaseSignUpPage },
  //   { name: "Trust", image: Wallet, connect: openTrustWalletExtension },
  //   { name: "WalletConnect", image: WalletConnect, connect: openWalletConnectWebsite },
  // ];
  useEffect(() => {
    const detected = [];

    // Find MetaMask explicitly, avoid conflicts
    if (window.ethereum && window.ethereum.providers) {
      metaMask = window.ethereum.providers.find(
        (p) => p.isMetaMask && !p.isTrust
      );
      coinbase = window.ethereum.providers.find((p) => p.isCoinbaseWallet);
      trust = window.ethereum.providers.find((p) => p.isTrust);

      if (metaMask)
        detected.push({ name: "MetaMask", image: MetaMask, connect: connectMetaMask });
      if (coinbase)
        detected.push({ name: "Coinbase", image: Coinbase, connect: connectCoinbase });
      if (trust) detected.push({ name: "Trust Wallet", image: Wallet, connect: connectTrust });
    } else {
      // Single provider case
      if (window.ethereum && window.ethereum.isMetaMask) {
        metaMask = window.ethereum;
        detected.push({ name: "MetaMask", image: MetaMask, connect: connectMetaMask });
      }
      if (window.ethereum && window.ethereum.isCoinbaseWallet) {
        coinbase = window.ethereum;
        detected.push({ name: "Coinbase", image: Coinbase, connect: connectCoinbase });
      }
      if (window.ethereum && window.ethereum.isTrust) {
        trust = window.ethereum;
        detected.push({ name: "Trust Wallet", image: Wallet, connect: connectTrust });
      }
    }

    setWallets(detected);
  }, []);

  const connectMetaMask = async () => {
    try {
      if (metaMask) {
        await metaMask.request({ method: "eth_requestAccounts" });
        alert("MetaMask connected");
      } else {
        alert("MetaMask not found");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Coinbase connection
  const connectCoinbase = async () => {
    try {
      if (coinbase) {
        await coinbase.request({ method: "eth_requestAccounts" });
        alert("Coinbase Wallet connected");
      } else {
        alert("Coinbase Wallet not found");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Trust Wallet connection
  const connectTrust = async () => {
    try {
      if (trust) {
        await trust.request({ method: "eth_requestAccounts" });
        alert("Trust Wallet connected");
      } else {
        alert("Trust Wallet not found");
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  // // Function to connect MetaMask
  // const connectMetaMask = async () => {
  //   const { ethereum } = window;
  //   if (ethereum && ethereum.isMetaMask) {
  //     try {
  //       await ethereum.request({ method: 'eth_requestAccounts' });
  //       const signer = new ethers.providers.Web3Provider(ethereum).getSigner();
  //       console.log("Connected with MetaMask:", await signer.getAddress());
  //     } catch (error) {
  //       console.error("MetaMask connection error:", error);
  //     }
  //   } else {
  //     alert("MetaMask is not installed. Please install it to continue.");
  //   }
  // };

  // // Function to open Coinbase sign-up page
  // const openCoinbaseSignUpPage = () => {
  //   window.open('https://www.coinbase.com/signup', '_blank');
  // };

  // // Function to open Trust Wallet website
  // const openTrustWalletExtension = () => {
  //   const trustWalletUrl = 'https://trustwallet.com/';
  //   window.open(trustWalletUrl, '_blank');
  // };

  // // Function to open WalletConnect website
  // const openWalletConnectWebsite = () => {
  //   window.open('https://walletconnect.com/', '_blank');
  // };


  // Close modal handler
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Render nothing if openModal is false
  if (!openModal) {
    return <div></div>;
  }

  return (
    <div className={Style.Model}>
      <div className={Style.Model_Box}>
        <div className={Style.Model_Box_Active}>
          <Image src={ActiveBallRight} alt="Active" width={16} height={30} />
        </div>
        <div className={Style.Model_Box_Rectangle1}>
          <div className={Style.Model_Box_Rectangle1_Inner_Separator}>
            <Image src={Line2} alt="RectangleSeparator" width={1} height={1} />
          </div>
          <Image src={Rectangle1} alt="Rectangle" width={100} height={1} />
          <div className={Style.Model_Box_Rectangle1_Inner}>
            <Image src={Rectangle2} alt="Rectangle2" width={700} height={50} />
            <div className={Style.Model_Box_Rectangle1_Inner_RightArrow}>
              <Image src={ArrowRight} alt="Right" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={Style.Model_Box_Heading}>
          <p>Connect a Wallet</p>
          <div className={Style.Model_Box_Heading_Img}>
            <Image
              src={Close}
              alt="close"
              width={40}
              height={40}
              onClick={handleCloseModal} // Use the handler to close the modal
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <p className={Style.Model_Box_Para1}>
          Select your wallet from the options to get started.
        </p>
        <div className={Style.Model_Box_Para1_Img1}>
          <Image src={HorizontalLine} alt="line" width={270} height={1} />
        </div>
        <div className={Style.Model_Box_Para1_Img2}>
          <Image src={HorizontalLine} alt="line2" width={270} height={1} />
        </div>
        <div className={Style.Model_Box_Para1_Img3}>
          <Image src={ArrowUpDown} alt="UpDown" width={15} height={25} />
        </div>
        <p className={Style.Model_Box_Para2}>
          Available (4)
        </p>
        <div className={Style.Model_Box_Wallet}>
          {wallets.map((el, i) => (
            <div
              key={i}
              className={Style.Model_Box_Wallet_Item}
              onClick={el.connect}
            >
              <Image src={el.image} alt={el.name} width={30} height={30} />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
        <div className={Style.Model_Box_Logo}>
          <Image src={ETFSwapLogo} alt="ETFSwap Logo" width={240} height={240} />
        </div>
      </div>
    </div>
  );
};

export default Model;
