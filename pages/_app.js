import React from "react";
import "../styles/globals.css";
import "../Components/HomePageComponents/HomePageIndex.css";
import { Inter, Outfit } from "next/font/google";
import { FooterSection, HeaderBar, TopBarTicker, Model } from "../Components/index";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  const tickerItems = [
    "Welcome to the platform!",
    "Don’t miss our upcoming sale!",
    "New updates available in the dashboard!",
    "Check out the latest features!"
  ];
  return (
    <div className={`${inter.className} ${outfit.className}`}>
    <TopBarTicker items={tickerItems} />
      <HeaderBar />
      <Component {...pageProps} />
      <FooterSection></FooterSection>
    </div>
  );
}

export default MyApp;
