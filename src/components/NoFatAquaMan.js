import React from "react";
import NoFatAqua from "./images/NoFatAqua.jpg";
import Button from "./Button";

export default function NoFatAquaMan() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img className="fataqua" src={NoFatAqua} alt="NoFatAquaMan" />
          <h3>Source: boredpanda</h3>
        </div>
        <Button
          content1="More"
          content2="Home"
          link1="/no500dayssummer"
          link2="/"
        />
      </div>
    </div>
  );
}
