import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Employee from "./components/Employee";
import Nav from "./components/Nav";
import "./App.css";

export default function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:phone" component={About} />
        </Switch>
      </div>
    </HashRouter>
  );
}

const Home = () => {
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
  const [temppeople, setTempPeople] = useState([]);
  // console.log(people);

  const SearchList = searchKey => {
    // console.log(searchKey.target);
    let value = searchKey.target.value;
    value = value.toLowerCase();
    // console.log(value);
    let filteredResult = people.filter(x => {
      return x.name.includes(value);
    });
    // console.log(filteredResult);
    setTempPeople(filteredResult);
  };

  const changeStyle = x => {
    if (temppeople.length > 0) {
      return !temppeople.includes(x);
    }
  };

  return (
    <div className="App">
      <Nav title="Employee List" backHidden="true" />
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          onKeyUp={SearchList}
        />
      </div>
      <div className="body">
        {people
          .sort((p1, p2) => p1.name.localeCompare(p2.name))
          .map(x => (
            <Link
              key={x.phone}
              to={`/about/${x.phone}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Employee
                name={x.name}
                gender={x.gender}
                phone={x.phone}
                isHidden={changeStyle(x)}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
