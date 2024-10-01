import React, { useEffect, useRef } from 'react';
import styles from './TopBarTicker.module.css';

const TopBarTicker = ({ items }) => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    let animationFrameId;
    let scrollPosition = 0;

    const scrollSpeed = 0.5; // Adjust this value for faster/slower scrolling

    const animateTicker = () => {
      scrollPosition -= scrollSpeed;
      
      // If ticker has scrolled past its full width, reset position
      if (scrollPosition <= -ticker.scrollWidtgh) {
        scrollPosition = ticker.offsetWidth;
      }

      ticker.style.transform = `translateX(${scrollPosition}px)`;
      
      // Keep animating
      animationFrameId = requestAnimationFrame(animateTicker);
    };

    // Start the animation immediately
    animateTicker();

    return () => {
      // Clean up the animation frame on component unmount
      cancelAnimationFrame(animationFrameId);
    };
  }, [items]);

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerWrapper}>
        <div className={styles.ticker} ref={tickerRef}>
          {items.map((item, index) => (
            <span key={index} className={styles.tickerItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBarTicker;
