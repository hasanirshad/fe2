import React from "react";
import Image from 'next/image';
import mission from "../../public/Assets/HomePageAssets/mission.png";
import { Black_And_White_Picture } from 'next/font/google';

export const OurMission = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-16 md:px-8 lg:px-16" style={{ backgroundColor: "white" }}>
      <div className="flex flex-wrap justify-center  md:space-y-0 gap-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between w-full sm:w-72 md:w-1/2 lg:w-72">
          <div className="flex items-center justify-between">
            <img
              src="svgs/1.svg"
              alt="Icon 1"
              className="w-12 h-12 bg-[#0892d0] p-2 rounded-sm"
            />
            <span className="text-gray-300 text-xl">01</span>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold black-font">Speed and Efficiency</h3>
            <p className="text-gray-500 mt-2 text-3xl">→</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg px-6 py-2 flex flex-col justify-between w-full sm:w-72 md:w-1/2 lg:w-72">
          <div className="flex items-center justify-between">
            <img
              src="svgs/2.svg"
              alt="Icon 2"
              className="w-12 h-12 bg-[#0892d0] p-2 rounded-sm"
            />
            <span className="text-gray-300 text-xl">02</span>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold  black-font">
              Consistency and Discipline
            </h3>
            <p className="text-gray-500 mt-2 text-3xl">→</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg px-6 py-2 flex flex-col justify-between w-full sm:w-72 md:w-1/2 lg:w-72">
          <div className="flex items-center justify-between">
            <img
              src="svgs/3.svg"
              alt="Icon 3"
              className="w-12 h-12 bg-[#0892d0] p-2 rounded-sm"
            />
            <span className="text-gray-300 text-xl">03</span>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold black-font">
              Data-driven Decision Making
            </h3>
            <p className="text-gray-500 mt-2 text-3xl">→</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg px-6 py-2 flex flex-col justify-between w-full sm:w-72 md:w-1/2 lg:w-72">
          <div className="flex items-center justify-between">
            <img
              src="svgs/4.svg"
              alt="Icon 4"
              className="w-12 h-12 bg-[#0892d0] p-2 rounded-sm"
            />
            <span className="text-gray-300 text-xl">04</span>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold black-font">
              Scalability and Accessibility
            </h3>
            <p className="text-gray-500 mt-2 text-3xl">→</p>
          </div>
        </div>
      </div>
      {/* logo Div */}
      <div className="flex items-center justify-center mt-16 w-full">
        <div className="max-w-5xl bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center p-8">
          <div className="w-full md:w-1/3 relative">
            {/* Replace the src with your logo image */}
            <div className="background w-[85%] h-[85%] bg-[#e6f4fa] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute rounded-full -z-20" />
            <Image
              src={mission}
              alt="Logo Foreground"
              className="w-full h-auto rounded-full logo-mask text-white"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-blue-600 text-lg font-semibold">WHO WE ARE</h2>
            <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
              OUR MISSION
            </h1>
            <p className="text-gray-600 leading-relaxed">
              At ETFSwap, we are a team of experienced professionals with a deep
              understanding of algorithmic trading and a passion for innovation.
              We combine cutting-edge technology, data analysis, and industry
              expertise to develop robust trading solutions that deliver
              exceptional results. Our team members are not just experts in
              their respective fields; they are also dedicated to ongoing
              learning and development. We actively engage in research, attend
              industry conferences, and collaborate with leading experts to stay
              ahead of market trends and emerging technologies. This commitment
              to continuous improvement ensures that our solutions remain
              cutting-edge and effective in today's fast-paced financial
              landscape. At Algotech, we are not just creating solutions for
              today; we are shaping the future of algorithmic trading with
              innovation, expertise, and a relentless drive for excellence.
            </p>
          </div>
        </div>
      </div>
      <section className="py-8 px-4 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">FEATURES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-blue-200 rounded-lg p-6 bg-white shadow-md">
              <div className="flex justify-start mb-4">
                <div className="bg-blue-500 rounded">
                  {/* SVG Icon for Swap */}
                  <img
                    width={58}
                    height={58}
                    src="svgs/swap.svg"
                    alt="Swap Icon"
                  />
                </div>
              </div>
              <div className="text-start">
                <h3 className="text-xl font-semibold mb-2 items-start">Swap</h3>
                <p className="text-gray-600 mb-4">
                  ETFSwap makes trading easy and rewarding. Our decentralized
                  infrastructure allows you to swap assets securely and cost
                  effectively across multiple markets.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <button className="flex items-center text-blue-500 border border-blue-500 rounded-full duration-300 hover:bg-sky-600 hover:text-white px-5 pb-0.5">
                  →
                </button>
                <span className="text-gray-600">Start Swapping</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="border border-blue-200 rounded-lg p-6 bg-white shadow-md">
              <div className="flex justify-start mb-4">
                <div>
                  {/* SVG Icon for Swap */}
                  <img
                    className="bg-sky-600 p-3 rounded"
                    width={58}
                    height={58}
                    src="svgs/stake.svg"
                    alt="Swap Icon"
                  />
                </div>
              </div>
              <div className="text-start">
                <h3 className="text-xl font-semibold mb-2 items-start">
                  Stake
                </h3>
                <p className="text-gray-600 mb-4">
                  Adding your assets to pools provides liquidity for swap
                  trading. Earn yield from trading fees as each ETF pool's
                  trading volume grows..
                </p>
              </div>
              <div className="flex justify-between items-center">
                <button className="flex items-center text-blue-500 border border-blue-500 rounded-full duration-300 hover:bg-sky-600 hover:text-white px-5 pb-0.5">
                  →
                </button>
                <span className="text-gray-600">Start Earning</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="border border-blue-200 rounded-lg p-6 bg-white shadow-md">
              <div className="flex justify-start mb-4">
                <div>
                  {/* SVG Icon for Swap */}
                  <img
                    width={58}
                    height={58}
                    className="bg-sky-600 p-3 rounded"
                    src="svgs/futureOption.svg"
                    alt="Swap Icon"
                  />
                </div>
              </div>
              <div className="text-start">
                <h3 className="text-xl font-semibold mb-2 items-start">
                  Perpetual Futures &amp; Options
                </h3>
                <p className="text-gray-600 mb-4">
                  Trading in long and short options directly from the platform,
                  offering you up to 50x leverage across all listed ETFS
                </p>
              </div>
              <div className="flex justify-between items-center">
                <button className="flex items-center text-blue-500 border border-blue-500 rounded-full duration-300 hover:bg-sky-600 hover:text-white px-5 pb-0.5">
                  →
                </button>
                <span className="text-gray-600">Start Investing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
