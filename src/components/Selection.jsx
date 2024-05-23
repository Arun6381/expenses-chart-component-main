import React from "react";
import { Chart } from "./Chart";

export function Selection({ chartdata, options }) {
  const total = chartdata.datasets[0].data.reduce(
    (sum, value) => sum + value,
    0
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[20px]">
        <div className="w-[400px] h-auto bg-white rounded-2xl p-4">
          <p className="font-bold text-lg mb-4">Spending - Last 7 Days</p>
          <Chart chartdata={chartdata} options={options} />
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="text-sm">Total this week:</p>
              <span className="font-bold text-lg">${total}</span>
            </div>
            <p className="text-green-500 mt-2">
              +2.4%
              <br />
              <span className="text-gray-500 text-sm">from last week</span>
            </p>
          </div>
        </div>
        {/* <div className="w-[400px] h-auto bg-white rounded-2xl p-4">
          <Chart chartdata={chartdata} options={options} />
          <p>{total}</p>
        </div> */}
      </div>
    </>
  );
}
