import React from "react";
import Logo from "../components/images/Logo.png";
import NewLogo from "../components/images/NewLogo.png";

export default function Toolbar() {
  return (
    <header id="header" className="section-header scroll">
      <a href="./">
        {/* <img className="icon" src={Logo} alt="Furry animal" /> */}
        <img className="icon" src={NewLogo} alt="Christmas" />
      </a>

      <nav>
        <div className="happy-title">Happy end of 2020!</div>
      </nav>
    </header>
  );
}
