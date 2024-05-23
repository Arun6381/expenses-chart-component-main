import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import Data from "../data.json";
import { Header } from "./components/Header";
import { Selection } from "./components/Selection";
import { Footer } from "./Footer.jsx";

export default function App() {
  const days = Data.map((data) => data.day);
  const amount = Data.map((data) => data.amount);
  const data = {
    labels: days,
    datasets: [
      {
        label: "$",
        data: amount,
        backgroundColor: ["#eb755d"],
        hoverBackgroundColor: ["#ff9b87"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-orange-100 w-[100vw] h-[100vh]">
      <Header />
      <Selection chartdata={data} options={options} />
      <Footer chartdata={data} />
    </div>
  );
}
