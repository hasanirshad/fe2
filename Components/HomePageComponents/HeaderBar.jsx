import React, { useEffect, useState } from "react";

import MobileMenu from "./MobileMenu.jsx";
import { Model } from '../index.js';

const HeaderBar = () => {
  const [modal, setModal] = useState(false);
  const [modalKey, setModalKey] = useState(Date.now());
    return (
        <header className="text-xs">
        <Model key={`${modal}-${modalKey}`} isOpenModel={modal} />
  <nav className="bg-gradient-to-r from-[#1b3560] to-[#1f204a] pt-4 px-6 md:px-12">
    <div className="flex items-center justify-between">
      <a href="#" className="text-white text-lg font-bold">
        <img
          width={30}
          height={30}
          className="brightness-125"
          src="svgs/logo.svg"
          alt=""
        />
      </a>
      <div className="hidden items-center space-x-6 md:flex">
        <a
          href="/home"
          className="text-white hover:text-sky-500 transition-colors duration-300"
        >
          Home
        </a>
        <div className="relative group">
          <button className="text-white hover:text-[#0892d0] transition-colors duration-300 flex items-center space-x-1">
            <span>Trade</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="absolute z-10 bg-[#000000] rounded-md shadow-lg py-2 px-4 hidden group-hover:block">
            <a
              href="/pool"
              className="block text-white hover:text-[#0892d0] transition-colors duration-300 py-1"
            >
              Spot
            </a>
            <a
              href="/pool"
              className="block text-white hover:text-[#0892d0] transition-colors duration-300 py-1"
            >
              Margin
            </a>
            <a
              href="/pool"
              className="block text-white hover:text-[#0892d0] transition-colors duration-300 py-1"
            >
              Futures
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-white hover:text-sky-500 transition-colors duration-300 flex items-center space-x-1">
            <span>Explore</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="absolute z-10 bg-[#161C24] rounded-md shadow-lg py-2 px-4 hidden group-hover:block">
            <a
              href="/pool"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              NFTs
            </a>
            <a
              href="/pool"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              DeFi
            </a>
            <a
              href="/pool"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              Earn
            </a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-white hover:text-sky-500 transition-colors duration-300 flex items-center space-x-1">
            <span>Pool</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="absolute z-10 bg-[#161C24] rounded-md shadow-lg py-2 px-4 hidden group-hover:block">
            <a
              href="/pool"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              Liquidity
            </a>
            <a
              href="/pool"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              Staking
            </a>
            <a
              href="/pool"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              Farming
            </a>
          </div>
        </div>
        <a
          href="/pool"
          className="text-white hover:text-sky-500 transition-colors duration-300"
        >
          Stake
        </a>
        <button
          className="text-white hover:text-sky-500 transition-colors duration-300 border-l pl-2 border-white"
          onClick={()=> {setModal(true);console.log("Modal Opened", modal, Date.now()); setModalKey(Date.now())}}
        >
          Connect Wallet
        </button>
        <img src="/assets/svgs/right-Arrow.svg" alt="" />
        <a
          href="#"
          className="text-white hover:text-sky-500 transition-colors duration-300 border border-white rounded-full py-[3px] px-4"
        >
          Login
        </a>
        <a
          href="#"
          className="text-white bg-sky-500 hover:bg-[#0048E6] transition-colors duration-300 py-1 px-4 rounded-full"
        >
          Signup
        </a>
        
      </div>
      <MobileMenu/>
    </div>
    {/* Line to-transparent */}
    <div className="relative w-full h-0.5 mt-4 p-0">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-full" />
    </div>
   
  </nav>
  
</header>

    );
}

export default HeaderBar;