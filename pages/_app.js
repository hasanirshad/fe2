import "../styles/globals.css";
import Website from "../Components/HomePageComponents/HomePageApp.jsx";
import { Footer } from "../Components/HomePageComponents/Footer";
import "../Components/HomePageComponents/HomePageIndex.css";
//imported from the components we created
import {
  HeaderSection,
  HeroSection,
  TokenSelector,
  AddLiquidity,
  Model,
  SearchToken,
  TokenList,
  MainPage,
  SwapComponent,
  StakingComponent,
  PoolAdd,
  FooterSection,
  BodyContent,
  SwapBodyContent,
  Swap,
  SwapTokenInfo
} from "../Components/index";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <HeaderSection />

      {/* Leave for now --  Connect Wallet Window is Model */}
      {/* <Model></Model> */}
      
  {/* <MainPage></MainPage>  */}
  {/* <BodyContent></BodyContent> */}
  <SwapBodyContent></SwapBodyContent>
      {/* -- POOL -- AddLiquidity and PoolAdd for same purpose. Pool add is custom built and AddLiquidity is AI built. Decide which one is better */}
      {/*<PoolAdd /> */}
      {/* POOL--Dropdown -- Toke selector is drop dow to open for searching the tokens in Add Liquidity component */}
      {/*<TokenSelector></TokenSelector>*/}

      {/* --SWAP-- Component is same as SwapComponent, let see which one we can better fit with less efforts */}
      {/* <Component {...pageProps} /> */}
      {/* <SwapComponent {...pageProps} /> i comment this portion */}

      {/* <StakingComponent /> i comment this portion */}
      {/* <FooterSection /> this is a react prject footer and i comment this portion */}
      <Website />
      <Footer />
    </div>
  );
};

export default MyApp;
