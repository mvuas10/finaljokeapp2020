import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div className="section">
      <div className="component-section-header">
        <div className="try">
          <Link to={props.link1}>
            <button className="buttonx">{props.content1}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
