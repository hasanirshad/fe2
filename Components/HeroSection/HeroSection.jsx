import React, { useState } from "react";
import Image from "next/image";
import ether from "../../public/Assets/Assets-Daulat/ether.png";
import BTC from "../../public/Assets/Bitcoin.png";
import SearchToken from "../SearchToken/SearchToken";
import Token from "../Token/Token";
import Style from "./HeroSection.module.css";
import Model from "../Model/Model";

const HeroSection = ({
  token,
  tokensTwo,
  accounts,
  tokenData,
  openSetting,
}) => {
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const [tokenOne, setTokenOne] = useState({
    name: "ETH",
    image: ether,
  });

  const [tokenTwo, setTokenTwo] = useState({
    name: "BTC",
    image: BTC,
  });

  // Determine whether to hide the HeroSection
  const isSearchTokenOpen = openToken || openTokensTwo;

  return (
    <>
      { 
        <div className={Style.HeroSection}>
          {/* Main container for the Hero Section */}
          <div className={Style.HeroSection_Box}>
            {/* Heading section with title */}
            <div className={Style.HeroSection_Box_Heading}>
              <p>Sell</p>
            </div>
            {/* Input section for the first token */}
            <div className={Style.HeroSection_Box_Input}>
              <div className={Style.HeroSection_Box_Input_1}>
                <input type="text" placeholder="0" />
              </div>
              <button onClick={() => setOpenToken(true)}>
                <Image
                  src={tokenOne.image}
                  width={20}
                  height={20}
                  alt={tokenOne.name}
                />
                {tokenOne.name}
                <small>9474</small>
              </button>
              <div className={Style.HeroSection_Box_Input_Subtitle}>
                <p>Balance: 32</p>
              </div>
            </div>
            {/* Input section for the second token */}
            <div className={Style.HeroSection_Box_2}>
              <div className={Style.HeroSection_Box_Heading_2}>
                <p>Buy</p>
              </div>
              <div className={Style.HeroSection_Box_Input}>
                <div className={Style.HeroSection_Box_Input_2}>
                  <input type="text" placeholder="0" />
                </div>
                <button onClick={() => setOpenTokensTwo(true)}>
                  <Image
                    src={tokenTwo.image}
                    width={20}
                    height={20}
                    alt={tokenTwo.name}
                  />
                  {tokenTwo.name}
                  <small>5465</small>
                </button>
                <div className={Style.HeroSection_Box_Input_Subtitle_1}>
                  <p>Balance: 0</p>
                </div>
              </div>
            </div>
            {/* Button section to connect wallet or swap tokens */}
            {accounts ? (
              <button className={Style.HeroSection_Box_btn} onClick={() => {}}>
                Swap
              </button>
            ) : (
              <button
                className={Style.HeroSection_Box_btn}
                onClick={() => setOpenModel(true)}
              >
                Enter an Amount
              </button>
            )}
          </div>
        </div>
      }

      {/* Conditional rendering for settings modal */}
      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {/* Conditional rendering for first token search modal */}
      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={(selectedToken) => setTokenOne(selectedToken)}
          tokenData={tokenData}
        />
      )}

      {/* Conditional rendering for second token search modal */}
      {openTokensTwo && (
        <SearchToken
          openToken={setOpenTokensTwo}
          tokens={(selectedToken) => setTokenTwo(selectedToken)}
          tokenData={tokenData}
        />
      )}

      {/* Conditional rendering for connect wallet modal */}
      {openModel && (
        <Model setOpenModel={setOpenModel} connectWallet="Connect" />
      )}
    </>
  );
};

export default HeroSection;
