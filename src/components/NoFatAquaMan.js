import React from "react";
import NoFatAqua from "./images/NoFatAqua.jpg";
import ButtonTest from "./ButtonTest";

export default function NoFatAquaMan() {
  return (
    <div>
      <div className="section">
        <div className="component-section-header">
          <img className="fataqua" src={NoFatAqua} alt="NoFatAquaMan" />
          <h3>Source: boredpanda</h3>
        </div>
        <ButtonTest content1="More" link1="/no500dayssummer" />
      </div>
    </div>
  );
}
