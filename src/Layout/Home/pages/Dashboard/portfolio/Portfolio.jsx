import React from "react";
import Chart from "react-apexcharts";
import "./Portfolio.scss";

export default function Portfolio() {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100, 80, 75, 89, 24, 44],
    },
  ];

  const options = {
    chart: {
      height: 500,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: [
        "jan",
        "feb",
        "march",
        "april",
        "may",
        "june",
        "july",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
    },
  };

  return (
    <div className="Portfolio">
      <Chart
        options={options}
        series={series}
        type="area"
        height={450}
        style={{ width: "100%" }}
      />
    </div>
  );
}
