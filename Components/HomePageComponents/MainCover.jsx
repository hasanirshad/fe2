import React from "react";
import coverImg from "../../Assets/HomePageAssets/cover-img.jpg";
export const MainCover = () => {
  return (
    <section className=" text-center py-16 relative px-4 flex flex-col items-center justify-center cover-img">
      <img
        className="-z-50 absolute top-0 bg-cover bg-center w-full h-full"
        src={coverImg}
        alt="Cover ImG"
      />
      <h1 className="md:text-4xl font-bold mb-4 text-white">
        UNLOCK SUPERIOR TRADING <span className="text-blue-400">POTENTIAL</span>
        <br />
        WITH <span className="text-blue-400">CUTTING-EDGE ALGORITHMS</span>
      </h1>
      <p className="md:text-sm text-[9px] mb-8 text-white">
        A decentralized algorithmic crypto trading platform to revolutionize
        <br />
        trading and investment with innovative technologies and automation.
      </p>
      <a
        href="#"
        className="flex items-center border border-gray-700 bg-[#171e49] text-white pb-1 md:pb-0.5 hover:bg-[#1e265e] transition-colors duration-300 pt-0.5 pr-0.5 pl-6 rounded-full text-lg font-semibold mb-11 md:mb-20"
      >
        Join Presale
        <span className="pl-3">
          <img
            width={33}
            height={33}
            className="-rotate-45 p-0.5 duration-200 hover:rotate-180"
            src="svgs/right-Arrow.svg"
            alt=""
          />
        </span>
      </a>
      <div className="text-lg mb-4 text-white font-sans px-4 py-1 m flex items-center bg-[#28295b] rounded-full">
        <span>
          <img width={12} className="mr-3" src="svgs/dot.svg" alt="" />
        </span>
        21.00%
      </div>
      <div className="text-white p-8 py-1 rounded-lg max-w-md w-full mx-auto">
        <div className="text-center text-lg font-semibold mb-4">
          Token Presale <span className="text-blue-300">Stage 2 Ends Soon</span>
          <div className="relative w-full h-0.5 my-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-full" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Tokens Remaining In Stage:</span>
            <span className="font-bold">11,698,148</span>
          </div>
          <div className="flex justify-between">
            <span>$ALGT Price In Current Stage:</span>
            <span className="font-bold flex items-center">
              0.08
              <img
                src="svgs/t-coin.svg"
                alt="Tether"
                className="w-4 h-4 ml-1"
              />
            </span>
          </div>
          <div className="flex justify-between">
            <span>Token Price In The Next Stage:</span>
            <span className="font-bold">0.15</span>
          </div>
        </div>
        <div className="relative w-full h-0.5 my-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-full" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Tokens Sold In Total:</span>
            <span className="font-bold">181,392,544</span>
          </div>
          <div className="flex justify-between">
            <span>Total Raised:</span>
            <span className="font-bold">$ 10,385,097.040</span>
          </div>
        </div>
      </div>
    </section>
  );
};
