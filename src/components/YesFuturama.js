import React from "react";
import PicFuturama from "./images/PicFuturama.jpg";
import Button from "./Button";
import ButtonTest from "./ButtonTest";

export default function YesFuturama() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img src={PicFuturama} alt="YesFuturama" />
          <h3>Source: Quickmeme.com</h3>
        </div>
        <ButtonTest content1="More" link1="/yeswhiteguycry" />
      </div>
    </div>
  );
}
