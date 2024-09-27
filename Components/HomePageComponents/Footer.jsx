import React from "react";
import footer from "../../public/Assets/HomePageAssets/Footer Background.png";
import coin from "../../public/Assets/HomePageAssets/coins.png";

export const Footer = () => {
  return (
    <footer className="relative footer w-full bg-blue-900">
      <img
        className="w-full h-full absolute top-0 left-0 object-cover"
        src={footer}
        alt="Footer background"
      />
      <div className="relative z-10 flex flex-col">
        <div className="lable flex justify-center px-2 md:px-8 lg:px-14 py-24">
          <div className="bg-gradient-to-r from-[rgba(29,30,73,0.8)] to-[rgba(27,49,122,0.8)] text-white p-8 py-12 md:w-[80%] relative rounded-lg">
            <div className="max-w-2xl relative z-10 text-start">
              <h2 className="text-3xl font-bold mb-2">
                INVESTING WITH US TAKES MINUTES
              </h2>
              <p className="text-sky-100 mb-4">
                Navigating Your Financial Future, Empowering Wealth, One Step at
                a Time.
              </p>
              <button className="bg-sky-600 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded">
                Get Started
              </button>
            </div>
            <div className="absolute right-3 top-[10%] transform -translate-y-1/2">
              <img width={300} src={coin} alt="Coins" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-24 pb-8 md:text-lg text-xs text-white">
          <div className="lg:flex lg:justify-between grid grid-cols-2">
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <img
                className="bg-white p-2 rounded-md my-2"
                src="svgs/logo.svg"
                alt="Logo"
              />
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Column 2 (Navigation) --> */}
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h3 className="text-lg font-semibold mb-4 cursor-pointer">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Market
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Column 3 (Features) --> */}
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h3 className="text-lg font-semibold mb-4 cursor-pointer">
                Features
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Crypto Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Exchange Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Investment Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Portfolio Management
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Column 4 (Legal) --> */}
            <div className="lg:w-1/4">
              <h3 className="text-lg font-semibold mb-4 cursor-pointer">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Term Of Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Licensed &amp; Regulation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Line to-transparent --> */}
        <div className="relative w-full h-0.5 mt-4 p-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-full"></div>
        </div>
        <div className="py-4 text-xs container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
          <span>© 2024, All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-sky-400">
              Sitemap
            </a>
            <a
              href="#"
              className="hover:text-sky-400 border-x border-sky-600 px-2"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-sky-400 border-x border-sky-600 px-2"
            >
              IMAP Policy
            </a>
            <a
              href="#"
              className="hover:text-sky-400 border-x border-sky-600 px-2"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
