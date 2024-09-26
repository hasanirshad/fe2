import React, { useState } from 'react';
import styles from './TokenSelector.module.css';
import TokenItem from './TokenItem';

// Token data array (kept the same)
const tokenData = [
  { name: 'Ox Protocol', symbol: 'ZRX', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73be894649968360ff8e74b283a096ca02a1e4478ec1a6b6582c409da5756759?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
  { name: '1inch', symbol: '1INCH', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0679934e2f2bb54d66551ba323ea53b5e2d578f9099347a41ba7d10342c477ab?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
  { name: 'Aave', symbol: 'AAVE', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c065506ae2ae8f8fa678e29e56ac185aa6d4120c914c0f2e346abd1f47fdd?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
  { name: 'Across Protocol', symbol: 'ACX', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3be2771f01a18591fb5f8f5a5b9f926c61e61c04b61836158d241b8ee9581070?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
  { name: 'AdEx', symbol: 'ADX', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f0e409a5c87c9719f8a2e78fbcbc92819bb4b5db5d741456f6d0e63c3f754f15?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
  { name: 'AIOZ Network', symbol: 'AIOZ', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a42c2d69199f0a18625e7ffa45215fc0f59daf7261996227b6a3cc890e282f26?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960' },
];

function TokenSelector() {
  const [searchQuery, setSearchQuery] = useState(''); // New state to track the search query

  // Filter the token list based on the search query
  const filteredTokens = tokenData.filter(token =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.container}>
      <div className={styles.tokenSelectorCard}>
        <h2 className={styles.title}>Select a Token</h2>
        
        {/* Search bar */}
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd29670ef397c4152c0d4f7bfe8178de246e6ff2b8fe4c5df88208b91174a186?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" className={styles.icon} alt="" />
            <label htmlFor="tokenSearch" className={styles['visually-hidden']}>Search tokens</label>
            <input 
              id="tokenSearch" 
              type="text" 
              placeholder="Search tokens" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
            />
          </div>
          <div className={styles.iconGroup}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/744a7f65458204edc84dee96b50569e99a24c6981e93609d8fbe9faf2e1b19c3?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" className={styles.icon} alt="" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b8aa72ce93083dfafe9c96f77782fd58d21ef635a699c33173a4d6830ec43f?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" className={styles.icon} alt="" />
          </div>
        </div>

        {/* Selected token (for context) */}
        <div className={styles.selectedToken}>
          <div className={styles.tokenInfo}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/11176c1c311a1b521571f07e97fc514949820bc2702c915ed3d60ab84a6f134a?placeholderIfAbsent=true&apiKey=45ca834082bd4e999875d6aa728b9960" className={styles.icon} alt="Ethereum logo" />
            <div className={styles.tokenName}>Ethereum</div>
          </div>
          <div className={styles.tokenSymbol}>ETH</div>
        </div>

        <div className={styles.divider} />

        {/* Filtered token list */}
        <div className={styles.tokenList}>
          <div className={styles.tokenColumn}>
            {filteredTokens.map((token, index) => (
              <TokenItem key={index} name={token.name} icon={token.icon} />
            ))}
          </div>
          <div className={styles.tokenSymbolColumn}>
            {filteredTokens.map((token, index) => (
              <div key={index} className={styles.tokenSymbolItem}>{token.symbol}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenSelector;
