import React, { useState } from "react";
import "./Nav.css";
import Dashboard from "./Dashboard.js";
import { Link } from "react-router-dom";
import m from "./images/moisture.png";
import q from "./images/q1.png";
import t from "./images/temp.png";
import c from "./images/co2.png";
import h from "./images/r1.png";
const Nav = () => {
  const [val, setVal] = useState("58.6%");
  const [heading, setHeading] = useState("MOISTURE SENSOR");
  const [signif, setSignif] = useState(
    "The Moisture Content present in the Silo will help us to determine the growth of microbes and pH of the silo. The pH of the silo will help us to grade and classify the grains according to its use.  The growth of microbes will further help us to take precautionary measures to prevent its growth "
  );
  const [graph, setGraph] = useState(m);

  return (
    <div className="main">
      <div className="navbar">
        <div
          className="para"
          style={{
            backgroundColor: "#098ea0",
            marginTop: "0px",
            height: "45px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "0px",
              height: "60px",
              paddingTop: "15px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            FOOD MONITORING APP
          </p>
        </div>

        <ul
          style={{ listStyle: "none", lineHeight: "90px", paddingLeft: "0px" }}
        >
          <li
            className="nav_content"
            onClick={() => {
              setHeading("MOISTURE ANALYSIS");
              setVal("58.6%");
              setGraph(m); //graph color : #ebc9f0
              // console.log(moisture);
              setSignif(
                " The Moisture Content present in the Silo will help us to determine the growth of microbes and pH of the silo. The pH of the silo will help us to grade and classify the grains according to its use.  The growth of microbes will further help us to take precautionary measures to prevent its growth "
              );
            }}
          >
            Moisture Content
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("QUANTITY OF WHEAT");
              setVal("12.3cm");
              setGraph(q);
              // console.log(quantity);
              setSignif(
                "In case there is illegal activities taking place in terms of corruption, the change in the level of wheat grains in the silo which will alert the owner. The owner once informed can take necessary actions to prevent such illegal practices."
              );
            }}
          >
            Quantity of Wheat
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("TEMPERATURE");
              setVal("24°C");
              setGraph(t);
              // console.log(temp);
              setSignif(
                " The measurement of temperature will help to determine the shelf life of the wheat grains. The growth of microbes are also dependent on the amount of heat and temperature they are exposed to."
              );
            }}
          >
            Temperature of Silo
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("CO₂ CONTENT");
              setVal("2.44%");
              setGraph(c);
              // console.log(co2);
              setSignif(
                " To get the information about the amount of CO2 present in the silo. It will help us to determine information about the microbial activity. The increased level of CO2 increases growth of microbes in a closed space."
              );
            }}
          >
            CO₂ Content
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("RELATIVE HUMIDITY");
              setVal("66.8%");
              setGraph(h);
              // console.log(humidity);
              setSignif(
                "Relative Humidity of a closed place is inversely proportional to its shelf life. It will help us to determine the growth rate of microbes for next five days."
              );
            }}
          >
            Relative Humidity
          </li>
          <Link to="result" style={{ textDecoration: "none", color: "white" }}>
            <li className="nav_content">Results</li>
          </Link>
          <Link to="about" style={{ textDecoration: "none", color: "white" }}>
            <li className="nav_content">About</li>
          </Link>
        </ul>
      </div>
      <Dashboard
        title={heading}
        value={val}
        signi={signif}
        userdata={graph}
        img={graph}
      />
    </div>
  );
};

export default Nav;
