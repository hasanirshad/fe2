import React, { useState } from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import Style from './SearchToken.module.css';

// Make sure to update these paths to match your project structure
import Ethereum from '../../Assets/Assets-Daulat/ether.png';
import Bitcoin from '../../Assets/Bitcoin.png';
import CardanoLogo from '../../Assets/CardanoLogo.png';
import BinanceCoin from '../../Assets/BinanceCoin.png';
import Polkadot from '../../Assets/PolkaDot.png';
import Solanalogo from '../../Assets/Solanalogo.png';
import ChainlinkLogo from '../../Assets/ChainlinkLogo.png';
import Uniswaplogo from '../../Assets/UniswapCoin.png';
import LitecoinLogo from '../../Assets/LitecoinLogo.png';
import Dogecoin_Logo from '../../Assets/Dogecoin_Logo.png';
import RippleLogo from '../../Assets/RippleLogo.png';
import Close from '../../Assets/Assets-Daulat/Close.png'; // Importing the close icon
import SearchRight from '../../Assets/Assets-Daulat/SearchRight.png';

const SearchToken = ({ openToken, tokens, tokenData }) => {
  const [active, setActive] = useState(null); // Initialize with null for no active state

  // Array of coin objects, each containing the image and name of the coin
  const coins = [
    { img: Ethereum, name: 'ETH' },
    { img: Bitcoin, name: 'BTC' },
    { img: CardanoLogo, name: 'ADA' },
    { img: BinanceCoin, name: 'BNB' },
    { img: Polkadot, name: 'DOT' },
    { img: Solanalogo, name: 'SOL' },
    { img: ChainlinkLogo, name: 'LINK' },
    { img: Uniswaplogo, name: 'UNI' },
    { img: LitecoinLogo, name: 'LTC' },
    { img: Dogecoin_Logo, name: 'DOGE' },
    { img: RippleLogo, name: 'XRP' },
  ];

  return (
    <div className={Style.SearchToken}>
      {/* Search Token Component */}
      <div className={Style.SearchToken_Box}>
        <div className={Style.SearchToken__Box_Heading}>
          <h4>Select a Token</h4>
          <div className={Style.Close_Button} onClick={() => openToken(false)}>
            <Image src={Close} alt="Close" width={70} height={70} />
            </div>
        </div>
        <div className={Style.SearchToken_Box_Search}>
          <div className={Style.SearchToken_Box_Search_img}>
            <Image src={SearchRight} alt='Search' width={20} height={20}/>
          </div>
          <input type='text' placeholder='Search Name or Paste the Address'/>
        </div>
        <div className={Style.SearchToken_Box_Tokens}>
          {coins.map((coin, index) => (
            <div
              key={index}
              className={`${Style.SearchToken_Item} ${active === index ? Style.active : ''}`}
              onClick={() => {
                setActive(index); // Set active token index
                tokens(coin); // Pass selected token to parent component
              }}
            >
              <Image src={coin.img} alt={coin.name} width={30} height={30} />
              <span>{coin.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;

// This Code was the Easiest Of all the codes i have written previously
