import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import ArrowLeft from "../../public/Assets/ArrowLeft.png";
import Close from "../../public/Assets/setting.png";
import etherlogo from "../../public/Assets/etherlogo.png";
import trade1 from "../../public/Assets/trade1.png";
import wallet from "../../public/Assets/Wallet.png";
import Style from "./PoolAdd.module.css";
import { Token, SearchToken, TokenSelector } from "../../Components/index.js";

const tokenData = [
  {
    name: 'Ox Protocol',
    symbol: 'ZRX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: '1inch',
    symbol: '1INCH',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0679934e2f2bb54d66551ba323ea53b5e2d578f9099347a41ba7d10342c477ab?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c065506ae2ae8f8fa678e29e56ac185aa6d4120c914c0f2e346abd1f47fdd?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'Across Protocol',
    symbol: 'ACX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3be2771f01a18591fb5f8f5a5b9f926c61e61c04b61836158d241b8ee9581070?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AdEx',
    symbol: 'ADX',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0e409a5c87c9719f8a2e78fbcbc92819bb4b5db5d741456f6d0e63c3f754f15?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
  {
    name: 'AIOZ Network',
    symbol: 'AIOZ',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a42c2d69199f0a18625e7ffa45215fc0f59daf7261996227b6a3cc890e282f26?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960',
  },
];
const PoolAdd = ({ setClosePool, tokenData, createLiquidityAndPool }) => {
  const [openModel, setOpenModel] = useState(false);
  const [openTokenModelOne, setOpenTokenModelOne] = useState(false);
  const [openTokenModelTwo, setOpenTokenModelTwo] = useState(false);
  const [openTokenModelThree, setOpenTokenModelThree] = useState(false);
  const [active, setActive] = useState(1);
  const [openFee, setOpenFee] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedToke, setSelectedToken] = useState({
    name: '',
    symbol: '',
    icon: '',
  });

  //NEW STATE

  const [fee, setFee] = useState(0);
  const [slippage, setSlippage] = useState(25);
  const [deadline, setDeadline] = useState(10);
  const [tokenAmountOne, setTokenAmountOne] = useState(0);
  const [tokenAmountTwo, setTokenAmountTwo] = useState(0);

  //TOKEN 1
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
    symbol: "",
    tokenBalance: "",
    tokenAddress: "",
  });
  //TOKEN 2
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
    symbol: "",
    tokenBalance: "",
    tokenAddress: "",
  });

  const feePairs = [
    {
      fee: "0.05%",
      info: "Best for stable pairs",
      number: "0% Select",
      feeSystem: 500,
    },
    {
      fee: "0.3%",
      info: "Best for stable pairs",
      number: "0% Select",
      feeSystem: 3000,
    },
    {
      fee: "1%",
      info: "Best for stable pairs",
      number: "0% Select",
      feeSystem: 10000,
    },
  ];

  return (
    <div className={Style.PoolAdd}>
      <div className={Style.PoolAdd_box}>
        <div className={Style.PoolAdd_box_header}>
          <div className={Style.PoolAdd_box_header_left}>
            <Image
              src={ArrowLeft}
              alt="image"
              width={10}
              height={10}
              onClick={() => setClosePool(false)}
            />
          </div>
          <div className={Style.PoolAdd_box_header_middle}>
            <p>Add Liqudity</p>
          </div>
          <div className={Style.PoolAdd_box_header_right}>
            <p>
              {tokenOne.name || ""} {tokenOne.tokenBalance.slice(0, 9) || ""}
              {""}
              {""}
              {tokenTwo.name || ""} {tokenTwo.tokenBalance.slice(0, 9) || ""}
            </p>
            <Image
              src={Close}
              alt="image"
              width={50}
              height={50}
              onClick={() => setOpenModel(true)}
            />
          </div>
        </div>

        {/* //SELECT PRICE RANGE */}
        <div className={Style.PoolAdd_box_price}>
          {/* //LEFT */}
          <div className={Style.PoolAdd_box_price_left}>
            {/*<h4>Select Pair</h4>*/}
            <div className={Style.PoolAdd_box_price_left_token}>
            <h4>Select Pair</h4>
            <div
                className={Style.PoolAdd_box_price_left_token_info}
                onClick={() => setOpenTokenModelOne(false)}
              >
                <p>
                  <Image
                    src={etherlogo}
                    alt="image"
                    width={20}
                    height={20}
                  />
                </p>
                <p>{tokenOne.name || "ETH"}</p>
                <p>🡫</p>
              </div>
              <div
                className={Style.PoolAdd_box_price_left_token_info}
                onClick={() => setOpenTokenModelTwo(!openTokenModelTwo)}
              >
                <p>
                  <Image
                    src={etherlogo}
                    alt="image"
                    width={20}
                    height={20}
                  />
                </p>
                <p>{tokenTwo.name || "Select"}</p>
                <p>🡫</p>
              </div>
                
            </div>
            {/* //FEE */}
            <div className={Style.PoolAdd_box_price_left_fee}>
              <div className={Style.PoolAdd_box_price_left_fee_left}>
                <h4 Style="line-height: 2.5;">Fee teir</h4>
                <p>The % you will earn in fees</p>
              </div>
              {openFee ? (
                <button onClick={() => setOpenFee(false)}>Hide</button>
              ) : (
                <button onClick={() => setOpenFee(true)}>Show</button>
              )}
            </div>

            {/* //FEE LIST */}
            {openFee && (
              <div className={Style.PoolAdd_box_price_left_list}>
                {feePairs.map((el, i) => (
                  <div
                    className={Style.PoolAdd_box_price_left_list_item}
                    key={i + 1}
                    onClick={() => (setActive(i + 1), setFee(el.feeSystem))}
                  >
                    <div
                      className={Style.PoolAdd_box_price_left_list_item_info}
                    >
                      <p>{el.fee}</p>
                      <p>
                        {active == i + 1 ? (
                          <Image
                            src={trade1}
                            alt="image"
                            width={20}
                            height={20}
                          />
                        ) : (
                          ""
                        )}
                      </p>
                    </div>

                    <small>{el.info}</small>
                    <p className={Style.PoolAdd_box_price_left_list_item_para}>
                      {el.number}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {/* RIGHT */}
          {openFee && (<div className={Style.PoolAdd_box_price_right}>
            <h4>Set Price Range</h4>
            <div className={Style.PoolAdd_box_price_right_box}>
              <p className={Style.PoolAdd_box_price_right_box_para}>
                Current Price: 41.1494 {tokenOne.name || "ETH"} per{" "}
                {tokenTwo.name || "Select"}
              </p>
              <Image src={wallet} alt="wallet" height={80} width={80} />
              <h3>Your position will appear here.</h3>
            </div>

            {/* //PRICE RANGE */}

            <div className={Style.PoolAdd_box_price_right_range}>
              <div className={Style.PoolAdd_box_price_right_range_box}>
                <p>Min Price</p>
                <input
                  type="number"
                  placeholder="0.000"
                  min="0.00"
                  step="0.001"
                  className={Style.PoolAdd_box_price_right_range_box_para}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <p>
                  {tokenOne.name || "ETH"} per {tokenTwo.name || "Select"}
                </p>
              </div>
              {/* //MAX */}
              <div className={Style.PoolAdd_box_price_right_range_box}>
                <p>Max Price</p>
                <input
                  type="number"
                  placeholder="0.000"
                  min="0.00"
                  step="0.001"
                  className={Style.PoolAdd_box_price_right_range_box_para}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <p>
                  {" "}
                  {tokenOne.name || "ETH"} per {tokenTwo.name || "Select"}
                </p>
              </div>
            </div>

            {/* BUTTON */}
          </div>)}
            {/* //DEPOSIT AMOUNT */}
            <div className={Style.PoolAdd_box_deposit}>
              <h4>Deposit Amount</h4>

              <div className={Style.PoolAdd_box_deposit_box}>
                <input
                  type="number"
                  placeholder={tokenOne.tokenBalance.slice(0, 9)}
                  onChange={(e) => setTokenAmountOne(e.target.value)}
                />
                <div className={Style.PoolAdd_box_deposit_box_input}>
                  <p>
                    <small>{tokenOne.name || "ETH"}</small> {""}{" "}
                    {tokenOne.symbol || "Ether"}
                  </p>
                </div>
              </div>

              <div className={Style.PoolAdd_box_deposit_box}>
                <input
                  type="number"
                  placeholder={tokenTwo.tokenBalance.slice(0, 9)}
                  onChange={(e) => setTokenAmountTwo(e.target.value)}
                />
                <div className={Style.PoolAdd_box_deposit_box_input}
                onClick={ () => setOpenTokenModelThree(!openTokenModelThree)}>
                  <p>
                    <small>{tokenTwo.name || "ETH"}</small> {""}{" "}
                    {tokenTwo.symbol || "Select"}
                  </p>
                </div>
              </div>
            </div>
            {/*Add liquidity Button*/}
            <div className={Style.PoolAdd_box_price_right_amount}>
            <button
              onClick={() =>
                createLiquidityAndPool({
                  tokenAddress0: tokenOne.tokenAddress.tokenAddress,
                  tokenAddress1: tokenTwo.tokenAddress.tokenAddress,
                  fee: fee,
                  tokenPrice1: minPrice,
                  tokenPrice2: maxPrice,
                  slippage: slippage,
                  deadline: deadline,
                  tokenAmmountOne: tokenAmountOne,
                  tokenAmmountTwo: tokenAmountTwo,
                })
              }
            >
              Add Liquidity
            </button>
          </div>
          </div>
        </div>
      </div>
      {openModel && (
        <div className={Style.token}>
          <Token
            setOpenSetting={setOpenModel}
            setSlippage={setSlippage}
            slippage={slippage}
            deadline={deadline}
            setDeadline={setDeadline}
          />
        </div>
      )}
      {openTokenModelTwo && (
        <div Style="margin-top: -66%;margin-left: 31%;">
          <TokenSelector tokenData={tokenData} setselectedItemCallBack={setSelectedToken}></TokenSelector>
          </div>
          )}
      {openTokenModelThree && (
        <div Style="margin-top: 37%;margin-left: 16%;">
        <TokenSelector tokenData={tokenData} setselectedItemCallBack={setSelectedToken}></TokenSelector>
        </div>
    )}
    </div>
  );
};

export default PoolAdd;
