import React from "react";
import Logo from "../components/images/Logo.png";

export default function Toolbar() {
  return (
    <header id="header" className="section-header scroll">
      <a href="./">
        <img className="icon" src={Logo} alt="Furry animal" />
      </a>

      <nav>
        <div className="happy-title">Happy end of 2020!</div>
      </nav>
    </header>
  );
}
