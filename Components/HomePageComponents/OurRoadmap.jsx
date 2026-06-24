import React from "react";
import phase from "../../Assets/HomePageAssets/phase.png";

export const OurRoadmap = () => {
  return (
    <section className="flex flex-col items-center w-full py-10 lg:px-24 px-2">
      <div className="container text-center">
        <h1 className="text-2xl font-bold mb-10 text-blue-900">OUR ROADMAP</h1>
        <div className="relative flex flex-col items-center space-y-10 w-full">
          <div className=" absolute h-full w-full top-[19%] hidden lg:block left-[45%]  bg-transparent">
            <img src="svgs/chartsvgs/phase-line.svg" alt="" />
          </div>
          {/* Phase 1 */}
          <div className="flex items-center space-x-11 w-full text-xs lg:text-base">
            <div className=" text-white p-6 custom-shape object-cover w-[800px] bg-center bg-[white] bg-no-repeat rounded-[10%]; relative">
              <div className="absolute top-0 left-[87%] flex items-center justify-center w-16 h-16 bg-white text-white rounded-[40%]">
                <span className="bg-sky-600 px-4 py-1 rounded-full text-4xl">
                  1
                </span>
              </div>
              <h2 className="text-3xl font-semibold mb-4 text-start">Phase</h2>
              <ol className="list-decimal list-inside text-start">
                <li className="p-3">Website launch</li>
                <li className="p-3">Obtaining the necessary licenses</li>
                <li className="p-3">Smart Contract Audit</li>
                <li className="p-3">Platform launch Beta Mode</li>
                <li className="p-3">Community and Marketing Development</li>
              </ol>
              <button className="mt-5 flex items-center text-white border border-white rounded-full duration-300 hover:bg-sky-600 hover:text-white text-[18px] px-7  pb-0.5">
                →
              </button>
            </div>
            <div className="lg:flex items-center justify-center hidden w-full">
              <div className="line-connector" />
            </div>
            <div className="text-blue-900  text-4xl lg:flex font-bold right-[17%] hidden absolute">
              Phase 01
            </div>
          </div>
          {/* Phase 2 */}
          <div className=" flex items-center lg:space-x-11 w-full text-xs lg:text-base">
            <div className=" absolute hidden lg:block left-56 text-blue-900 text-4xl font-bold">
              Phase 02
            </div>
            <div className="lg:flex items-center hidden justify-center w-full">
              <div className="line-connector hidden" />
            </div>
            <div
              style={{ backgroundImage: `url(${phase})` }}
              className=" text-white p-6 custom-shape object-cover w-[800px] bg-center bg-[white] bg-no-repeat rounded-[10%] custom-shape-2 relative "
            >
              <div className="absolute top-0 left-0 flex items-center justify-center w-16 h-16 bg-white text-white rounded-[50%]">
                <span className="bg-sky-600 px-4 py-1 rounded-full text-4xl">
                  2
                </span>
              </div>
              <h2 className="text-3xl font-semibold mb-4 text-start mt-12">
                Phase
              </h2>
              <ol className="list-decimal list-inside text-start">
                <li className="p-2">Website launch</li>
                <li className="p-2">Obtaining the necessary licenses</li>
                <li className="p-2">Smart Contract Audit</li>
                <li className="p-2">Platform launch Beta Mode</li>
                <li className="p-3">Community and Marketing Development</li>
              </ol>
              <button className="mt-5 flex items-center text-white border border-white rounded-full duration-300 hover:bg-sky-600 hover:text-white text-[18px] px-7  pb-0.5 ml-3">
                →
              </button>
            </div>
          </div>
          {/* Phase 3 */}
          <div className="relative flex items-center space-x-11 w-full text-xs lg:text-base">
            <div className=" text-white p-6 custom-shape object-cover w-[800px] bg-center bg-[white] bg-no-repeat rounded-[10%]; relative">
              <div className="absolute top-0 right-0 flex items-center justify-center w-16 h-16 bg-white text-white rounded-[50%]">
                <span className="bg-sky-600 px-4 py-1 rounded-full text-4xl">
                  3
                </span>
              </div>
              <h2 className="text-3xl font-semibold mb-4 text-start">Phase</h2>
              <ol className="list-decimal list-inside text-start">
                <li className="p-3">Website launch</li>
                <li className="p-3">Obtaining the necessary licenses</li>
                <li className="p-3">Smart Contract Audit</li>
                <li className="p-3">Platform launch Beta Mode</li>
                <li className="p-3">Community and Marketing Development</li>
              </ol>
              <button className="mt-5 flex items-center text-white border border-white rounded-full duration-300 hover:bg-sky-600 hover:text-white text-[18px] px-7  pb-0.5">
                →
              </button>
            </div>
            <div className="lg:flex items-center justify-center w-full hidden">
              <div className="line-connector" />
            </div>
            <div className="text-blue-900  text-4xl lg:flex font-bold right-[17%] absolute hidden">
              Phase 03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
