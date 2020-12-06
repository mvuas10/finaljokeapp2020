import React from "react";
import PicSadKnight from "./images/PicSadKnight.jpg";
import Button from "./Button";

export default function NoSadKnight() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img className="knight" src={PicSadKnight} alt="NoSadKnight" />
          <h3>Source: boredpanda</h3>
        </div>
        <Button
          content1="More"
          content2="Home"
          link1="/nofataquaman"
          link2="/"
        />
      </div>
    </div>
  );
}
