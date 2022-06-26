import React from "react";
import "./Dashboard.css";
import img from "./images.png";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <p
        style={{
          fontSize: "2.4rem",
          color: "#096962",
          marginLeft: "-45%",
        }}
      >
        MOISTURE ANALYSIS
      </p>
      <div className="data">
        <div className="data_display">
          <h3>CURRENT DATA : 30.087</h3>
          <div className="sig"> significance</div>
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
