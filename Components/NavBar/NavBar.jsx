import { useState } from 'react';
import PropTypes from 'prop-types'; // I have added this line to import PropTypes
import Image from 'next/image';
import Style from './NavBar.module.css'; // This line is Updated to match Locofy.ai's naming convention
import Uniswaplogo from '../../Assets/uniswap1.png'; // Retain the existing logo import
import ActiveButtonBall from '../../Assets/ActiveButtonBall.png'; // Retain the existing active ball image import
import ArrowRight from '../../Assets/arrow-right.png'; // Retain the existing arrow image import
import Model from '../../Components/Model/Model'; // Retain the existing Model component

const NavBar = ({ className = "" }) => { //Match component structure

  // Retain the state hooks
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [openModel, setOpenModel] = useState(false);

  const handleMenuItemClick = (name) => { // Retain the existing function to handle menu item clicks
    setActiveItem(name);
    if (name === "Swap") {
      setShowHero(prev => !prev);
    }
  };

  const handleLoginClick = () => { // Retain the existing function to handle login clicks
    setOpenModel(true);
  };

  const handleSignUpClick = () => { // Retain the existing function to handle sign-up clicks
    setOpenModel(true);
  };

  return (
    <div className={[Style.NavBar, className].join(" ")}>
      <div className={Style.NavBar_Box}>
        {/* Left side of the NavBar containing the logo and menu items */}
        <div className={Style.NavBar_Box_left}>
          <div className={Style.NavBar_Box_logo}>
            {/* Uniswap logo */}
            <Image src={Uniswaplogo} alt="Uniswap logo" width={36} height={36} />
          </div>
          <div className={Style.NavBar_Box_left_Menu_Items}>
            {/* Map over the menu items to render them */}
            {["Features", "Staking", "Why ETFs", "Tokenomics", "Roadmap", "Faq", "Whitepaper", "Blog"].map((el) => (
              <div
                key={el} // Use the name as the key for each menu item
                className={`${Style.NavBar_Box_left_Menu_Item} ${activeItem === el ? Style.active : ''}`} // Add active class if the item is active
                onClick={() => handleMenuItemClick(el)} // Handle click event for menu item
              >
                {el} {/* Display the name of the menu item */}
                {/* Show the active button indicator (blue ball) if the item is active */}
                {activeItem === el && (
                  <div className={Style.NavBar_Box_left_Menu_Item_ActiveBall}>
                    <Image src={ActiveButtonBall} alt='ActiveBall' width={19} height={11} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Separator between left and right sides of the NavBar */}
        <div className={Style.NavBar_Box_Separator}></div>

        {/* Right side of the NavBar containing account-related buttons */}
        <div className={Style.NavBar_Box_Right}>
          <div className={Style.NavBar_Box_Right_Account}>
            {/* Connect Wallet button */}
            <button onClick={() => setOpenModel(true)}>Connect Wallet</button>
          </div>
          <div className={Style.NavBar_Box_Right_img}>
            {/* Right arrow image */}
            <Image src={ArrowRight} alt="Right" width={20} height={20} />
          </div>
          <div className={Style.NavBar_Box_Right_Login}>
            {/* Login button */}
            <button onClick={handleLoginClick}>Login</button>
          </div>
          <div className={Style.NavBar_Box_Right_Signup}>
            {/* Sign Up button */}
            <div className={Style.NavBar_Box_Right_Signup_Info}>
            <button onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>

        {/* Conditionally render the TokenList component if openTokenBox is true */}
        {openTokenBox && (
          <TokenList tokenDate="Hey" setOpenTokenBox={setOpenTokenBox} />
        )}

        {/* Conditionally render the HeroSection component if showHero is true */}
        {showHero && <HeroSection />} 

        {/* Conditionally render the Model component if openModel is true */}
        {openModel && (
          <Model setOpenModel={setOpenModel} /> 
        )}
      </div>
    </div>
  );
};
NavBar.propTypes = {
  className: PropTypes.string,
};

export default NavBar;
