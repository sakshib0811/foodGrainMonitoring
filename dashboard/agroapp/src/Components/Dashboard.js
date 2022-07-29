import React from "react";
import "./Dashboard.css";
import img from "./images.png";
const Dashboard = ({ title, value, signi, unit }) => {
  return (
    <div className="dashboard">
      <p
        style={{
          fontSize: "2.4rem",
          color: "#096962",
          marginLeft: "-10%",
        }}
      >
        {title}
      </p>
      <div className="data">
        <div className="data_display">
          <h3>
            CURRENT DATA : {value}
            {unit}
          </h3>
          <div className="sig">
            <span className="significance">SIGNIFICANCE:</span> <br />
            <br /> {signi}
          </div>
        </div>
        <div className="graph_display">
          <h3>GRAPHICAL REPRESENTATION</h3>
          <img
            src={img}
            alt="graph"
            style={{
              width: "100%",
              marginTop: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
