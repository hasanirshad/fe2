import React from "react";
import { HeaderBar } from "./header";
import { OurMission } from "./ourMission";
import { Trading } from "./Trading";
import { RwaToken } from "./RwaToken";
import { OurRoadmap } from "./OurRoadmap";
import { ETFSwap } from "./ETFSwap";
import { SwapToken } from "./ETFSwapToken";
import { Faq } from "./faq";
import { LastestBlog } from "./LastestBlog";
import { Footer } from "./Footer";
import { MainCover } from "./MainCover";

function Website() {
  return (
    <div>
      {/* <HeaderBar /> */}
      <MainCover />
      <OurMission />
      <Trading />
      <RwaToken />
      <OurRoadmap />
      <ETFSwap />
      <SwapToken />
      <Faq />
      <LastestBlog />
      {/* <Footer /> */}
    </div>
  );
}

export default Website;
