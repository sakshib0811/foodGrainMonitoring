import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";
import all from "./images/result3.png";
function Result() {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2 className="title_main">FOOD MONITORING APP</h2>
          </Link>
        </div>
      </nav>
      <div className="result">
        <p
          style={{
            fontSize: "2.4rem",
            color: "#096962",
            marginLeft: "-5%",
          }}
        >
          RESULTS
        </p>
        <div className="data">
          <div className="data_display data1">
            <h3>SPECIFICATIONS:</h3>
            <div className="sig">
              <span className="significance">RELATIVE HUMIDITY:</span> 66.8%{" "}
              <br />
              <span className="significance">MOISTURE:</span> 58.6% <br />
              <span className="significance">TEMPERATURE:</span> 24°C <br />
              <span className="significance">CO2 GAS LEVELS:</span> 2.44% <br />
              <span className="significance">pH VALUE:</span> 5.92 <br />
            </div>
            <div className="con">
              <h3 className="con_hr">CONCLUSION:</h3>
              <div className="sig">
                <span className="significance">Microbial Activity: </span>{" "}
                Normal Chemical Degradation.
                <br />
                <span className="significance">Grading: </span>Household.
                <br />
                <span className="significance">Shelf Life: </span> 5 to 11
                months.
                <br />
              </div>
            </div>
          </div>

          {/* 2nd box graph representation data */}

          <div className="graph_display data2">
            <h3>GRAPHICAL REPRESENTATION</h3>
            <img
              src={all}
              alt="graph"
              style={{
                width: "100%",
                marginTop: "30px",
                marginLeft: "-15px",
              }}
            />
          </div>
        </div>
        <div className="ml">
          <h1>Prediction of relative humidity for next 5 days</h1>
          <ul style={{ listStyle: "none" }}>
            <li>2022-08-16 00:00:00: 68.26452659821744</li>
            <li>2022-08-17 00:00:00: 66.9822417850277</li>
            <li>2022-08-18 00:00:00: 90.40564183071167</li>
            <li>2022-08-19 00:00:00: 87.38390234534772</li>
            <li>2022-08-20 00:00:00: 67.92913863133856</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;
