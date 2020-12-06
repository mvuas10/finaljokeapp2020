import React from "react";
import PicCryUgly from "../components/images/PicCryUgly.jpg";
import Button from "./Button";
import ButtonTest from "./ButtonTest";

export default function YesUglyCry() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img src={PicCryUgly} alt="CryUglyLady" />

          <h3>Source: ITSMEDELABELLA</h3>
        </div>
        <div>
          <ButtonTest content1="More" link1="/yesfuturama" />
        </div>
      </div>
    </div>
  );
}
