import React from "react";
import PicNoFireDog from "../components/images/PicNoFireDog.jpg";
import Button from "./Button";

export default function NoFireDog() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img src={PicNoFireDog} alt="NoFireDog" />
          <h3>Source: KC Green</h3>
        </div>
        <Button
          content1="More"
          content2="Home"
          link1="/nosadknight"
          link2="/"
        />
      </div>
    </div>
  );
}
