import React, { useEffect, useRef, useState } from "react";
import styles from "./TopBarTicker.module.css";

const TopBarTicker = () => {
  const [items, setItems] = useState(new Map()); // Store the incoming data in a Map to avoid duplication based on the symbol 's'
  const tickerRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0); // Track the scroll position

  const fetchData = () => {
    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=cru4cdpr01qi6bka9m50cru4cdpr01qi6bka9m5g"
    );

    // Subscribe to different symbols when WebSocket connection is opened
    socket.addEventListener("open", function () {
      socket.send(JSON.stringify({ type: "subscribe", symbol: "SPY" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IVV" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VOO" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VTI" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "QQQ" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VEA" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VUG" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VTV" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IEFA" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "AGG" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "BND" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IWF" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IJH" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IJR" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IEMG" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VIG" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VWO" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VXUS" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VGT" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "GLD" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "XLK" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VO" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IWM" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "RSP" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "ITOT" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "SCHD" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "TLT" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "BNDX" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IWD" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VB" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VYM" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "EFA" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IVW" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VCIT" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "QUAL" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "SPLG" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "SCHX" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "SCHF" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "XLF" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "XLV" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VEU" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VT" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IXUS" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "MUB" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VV" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VNQ" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IWB" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "IWR" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "JEPI" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "VCSH" }));
    });

    // Listen for incoming messages
    socket.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);

      // If the message is of type 'trade' and contains data
      if (data.type === "trade" && data.data) {
        setItems((prevItems) => {
          const updatedItems = new Map(prevItems);
          data.data.forEach((item) => {
            const { s, p } = item;
            // Update the Map using the symbol 's' as the key
            updatedItems.set(s, `${s.replace(":", "-")}: ${p}`);
          });
          return updatedItems;
        });
      }
    });

    return () => {
      socket.close(); // Clean up the WebSocket connection when the component unmounts
    };
  };

  // Fetch data every 2 minutes
  useEffect(() => {
    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData();
    }, 120000); // 2 minutes = 120000 milliseconds

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

  useEffect(() => {
    const ticker = tickerRef.current;
    const container = containerRef.current;
    let animationFrameId;

    const scrollSpeed = 0.5; // Adjust this value for faster/slower scrolling

    const animateTicker = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - scrollSpeed;

        // If the ticker has scrolled past its full width, reset the scroll position
        if (newPosition <= -ticker.scrollWidth) {
          return container.offsetWidth; // Reset to the right after it scrolls off the screen
        }

        return newPosition;
      });

      animationFrameId = requestAnimationFrame(animateTicker);
    };

    // Start the animation
    animateTicker();

    // Set interval to reset the ticker position every 1 minute
    const resetTicker = setInterval(() => {
      setScrollPosition(container.offsetWidth); // Reset scroll position to the right after 1 minute
    }, 60000); // 1 minute = 60000 milliseconds

    return () => {
      // Clean up the animation frame and interval on component unmount
      cancelAnimationFrame(animationFrameId);
      clearInterval(resetTicker);
    };
  }, [items]); // Re-animate when items change

  return (
    <div className={styles.tickerContainer} ref={containerRef}>
      <div className={styles.tickerWrapper}>
        <div
          className={styles.ticker}
          ref={tickerRef}
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {[...items.values()].map((item, index) => (
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
