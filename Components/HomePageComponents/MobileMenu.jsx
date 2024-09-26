import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        onClick={toggleMenu} 
        className="md:hidden z-50 p-2 text-white"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        id="mobile-menu"
        className={`${
          isOpen ? 'flex' : 'hidden'
        } nav-toogle-nav flex-col w-[80%] md:hidden top-20 absolute right-0 z-50 bg-[rgba(0,0,0,0.8)] gap-5 p-4`}
      >
        <a
          href="#"
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
          <div className="absolute z-10 bg-[#000000] rounded-md shadow-lg py-2 px-4 ml-8 hidden group-hover:block">
            <a
              href="#"
              className="block text-white hover:text-[#0892d0] transition-colors duration-300 py-1"
            >
              Spot
            </a>
            <a
              href="#"
              className="block text-white hover:text-[#0892d0] transition-colors duration-300 py-1"
            >
              Margin
            </a>
            <a
              href="#"
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
          <div className="absolute z-10 bg-[#161C24] rounded-md shadow-lg py-2 px-4 hidden group-hover:block ml-8">
            <a
              href="#"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              NFTs
            </a>
            <a
              href="#"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              DeFi
            </a>
            <a
              href="#"
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
          <div className="absolute z-10 bg-[#161C24] rounded-md shadow-lg py-2 px-4 hidden group-hover:block ml-8">
            <a
              href="#"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              Liquidity
            </a>
            <a
              href="#"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              Staking
            </a>
            <a
              href="#"
              className="block text-white hover:text-sky-500 transition-colors duration-300 py-1"
            >
              Farming
            </a>
          </div>
        </div>
        <a
          href="#"
          className="text-white hover:text-sky-500 transition-colors duration-300"
        >
          Stake
        </a>
        <a
          href="#"
          className="text-white hover:text-sky-500 transition-colors duration-300 border-l pl-2 border-white flex"
        >
          Connect Wallet{" "}
          <img
            width={12}
            className="ml-2"
            src="/assets/svgs/right-Arrow.svg"
            alt=""
          />
        </a>
        <a
          href="#"
          className="text-white mr-6 hover:text-sky-500 transition-colors duration-300 border border-white rounded-full py-[3px] px-4"
        >
          Login
        </a>
        <a
          href="#"
          className="text-white mr-6 bg-sky-500 hover:bg-[#0048E6] transition-colors duration-300 py-1 px-4 rounded-full"
        >
          Signup
        </a>
      </div>
    </>
  );
};

export default MobileMenu;