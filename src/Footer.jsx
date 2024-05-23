import React from "react";

export function Footer({ chartdata }) {
  const mybalance = 921.48;
  const totalbalance = chartdata.datasets[0].data.reduce(
    (sum, value) => sum + value,
    0
  );
  const avabila = totalbalance + mybalance;
  return (
    <>
      <div className=" flex justify-start items-start p-10 text-3xl text-black">
        <p>
          My balance is <span className=" font-semibold">{avabila}</span>
        </p>
      </div>
    </>
  );
}
