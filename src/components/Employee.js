import React, { useState } from "react";
import mlogo from "../images/male.png";
import flogo from "../images/female.png";
import "../App.css";

export default function Employee({ name, gender, phone, isHidden }) {
  // const [imgSrc, setSrc] = useState("../images/male.png");

  // console.log(imgSrc);
  const ChangeProfilePic = gender => {
    if (gender === "m") {
      return mlogo;
    } else {
      return flogo;
    }
  };

  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const style1 = {
    display: "none"
  };
  const style2 = {
    display: ""
  };

  return (
    <div className="employee" style={isHidden ? style1 : style2}>
      <div className="employee-img">
        <img src={ChangeProfilePic(gender)} alt="img" width="60px" />
      </div>
      <div className="employee-name">
        <h4>{capitalize(name)}</h4>
        <h5>{phone}</h5>
      </div>
    </div>
  );
}
