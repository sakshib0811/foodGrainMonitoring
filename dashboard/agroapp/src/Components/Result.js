import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";
import all from "./images/all.png";
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
              <span className="significance">HUMIDITY:</span> 73% <br />
              <span className="significance">MOISTURE:</span> 60% <br />
              <span className="significance">TEMPERATURE:</span> 29°C <br />
              <span className="significance">CO2 GAS LEVELS:</span> 2.89% <br />
              <span className="significance">pH VALUE:</span> 5.89 <br />
            </div>
            <div className="con">
              <h3 className="con_hr">CONCLUSION:</h3>
              <div className="sig">
                <span className="significance">Microbial Activity: </span>{" "}
                Normal Bacterial growth
                <br />
                <span className="significance">Grading: </span>Household
                <br />
                <span className="significance">Shelf Life: </span> 5 to 11
                months
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
      </div>
    </div>
  );
}

export default Result;
