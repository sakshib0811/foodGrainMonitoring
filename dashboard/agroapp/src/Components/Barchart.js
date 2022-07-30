import React from "react";
import { Bar } from "react-chartjs-2";
function Barchart({ chartData }) {
  return <Bar data={chartData} />;
}

export default Barchart;
