import React from "react";
import PicNoFireDog from "../components/images/PicNoFireDog.jpg";
import Button from "./Button";
import ButtonTest from "./ButtonTest";

export default function NoFireDog() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img src={PicNoFireDog} alt="NoFireDog" />
          <h3>Source: KC Green</h3>
        </div>
        <ButtonTest content1="More" link1="/nosadknight" />
      </div>
    </div>
  );
}
