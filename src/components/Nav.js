import React from "react";
import { Link } from "react-router-dom";
import backlogo from "../images/back.png";
import "../App.css";
export default function Nav({ title }) {
  const backToHome = () => {};
  return (
    <div className="header">
      <Link to="/">
        <div className="header-back">
          <img src={backlogo} alt="back" width="15px" />
        </div>
      </Link>
      <div>{title}</div>
    </div>
  );
}
