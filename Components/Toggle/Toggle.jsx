import React from "react";
import Style from "./Toggle.module.css";

const Toggle = ({ label }) => {
  return (
    <div className={Style.Toggle}>
      <div className={Style.Toggle_Switch_Box}>
        <input
          type="checkbox"
          // The main thing in this code
          className={Style.Toggle_Checkbox}
          name={label}
          id={label}
        />
        <label className={Style.Toggle_Label} htmlFor={label}>
          {/* The inner part of the checkbox */}
          <span className={Style.Toggle_Inner} />
          <span className={Style.Toggle_Switch} />
        </label>
      </div>
    </div>
  );
};

export default Toggle;

// Shortest and simplest code i ever had to write but i dont know hy i spent so much time on it