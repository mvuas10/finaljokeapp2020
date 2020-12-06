import React from "react";
import PicFuturama from "./images/PicFuturama.jpg";
import Button from "./Button";

export default function YesFuturama() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img src={PicFuturama} alt="YesFuturama" />
          <h3>Source: Quickmeme.com</h3>
        </div>
        <Button
          content1="More"
          content2="Home"
          link1="/yeswhiteguycry"
          link2="/"
        />
      </div>
    </div>
  );
}
