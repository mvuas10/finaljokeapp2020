import React from "react";
import PicCryUgly from "../components/images/PicCryUgly.jpg";
import Button from "./Button";

export default function YesUglyCry() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img src={PicCryUgly} alt="CryUglyLady" />

          <h3>Source: ITSMEDELABELLA</h3>
        </div>
        <div>
          <Button
            content1="More"
            content2="Home"
            link1="/yesfuturama"
            link2="/"
          />
        </div>
      </div>
    </div>
  );
}
