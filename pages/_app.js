// pages/_app.js
import React from 'react';
import '../styles/globals.css'; // Optional
import "../Components/HomePageComponents/HomePageIndex.css";

//imported from the components we created
import {
  FooterSection,
  HeaderSection,
} from "../Components/index";
import Pool from './pool';

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <HeaderSection />
    <Component {...pageProps} />
    <FooterSection></FooterSection>
    </div>
    );
}

export default MyApp;
