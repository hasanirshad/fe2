import React from "react";
import card1 from "../../public/Assets/HomePageAssets/card-1.png";
import card2 from "../../public/Assets/HomePageAssets/card-2.png";
import card3 from "../../public/Assets/HomePageAssets/card-3.png";

export const LastestBlog = () => {
  return (
    <section className="w-full md:px-14 px-2 lg:px-28 py-16" style={{ backgroundColor: "white" }}>
      <div className="header w-full text-center font-bold text-5xl py-10 text-[#001447]">
        <h1>Latest Blogs</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-md overflow-hidden flex items-center justify-center p-5">
              <img className="card-img rounded-lg" src={card1} alt="" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 black-font">
                How to Trade Crypto Futures in the US: A Beginner's Guide
              </h3>
              <p className="text-gray-700 text-base mb-4">
                With the popularity of cryptocurrencies, interest in trading in
                crypto futures has spurned. These contracts allow traders to
                speculate on the future price of a cryptocurrency without
                actually...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-semibold cursor-pointer">
                  Read more
                </span>
                <button className="bg-white hover:bg-sky-600 hover:border-white  rounded-full py-1 border border-black duration-200 px-5 hover:text-white  mr-2">
                  <img width={10} src="svgs/chartsvgs/card-arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-md overflow-hidden flex items-center justify-center p-5">
              <img className="card-img rounded-lg" src={card2} alt="" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 black-font">
                What is a Crypto ETF? Understanding Crypto ETF...
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Cryptocurrency exchange-traded fund (ETF) is an investment
                vehicle that tracks the price performance of one or more
                cryptocurrencies to provide exposure to the underlying asset.
                The...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-semibold cursor-pointer">
                  Read more
                </span>
                <button className="bg-white hover:bg-sky-600 hover:border-white  rounded-full py-1 border border-black duration-200 px-5 hover:text-white  mr-2">
                  <img width={10} src="svgs/chartsvgs/card-arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-md overflow-hidden flex items-center justify-center p-5">
              <img className="card-img rounded-lg" src={card3} alt="" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 black-font">
                What Are Tokens in Cryptocurrency? A Detailed...
              </h3>
              <p className="text-gray-700 text-base mb-4">
                You may have heard of the term 'token' in blockchain technology
                and cryptocurrency investment discussions. These digital
                representations of value are not just confined to
                cryptocurrency...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-semibold cursor-pointer">
                  Read more
                </span>
                <button className="bg-white hover:bg-sky-600 hover:border-white  rounded-full py-1 border border-black duration-200 px-5 hover:text-white  mr-2">
                  <img width={10} src="/svgs/chartsvgs/card-arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
