import React, { useState } from "react";
import "./Nav.css";
import Dashboard from "./Dashboard.js";
import { Link } from "react-router-dom";
const Nav = () => {
  const [val, setVal] = useState(0);
  const [heading, setHeading] = useState("MOISTURE SENSOR");
  const [signif, setSignif] = useState(
    "The Moisture Content present in the Silo will help us to determine the growth of microbes and pH of the silo. The pH of the silo will help us to grade and classify the grains according to its use.  The growth of microbes will further help us to take precautionary measures to prevent its growth "
  );
  const [unit1, setunit1] = useState("%");
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
              setVal(17.9);
              setunit1("%");
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
              setVal(12.3);
              setunit1("cm");
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
              setVal(42);
              setunit1("°C");
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
              setVal(6.42);
              setunit1("%");
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
              setVal("14.8");
              setunit1("%");
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
      <Dashboard title={heading} value={val} signi={signif} unit={unit1} />
    </div>
  );
};

export default Nav;
