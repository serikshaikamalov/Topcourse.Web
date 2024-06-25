// import { Chart } from "chart.js";
import React, { useEffect, useRef } from "react";

const PieChart = () => {
  useEffect(() => {
    const ctx = document.getElementById("pieChart");

    new window.Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Group1", "Group2", "Group3", "Group4", "Group5", "Group5  "],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div style={{width: "max-content"}}>
      <canvas id="pieChart"></canvas>
    </div>
  );
};

export default PieChart;
