import {React,useState, useContext, useEffect}  from 'react';

import { HeroSection } from '../Components/index';

const Home = () => {
  return (
  <div>
    <HeroSection token={'ETH'} tokensTwo={'DAI'}  accounts="Hey" tokenData="DATA"  />
  </div>
  );
};

export default Home;
