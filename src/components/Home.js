import React from "react";
import Logo from "../components/images/Logo.png";
import Button from "./Button";
import NewLogo from "../components/images/NewLogo.png";

export default function Home() {
  return (
    <div className="section">
      <div className="component-section-header">
        {/* <img src={Logo} alt="Furry animal" /> */}
        <img src={NewLogo} alt="Christmas" />

        <h2>
          <div>Loving 2020 so far?</div>
        </h2>
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
