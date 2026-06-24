import React from "react";

export const ETFSwap = () => {
    return (
      <section className="w-full md:px-12 lg:px-20 py-16">
      {/* Header Text */}
      <div className="flex  justify-center max-w-5xl space-x-3 lg:space-x-36 items-center w-full text-center py-8">
        <h2 className="md:text-5xl font-bold text-blue-900">WHY USE ETFSWAP?</h2>
        <p className="text-gray-700 max-w-[50%] text-start  text-xs md:text-lg ">
          ETFSwap stands as the catalyst for change in a banking landscape that has
          been stagnant for too long. Here, investors are liberated from the
          burdensome rules of traditional banking.
        </p>
      </div>
      <div className="table-section grid justify-center items-center flex-wrap lg:grid-cols-2 grid-cols-1 w-full">
        {/* Table */}
        <div className="bg-white rounded-lg w-full lg:mr-8 overflow-x-auto lg:overflow-visible relative px-2">
          <img
            className="absolute right-0 top-0 h-full hidden lg:block transform lg:translate-x-full"
            src="/assets/svgs/chartsvgs/table-line.svg"
            alt=""
          />
          <table className="w-full divide-y divide-gray-200 relative">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border" />
                <th className="px-3 lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                  ETFSwap
                </th>
                <th className="px-3 lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                  Traditional ETFs
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 lg:px-3 py-4 whitespace-nowrap border">
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-sky-600 rounded-md flex items-center justify-center">
                      {/* SVG Placeholder */}
                    </div>
                    <span className="ml-2 lg:ml-4 text-gray-900 text-xs lg:text-base">
                      Trading hours
                    </span>
                  </div>
                </td>
                <td className="px-3 lg:px-3 py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  24/7 access
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Limited to trading hours
                </td>
              </tr>
              <tr>
                <td className="px-3 lg:px-3 py-4 whitespace-nowrap border">
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-sky-600 rounded-md flex items-center justify-center">
                      {/* SVG Placeholder */}
                    </div>
                    <span className="ml-2 lg:ml-4 text-gray-900 text-xs lg:text-base">
                      KYC
                    </span>
                  </div>
                </td>
                <td className="px-3 lg:px-3 py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  No requirements
                </td>
                <td className="px-3 lg:px-3 py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  KYC required
                </td>
              </tr>
              <tr>
                <td className="px-3 lg:px-3 py-4 whitespace-nowrap border">
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-sky-600 rounded-md flex items-center justify-center">
                      {/* SVG Placeholder */}
                    </div>
                    <span className="ml-2 lg:ml-4 text-gray-900 text-xs lg:text-base">
                      Fees
                    </span>
                  </div>
                </td>
                <td className="px-3 lg:px-3 py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  No extra fees
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Between 20bps to 2%
                </td>
              </tr>
              <tr>
                <td className="px-3  py-4 whitespace-nowrap border">
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-sky-600 rounded-md flex items-center justify-center">
                      {/* SVG Placeholder */}
                    </div>
                    <span className="ml-2 lg:ml-4 text-gray-900 text-xs lg:text-base">
                      Risk
                    </span>
                  </div>
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Ability to trade anytime
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Can be impacted by out of hours news
                </td>
              </tr>
              <tr>
                <td className="px-3  py-4 whitespace-nowrap border">
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-sky-600 rounded-md flex items-center justify-center">
                      {/* SVG Placeholder */}
                    </div>
                    <span className="ml-2 lg:ml-4 text-gray-900 text-xs lg:text-base">
                      Staking
                    </span>
                  </div>
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Ability to stake ETFs
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  No staking options via banks
                </td>
              </tr>
              <tr>
                <td className="px-3  py-4 whitespace-nowrap border">
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-sky-600 rounded-md flex items-center justify-center">
                      {/* SVG Placeholder */}
                    </div>
                    <span className="ml-2 lg:ml-4 text-gray-900 text-xs lg:text-base">
                      Flexibility
                    </span>
                  </div>
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Trade in minutes
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Account opening may take up to 24hrs
                </td>
              </tr>
              <tr>
                <td className="px-3  py-4 whitespace-nowrap border">
                  <div className="flex items-center">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-sky-600 rounded-md flex items-center justify-center">
                      {/* SVG Placeholder */}
                    </div>
                    <span className="ml-2 lg:ml-4 text-gray-900 text-xs lg:text-base">
                      Simplicity
                    </span>
                  </div>
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Be in full control
                </td>
                <td className="px-3  py-4 whitespace-nowrap text-gray-900 border text-xs lg:text-base">
                  Banks are in full control
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* right to table item */}
        <div className="bg-white flex justify-center mx-auto lg: rounded-lg py-14 md:py-0 md:m-8 lg:ml-32 px-6 w-full  text-xs ">
          <ul className="space-y-6">
            <li className="flex  items-center">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ease of Trading
                </h3>
                <p className="text-gray-700">
                  DeFi enables 24/7 trading, which offers greater flexibility than
                  centralized ETFs.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">No KYC</h3>
                <p className="text-gray-700">
                  ETFSwap requires no KYC registration, which means you can open an
                  account in minutes.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Low Costs</h3>
                <p className="text-gray-700">
                  Smart contract driven products require no fund manager, hence no
                  extra management fees.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Flexibility</h3>
                <p className="text-gray-700">
                  ETFSwap allows you to switch between crypto and ETFs in seconds,
                  whereas some Banks do not allow crypto trading.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Extra Income
                </h3>
                <p className="text-gray-700">
                  Our native token ETFS enables you to earn up to 87% APR yield.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    
      

      
    );}