import React from "react";

export const SwapToken = () => {
    return (
      <section className="bg-[#19173d] text-white py-16">
  <div className="container mx-auto">
    <h1 className="md:text-3xl font-bold text-center mb-12">
      BENEFITS OF INVESTING IN ETFS TOKEN
    </h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-between  gap-4">
      {/* Left column */}
      <div className="lg::w-full px-4 md:px-0">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Trading Discounts</h2>
          <p className="text-sm">
            ETFS functions as the principal currency within the ETFSwap
            ecosystem. To enhance the utility of our tokenization platform, we
            provide a special trading fee discount system, enabling investors to
            participate at reduced costs.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Passive Income</h2>
          <p className="text-sm">
            Earn up to 36% from our staking pool linked directly to our ETF Swap
            liquidity, providing a lucrative opportunity for generating passive
            income.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Automatic Rewards</h2>
          <p className="text-sm">
            Every transaction fee collected as a sell tax, trading fee is
            allocated to the ETFS reward pool, from which monthly airdrops
            benefit token holders, thereby boosting their investment returns.
          </p>
        </div>
      </div>
      {/* Middle column (empty for now) */}
      <div className="lg::w-1/3 w-full flex justify-center md:p-8 px-4  md:ml-0 md:px-0 py-6 ">
        <div className=" relative w-[300px] h-[300px]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-center-logo rounded-full flex justify-center items-center bg-gradient-to-b from-[#181a44] to-[#3254c2] text-white text-2xl">
            <img src="svgs/logo.svg" alt="" />
          </div>
          {/* lines */}
          <div className="liness">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] bg-center-logo rounded-full flex justify-center items-center  border-dashed border-2 border-[#292e72] text-white text-2xl border-t-0 border-b-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] bg-center-logo rounded-full flex justify-center items-center  border-dashed border-2 border-[#292e72] text-white text-2xl border-t-0 border-b-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[190px] h-[190px] bg-center-logo rounded-full flex justify-center items-center  border-dashed border-2 border-[#292e72] text-white text-2xl border-t-0 border-b-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-center-logo rounded-full flex justify-center items-center  border-dashed border-2 border-[#292e72] text-white text-2xl border-t-0 border-b-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] bg-center-logo rounded-full flex justify-center items-center  border-dashed border-2 border-[#292e72] text-white text-2xl border-t-0 border-b-0"></div>
          </div>
          {/* bitcion */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-bitcoin rounded-full flex justify-center items-center text-white text-lg">
            <img src="svgs/bitcion.svg" alt="" />
          </div>
          {/* 1 */}
          <div className="absolute top-1/4 right-0 w-12 h-12 bg-ethereum rounded-full flex justify-center items-center text-white text-lg bg-[#617dea]">
            <img src="svgs/shape-1.svg" alt="" />
          </div>
          {/* 5 */}
          <div className="absolute bottom-1/4 right-0 w-12 h-12 bg-solana rounded-full flex justify-center items-center bg-white text-white text-lg">
            <img src="svgs/shape-5.svg" alt="" />
          </div>
          {/* 2 */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-tether rounded-full flex justify-center items-center text-white text-lg bg-[#e40179]">
            <img src="svgs/shape-2.svg" alt="" />
          </div>
          {/* 3 */}
          <div className="absolute bottom-1/4 left-0 w-12 h-12 bg-usd-coin rounded-full flex justify-center items-center text-white text-lg">
            <img src="svgs/shape-3.svg" alt="" />
          </div>
          {/* 4 */}
          <div className="absolute top-1/4 left-0 w-12 h-12 bg-polkadot rounded-full flex justify-center bg-[#27a27b] items-center text-white text-lg">
            <img src="svgs/shape-4.svg" alt="" />
          </div>
        </div>
      </div>
      {/* Right column */}
      <div className="lg:w-full px-4 md:px-0">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Lower Fees</h2>
          <p className="text-sm">
            By holding ETFS tokens, you gain access to reduced trading fees,
            lowering transaction costs and enhancing the cost-effectiveness of
            daily trading activities.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Voting Rights</h2>
          <p className="text-sm">
            As an ETFS holder, you will possess voting rights within the
            platform's governance system, enabling you to influence its future
            direction and align it with your investment goals.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Early Access</h2>
          <p className="text-sm">
            Get early access to new ETF listings and updates on exclusive
            investment opportunities. This allows you to capitalize on favorable
            market conditions and boost your portfolio's performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    
      

      
    );}