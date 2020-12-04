import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div>
      <Link to={props.link1}>
        <button>{props.content1}</button>
      </Link>
      <Link to={props.link2}>
        <button>{props.content2}</button>
      </Link>
    </div>
  );
}
