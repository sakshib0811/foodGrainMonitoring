import React from "react";
// import Barchart from "./Barchart";
import "./Dashboard.css";
// import Barchart from "./B

const Dashboard = ({ title, value, signi, img }) => {
  // const data = {
  //   // type: "bar",
  //   labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
  //   datasets: [
  //     {
  //       label: "previous 5 days data",
  //       data: [...userdata],
  //     },
  //   ],
  // };
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
          <h3>CURRENT DATA : {value}</h3>
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
              width: "95%",
              marginTop: "30px",
              marginLeft: "-10px",
            }}
          />
          {/* <Barchart chartData={userdata} /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
