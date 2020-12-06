import React from "react";
import PicWhiteGuyCry from "./images/PicWhiteGuyCry.jpg";
import ButtonTest from "./ButtonTest";

export default function YesWhiteGuyCry() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img src={PicWhiteGuyCry} alt="PicWhiteGuyCry" />
          <h3>Source: memegenerator</h3>
        </div>
        <ButtonTest content1="Home" link1="/" />
      </div>
    </div>
  );
}
