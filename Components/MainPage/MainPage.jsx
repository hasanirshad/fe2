import { Component, useState } from "react";
// Importing necessary dependencies from React

import Style from "./MainPage.module.css";
// Importing CSS module for styling the component

import Image from "next/image";
// Importing Next.js's Image component for optimized image rendering

//imported from the components we created
import {
  AddLiquidity,
  SwapComponent,
  StakingComponent,
  PoolAdd
} from "../";

import HeroSection from "../../Components/HeroSection/HeroSection";
// Importing the HeroSection component from the specified path

import Settings from "../../Assets/Assets-Daulat/cross.png";
import LineBlue from "../../Assets/LineBlue.png";
import OrangeBall from "../../Assets/OrangeBall.png";
import OrangeShadow from "../../Assets/OrangeShadow.png";
import PurpleBall from "../../Assets/PurpleBall.png";
import PurpleShadow from "../../Assets/PurpleShadow.png";
import PurpleRising from "../../Assets/PurpleRising.png";
import CoinsFalling from "../../Assets/CoinsFalling.png";
import LineRising from "../../Assets/RisingLine.png";
import Close from "../../Assets/Assets-Daulat/Close.png";
import lock from "../../Assets/Assets-Daulat/lock.png";
import Toggle from "../../Components/Toggle/Toggle";
import ActiveButtonBall from "../../Assets/ActiveBall.png";
import DownBox from "../../Assets/Down.png";
import Down from "../../Assets/Down1.png";
import Pathner from "../../Assets/Pathner.png";
import ColorGradient from "../../Assets/ColorGradient.png";
import styled from "@emotion/styled";
// Importing images and components for use in the MainPage component

const MainPage = (label) => {
  const menuItems = [
    { name: "Pools", link: "/{Pool}" },
    { name: "Buy", link: "/Buy" },
    { name: "Sell", link: "/Sell" },
    { name: "Swap", link: "/Swap" },
    { name: "Stake", link: "/Stake" },
  ];
  // Defining the menu items that will be displayed in the navigation

  const [activeItem, setActiveItem] = useState(true);
  // State to track the active menu item

  const [showHero, setShowHero] = useState(false);
  // State to control the visibility of the Hero section

  const [OpenSettings, setOpenSetting] = useState(false);
  // State to control the visibility of the settings modal

  const handleMenuItemClick = (name) => {
    setActiveItem(name);
    // Update the active menu item when clicked

    const handleSettingsClick = () => {
      setShowHero(false);
      // Hide the Hero section when settings is clicked
      setOpenSetting(true);
      // Open the settings modal
    };

    if (name === "Swap") {
      setShowHero(!showHero);
      // Toggle the visibility of the Hero section when "Swap" is clicked
    }
  };

  return (
    <div className={Style.mainPageFlexContainer}>
      <div className={`${Style.mainPageFlexContainerBG} ${Style.left}`}>
        {/* Main wrapper for the MainPage component */}

        <div className={Style.MainPage_Pathner}>
          {/* Container for displaying the Pathner image */}
          <Image src={Pathner} alt="PathnerChecks" />
        </div>

        <div className={Style.MainPage_Pathner_ColorGradient}>
          {/* Container for displaying the color gradient image */}
          <Image src={ColorGradient} alt="Color" />
        </div>
      </div>
      <div className={`${Style.mainPageFunctionsContainer} ${Style.right}`}>
        <div className={Style.MainPage_MainPictures}>
          {/* Container for displaying decorative images */}
          <div className={Style.MainPage_MainPictures_OrangeBall}>
            <Image src={OrangeBall} alt="Orange Ball" />
          </div>
          <div className={Style.MainPage_MainPictures_OrangeShadow}>
            <Image src={OrangeShadow} alt="Orange Shadow" />
          </div>
          <div>
            <Image
              className={Style.LineRisingLeft}
              src={LineRising}
              alt="OrangeRising"
            />
          </div>
          <div className={Style.MainPage_MainPictures_PurpleBall}>
            <Image src={PurpleBall} alt="Purple Ball" />
          </div>
          <div className={Style.MainPage_MainPictures_PurpleShadow}>
            <Image src={PurpleShadow} alt="Purple Shadow" />
          </div>
          <div>
            <Image
              className={Style.LineRisingRight}
              src={LineRising}
              alt="PurpleRising"
            />
          </div>
        </div>

        <div className={Style.MainPage_MainHeadingLine}>
          <div className={Style.MainPage_MainHeadingLine_Items}>
            {/* Container for menu items */}
            {menuItems.map((el, i) => (
              <div
                key={i}
                className={`${Style.MainPage_MainHeadingLine_Items_Active} ${
                  activeItem === el.name ? Style.active : ""
                }`}
                onClick={() => handleMenuItemClick(el.name)}
                // Rendering each menu item and adding click functionality to change the active item
              >
                {el.name}
                {activeItem === el.name && (
                  <div
                    className={
                      Style.MainPage_MainHeadingLine_Items_ActiveButtonBall
                    }
                  >
                    {/* Displaying a blue ball below the active menu item */}
                    <Image src={ActiveButtonBall} alt="ActiveBall" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={Style.MainPage_MainHeadingLine_SeparatorLine}>
          {/* Separator line below the menu items */}
          <Image src={LineBlue} alt="Line" />
        </div>
        <div
          className={Style.MainPage_MainHeadingLine_Items_Settings}
          onClick={() => setOpenSetting(true)}
        >
          {/* Settings button to open the settings modal */}
          <Image src={Settings} alt="Settings" />
        </div>

        <div className={Style.Toggle}>
          <div className={Style.Toggle_Switch_Box}>
            {/* Toggle switch component */}
            <input
              type="checkbox"
              className={Style.Toggle_Checkbox}
              name={label}
              id={label}
            />
            <label className={Style.Toggle_Label} htmlFor={label}>
              <span className={Style.Toggle_Inner} />
              <span className={Style.Toggle_Switch} />
            </label>
          </div>
        </div>

        {OpenSettings && (
          // Conditionally rendering the settings modal if OpenSettings is true
          <div className={Style.MainPage_Token}>
            <div className={Style.MainPage_Token_Box}>
              {/* Settings modal content */}
              <div className={Style.Token_Box_Heading}>
                {/* Heading section with title and close button */}
                <h4>Settings</h4>
                <Image
                  src={Close}
                  width={50}
                  height={50}
                  alt="Close"
                  onClick={() => setOpenSetting(false)}
                  // Close the settings modal on click
                />
              </div>

              <p className={Style.Token_box_para}>
                {/* Slippage Tolerance section */}
                Slippage Tolerance{" "}
                <Image src={lock} alt="Lock" width={20} height={20} />
              </p>
              <div className={Style.Token_Box_Input}>
                {/* Input for Slippage Tolerance */}
                <button>Auto</button>
                <input type="text" placeholder="0.10%" />
              </div>

              <p className={Style.Token_box_para_1}>
                {/* Transaction deadline section */}
                Transaction Deadline{" "}
                <Image src={lock} alt="Lock" width={20} height={20} />
              </p>
              <div className={Style.Token_Box_Input}>
                {/* Input for Transaction Deadline */}
                <input type="text" placeholder="30" />
                <button>Minutes</button>
              </div>

              <div className={Style.MainPage_Token_Box_Heading4}>
                <h2>Interface Settings</h2>
                {/* Interface Settings section */}
              </div>

              <div className={Style.Token_Box_Toggle}>
                <p className={Style.Token_box_para_2}>Transaction deadline</p>
                <Toggle label="No" />
                {/* Toggle component for interface settings */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
// Exporting the MainPage component as the default export
