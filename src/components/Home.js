import React from "react";
import Logo from "../components/images/Logo.png";
import Button from "./Button";

export default function Home() {
  return (
    <div className="section">
      <div className="component-section-header">
        <img src={Logo} alt="Furry animal" />

        <h3>
          <div>Loving 2020 so far?</div>
        </h3>
      </div>

      <div>
        <Button
          content1="Yes"
          content2="No"
          link1="/yesuglycry"
          link2="/nofiredog"
        />
      </div>
    </div>
  );
}
