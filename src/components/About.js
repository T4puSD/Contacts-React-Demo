import React, { useState } from "react";
import Nav from "./Nav";
import mlogo from "../images/male.png";
import flogo from "../images/female.png";
import messagelogo from "../images/message.png";
import phonelogo from "../images/phone.png";
import menulogo from "../images/menu.png";

export default function About({ match }) {
  const [people, setPeople] = useState([
    {
      name: "jacob",
      gender: "m",
      phone: "917828743"
    },
    {
      name: "sharon",
      gender: "f",
      phone: "834850721"
    },
    {
      name: "emma",
      gender: "f",
      phone: "834850720"
    },
    {
      name: "george",
      gender: "m",
      phone: "807572253"
    },
    {
      name: "olivia",
      gender: "f",
      phone: "124838643"
    },
    {
      name: "harry",
      gender: "m",
      phone: "865221163"
    },
    {
      name: "isabella",
      gender: "f",
      phone: "852045252"
    },
    {
      name: "jack",
      gender: "m",
      phone: "601957425"
    },
    {
      name: "sophia",
      gender: "f",
      phone: "379046891"
    },
    {
      name: "charlie",
      gender: "m",
      phone: "549746038"
    },
    {
      name: "emily",
      gender: "f",
      phone: "396412235"
    },
    {
      name: "mila",
      gender: "f",
      phone: "228394724"
    }
  ]);
  // const [employee, setEmployee] = useState({});
  // console.log(match.params.phone);

  let singleEmployee = people.filter(x => {
    return x.phone === match.params.phone;
  });
  // console.log(singleEmployee[0].name);

  const checkGender = gender => {
    // console.log(gender);
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
  return (
    <div className="about">
      <Nav title="About" />
      <div className="about-profile">
        <img src={checkGender(singleEmployee[0].gender)} alt="" />
        <h3>{capitalize(singleEmployee[0].name)}</h3>
      </div>
      <div className="about-icons">
        <img src={phonelogo} alt="" width="50px" />
        <img src={messagelogo} alt="" width="50px" />
        <img src={menulogo} alt="" width="50px" />
      </div>
      <div className="about-numbers">{singleEmployee[0].phone}</div>
    </div>
  );
}
