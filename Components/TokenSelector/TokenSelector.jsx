import React, { useEffect, useState, useRef } from 'react';
import styles from './TokenSelector.module.css';
import eth from './../../public/Assets/ether.png'
import stroke from './../../public/Assets/dd-stroke.png'
import Image from 'next/image';

const TokenSelector = ({ tokenData = [{
  name: '',
  icon: '',
  symbol: ''}], setselectedItemCallBack = (item)=>{}, selectedBoxHeight = 'auto', hideIcon = false, hideSymbol = false, hideName = false, hideSearch = false, selectedIconHeight = "60px", disabled=false, hideETH=false}) => {
  const [tokens, setTokens] = useState(tokenData);
  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleTokenSelect = (symbol) => {
    const token = tokens.find((token) => token.symbol === symbol);
    setSelectedToken(token);
    setselectedItemCallBack(token);
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
    <div className={styles.container} ref={selectRef} style={{height:selectedBoxHeight}}>
      <div 
        className={styles.selectTrigger} 
        onClick={() => { disabled ? setIsOpen(false) : setIsOpen(!isOpen)}}
      >
        {!hideIcon && <Image 
          src={selectedToken.icon} 
          alt={selectedToken.name} 
          className={styles.selectedIcon} 
          width={parseInt(selectedIconHeight, 10)}   // Ensure width is a number
          height={parseInt(selectedIconHeight, 10)}  // Ensure height is a number
          style={{
            width: selectedIconHeight,
            height: selectedIconHeight
          }}
        /> }
        <span className={styles.selectedText}>
          {selectedToken.symbol}
        </span>
        <img src="/Assets/down_arrow.png" alt="dropdown arrow" className={styles.arrow} />
      </div>

      {isOpen && (
        <div className={styles.selectContent}>        
          <div className={styles.tokenList}>
          {!hideSearch && <span className={styles.selectatoken}>Select a Token</span> }
            {!hideSearch && <div className={styles.searchContainer}>
            {!hideSearch && <img src="/Assets/search-normal.png" alt="search icon" className={styles.searchIcon} /> }
            {!hideSearch && <input
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Search tokens..."
                className={styles.searchInput}
              />}
            </div>}
            {hideETH && <div
                key="ETH"
                onClick={() => handleTokenSelect(token.symbol)}
                className={styles.tokenItem}
              >
                {!hideIcon && <Image src={eth} alt='ETH' className={styles.tokenIcon} />}
                {!hideName && <span className={styles.tokenName}>Ethereum</span>}
                {!hideSymbol && <span className={styles.tokenSymbol}>ETH</span>}
              </div>}
              {hideETH && <Image src={stroke} alt='ETH' className={styles.stroke} />}
            {tokens.map((token) => (
              <div
                key={token.symbol}
                onClick={() => handleTokenSelect(token.symbol)}
                className={styles.tokenItem}
              >
              {!hideIcon && <img src={token.icon} alt={token.name} className={styles.tokenIcon} /> }
              {!hideName && <span className={styles.tokenName}>{token.name}</span> }
              {!hideSymbol && <span className={styles.tokenSymbol}>{token.symbol}</span> }
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenSelector;
