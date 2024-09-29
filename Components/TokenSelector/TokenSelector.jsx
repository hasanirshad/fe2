import React, { useEffect, useState, useRef } from 'react';
import styles from './TokenSelector.module.css';
import eth from './../../public/Assets/ether.png'
import stroke from './../../public/Assets/dd-stroke.png'
import Image from 'next/image';

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

const TokenSelector = () => {
  const [tokens, setTokens] = useState(tokenData);
  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleTokenSelect = (symbol) => {
    const token = tokens.find((token) => token.symbol === symbol);
    setSelectedToken(token);
    setIsOpen(false);
  };

  const searchTokens = (searchString) => {
    return tokenData.filter((token) => {
      const lowerCasedSearch = searchString.toLowerCase();
      return (
        token.name.toLowerCase().includes(lowerCasedSearch) ||
        token.symbol.toLowerCase().includes(lowerCasedSearch)
      );
    });
  };

  const handleTokenSearch = () => {
    if (search.length > 0) {
      setTokens(searchTokens(search));
    } else {
      setTokens(tokenData);
    }
  };

  useEffect(() => {
    handleTokenSearch();
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.container} ref={selectRef}>
      <div 
        className={styles.selectTrigger} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedToken.icon} alt={selectedToken.name} className={styles.selectedIcon} />
        <span className={styles.selectedText}>
          {selectedToken.symbol}
        </span>
        <img src="/Assets/down_arrow.png" alt="dropdown arrow" className={styles.arrow} />
      </div>

      {isOpen && (
        <div className={styles.selectContent}>        
          <div className={styles.tokenList}>
            <span className={styles.selectatoken}>Select a Token</span>
            <div className={styles.searchContainer}>
              <img src="/Assets/search-normal.png" alt="search icon" className={styles.searchIcon} />
              <input
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Search tokens..."
                className={styles.searchInput}
              />
            </div>
            <div
                className={styles.tokenItem}
              >
                <Image src={eth} alt='ETH' className={styles.tokenIcon} />
                <span className={styles.tokenName}>Ethereum</span>
                <span className={styles.tokenSymbol}>ETH</span>
              </div>
              <div>
              <Image src={stroke} alt='ETH' className={styles.stroke} />
              </div>
            {tokens.map((token) => (
              <div
                key={token.symbol}
                onClick={() => handleTokenSelect(token.symbol)}
                className={styles.tokenItem}
              >
                <img src={token.icon} alt={token.name} className={styles.tokenIcon} />
                <span className={styles.tokenName}>{token.name}</span>
                <span className={styles.tokenSymbol}>{token.symbol}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenSelector;
