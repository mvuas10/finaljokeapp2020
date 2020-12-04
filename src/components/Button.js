import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div className="section">
      <div className="component-section-header">
        <div className="try">
          <Link to={props.link1}>
            <button className="button">{props.content1}</button>
          </Link>
          <Link to={props.link2}>
            <button className="button2">{props.content2}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
