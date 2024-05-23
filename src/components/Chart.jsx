import React from "react";
import { Bar } from "react-chartjs-2";

export function Chart({ chartdata, options }) {
  return (
    <div className="">
      <Bar data={chartdata} options={options} />
    </div>
  );
}
