import React, { useState } from "react";
import "./Nav.css";
import Dashboard from "./Dashboard.js";
const Nav = () => {
  const [val, setVal] = useState(0);
  const [heading, setHeading] = useState("MOISTURE SENSOR");
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
              setVal(74.38);
            }}
          >
            Moisture Content
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("QUANTITY OF WHEAT");
              setVal(806);
            }}
          >
            Quantity of Wheat
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("TEMPERATURE");
              setVal(55);
            }}
          >
            Temperature of Silo
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("CO₂ CONTENT");
              setVal(2.876);
            }}
          >
            CO₂ Content
          </li>
          <li
            className="nav_content"
            onClick={() => {
              setHeading("RELATIVE HUMIDITY");
              setVal("67.36");
            }}
          >
            Relative Humidity
          </li>
          <li className="nav_content">About</li>
        </ul>
      </div>
      <Dashboard title={heading} value={val} />
    </div>
  );
};

export default Nav;
