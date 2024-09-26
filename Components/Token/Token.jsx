import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import Style from "./Token.module.css"; // Import CSS module for styling
import Close from "../../Assets/Assets-Daulat/Close.png"; // Import Close image asset
import Toggle from '../Toggle/Toggle'; // Correctly import Toggle component
import Assets from '../../Assets'; // Import all assets from the Assets folder
import lock from '../../Assets/Assets-Daulat/lock.png'

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Style.Token}>
      <div className={Style.Token_Box}>
        {/* Heading section with title and close button */}
        <div className={Style.Token_Box_Heading}>
          <h4>Settings</h4>
          <Image
            src={Close}
            width={1000}
            height={1000}
            alt='Close'
            onClick={() => setOpenSetting(false)} // Close the settings modal on click
          />
        </div>

        {/* Slippage Tolerance section */}
        <p className={Style.Token_box_para}>
          Slippage Tolerance{" "}
          <Image src={lock} alt='Lock' width={20} height={20} />
        </p>
        <div className={Style.Token_Box_Input}>
          <button>Auto</button>
          <input type='text' placeholder='0.10%' />
        </div>

        {/* Transaction deadline section */}
        <p className={Style.Token_box_para_1}>
          Transaction Deadline{" "}
          <Image src={lock} alt='Lock' width={20} height={20} />
        </p>
        <div className={Style.Token_Box_Input}>
          <input type='text' placeholder='30' />
          <button>Minutes</button>
        </div>
        {/* Interface Setting section */}
        <div>
        <h2>Interface Settings</h2>
        </div>
        <div className={Style.Token_Box_Toggle}>
          <p className={Style.Token_box_para_2}>Transaction deadline</p>
          <Toggle label="No"/> {/* Toggle component for interface settings */}
        </div>
      </div>
    </div>
  );
};

export default Token;
