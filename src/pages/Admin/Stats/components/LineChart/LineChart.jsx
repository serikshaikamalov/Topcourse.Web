// import { Chart } from "chart.js";
import React, { useEffect, useRef } from "react";

const LineChart = () => {
  useEffect(() => {
    const labels = ["Jan", "Feb", "March", "Apr"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const ctx = document.getElementById("lineChart");
    new window.Chart(ctx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
        },
      },
    });
  }, []);

  return (
    <div style={{width: '100%'}}>
      <canvas id="lineChart"></canvas>
    </div>
  );
};

export default LineChart;
