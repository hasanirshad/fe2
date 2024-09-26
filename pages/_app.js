import "../styles/globals.css";

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
  BodyContent
} from "../Components/index";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <HeaderSection />

      {/* Leave for now --  Connect Wallet Window is Model */}
      {/* <Model></Model> */}
      
  {/* <MainPage></MainPage>  */}
  <BodyContent></BodyContent>

      {/* -- POOL -- AddLiquidity and PoolAdd for same purpose. Pool add is custom built and AddLiquidity is AI built. Decide which one is better */}
       {/*<PoolAdd /> */}
      {/* POOL--Dropdown -- Toke selector is drop dow to open for searching the tokens in Add Liquidity component */}
      {/*<TokenSelector></TokenSelector>*/}
      
      {/* --SWAP-- Component is same as SwapComponent, let see which one we can better fit with less efforts */}
      {/* <Component {...pageProps} /> */}
      <SwapComponent {...pageProps} />

      <StakingComponent />
      <FooterSection />
    </div>
  );
};

export default MyApp;