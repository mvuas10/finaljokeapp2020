import React from "react";
import PicSadSummer from "./images/PicSadSummer.jpg";
import ButtonTest from "./ButtonTest";

export default function No500DaysSummer() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img className="summer" src={PicSadSummer} alt="Nosadsummer" />
          <h3>Source: brighthumanity</h3>
        </div>
        <ButtonTest content1="Home" link1="/" />
      </div>
    </div>
  );
}
