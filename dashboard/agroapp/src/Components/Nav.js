import React from "react";
import "./Nav.css";
import Dashboard from "./Dashboard.js";
const Nav = () => {
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
          <li className="nav_content">Moisture Content</li>
          <li className="nav_content">Quantity of Wheat</li>
          <li className="nav_content">Temperature of Silo</li>
          <li className="nav_content">CO₂ Content</li>
          <li className="nav_content">Relative Humidity</li>
          <li className="nav_content">About</li>
        </ul>
      </div>
      <Dashboard />
    </div>
  );
};

export default Nav;
