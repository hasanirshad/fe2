import React from "react";
import "../styles/globals.css";
import "../Components/HomePageComponents/HomePageIndex.css";
import { Inter, Outfit } from "next/font/google";
import { FooterSection, HeaderSection, HeaderBar } from "../Components/index";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${outfit.className}`}>
      <HeaderBar />
      <Component {...pageProps} />
      <FooterSection></FooterSection>
    </div>
  );
}

export default MyApp;
