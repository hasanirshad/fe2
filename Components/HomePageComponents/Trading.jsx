import React from "react";

export const Trading = () => {
    return (
      <section className="py-12 pr-4 md:pl-20 bg-[#19173d]">
  <div className="container mx-auto px-6 md:px-4">
    <h2 className="text-blue-400 md:text-lg text-xs font-semibold mb-2">
      STRATEGIES
    </h2>
    <h1 className="md:text-3xl font-bold mb-8 text-white">
      TRADING STRATEGIES SUITABLE FOR ANY MARKET
    </h1>
    <div className="space-y-8">
      {/* Card 1 */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-sky-600 p-2 md:p-4 rounded">
            <img
              src="svgs/momentum-trading.svg"
              alt="Momentum Trading Icon"
              className="md:w-8 md:h-8 w-16"
            />
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h3 className="md:text-xl font-semibold text-white w-[40%]">
                Momentum Trading
              </h3>
              <p className="text-gray-400 w-[60%] hidden md:block mr-12 text-xs">
                Utilize momentum trading strategy to capitalize on price
                movements, identifying assets with strong upward or downward
                trends, and generating profits.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sky-600 border border-sky-600 rounded-full px-3 hover:bg-sky-600 hover:text-white transition">
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-sky-600 p-2 md:p-4 rounded">
            <img
              src="svgs/mean-reversion.svg"
              alt="Mean Reversion Icon"
              className="md:w-8 md:h-8 w-16"
            />
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h3 className="md:text-xl font-semibold text-white w-[40%]">
                Mean Reversion
              </h3>
              <p className="text-gray-400 w-[60%] mr-12 text-xs hidden md:block">
                Mean reversion strategy captures price reversals in
                cryptocurrency markets, exploiting potential range-bound market
                opportunities.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sky-600 border border-sky-600 rounded-full px-3 hover:bg-sky-600 hover:text-white transition">
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Card 3 */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-sky-600 p-2 md:p-4 rounded">
            <img
              src="svgs/breakingout.svg"
              alt="Breakout Trading Icon"
              className="md:w-8 md:h-8 w-16"
            />
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h3 className="md:text-xl font-semibold text-white w-[40%]">
                Breakout Trading
              </h3>
              <p className="text-gray-400 w-[60%] mr-12 text-xs hidden md:block">
                Utilize breakout trading strategy to capitalize on price
                breakouts, scanning markets for assets near support or
                resistance levels, and executing trades.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sky-600 border border-sky-600 rounded-full px-3 hover:bg-sky-600 hover:text-white transition">
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Card 4 */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-sky-600 p-2 md:p-4 rounded">
            <img
              src="svgs/Arbitrage-opportunitie.svg"
              alt="Arbitrage Opportunities Icon"
              className="md:w-8 md:h-8 w-16"
            />
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h3 className="md:text-xl font-semibold text-white w-[40%]">
                Arbitrage Opportunities
              </h3>
              <p className="text-gray-400 w-[60%] mr-12 text-xs hidden md:block">
                Arbitrage strategies exploit price discrepancies across multiple
                cryptocurrency exchanges, minimizing risks and maximizing
                potential gains.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sky-600 border border-sky-600 rounded-full px-3 hover:bg-sky-600 hover:text-white transition">
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Card 5 */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-sky-600 p-2 md:p-4 rounded">
            <img
              src="svgs/Trading Volatility Dynamics.svg"
              alt="Trading Volatility Dynamics Icon"
              className="md:w-8 md:h-8 w-16"
            />
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h3 className="md:text-xl font-semibold text-white w-[40%]">
                Trading Volatility Dynamics
              </h3>
              <p className="text-gray-400 w-[60%] mr-12 text-xs hidden md:block">
                Volatility trading strategies capitalize on price fluctuations
                and volatility in the market. AlgoTech's volatility trading
                algorithms analyze volatility levels.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sky-600 border border-sky-600 rounded-full px-3 hover:bg-sky-600 hover:text-white transition">
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Card 6 */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-sky-600 p-2 md:p-4 rounded">
            <img
              src="svgs/Machine Learning-Based Strategies.svg"
              alt="Machine Learning-Based Strategies Icon"
              className="md:w-8 md:h-8 w-16"
            />
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <h3 className="md:text-xl font-semibold text-white w-[40%]">
                Machine Learning-Based Strategies
              </h3>
              <p className="text-gray-400 w-[60%] mr-12 text-xs hidden md:block">
                AlgoTech leverages machine learning algorithms to develop and
                deploy innovative trading strategies. These strategies use
                advanced machine learning models.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sky-600 border border-sky-600 rounded-full px-3 hover:bg-sky-600 hover:text-white transition">
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      
    );}