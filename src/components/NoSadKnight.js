import React from "react";
import PicSadKnight from "./images/PicSadKnight.jpg";
import ButtonTest from "./ButtonTest";

export default function NoSadKnight() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img className="knight" src={PicSadKnight} alt="NoSadKnight" />
          <h3>Source: boredpanda</h3>
        </div>
        <ButtonTest content1="More" link1="/nofataquaman" />
      </div>
    </div>
  );
}
