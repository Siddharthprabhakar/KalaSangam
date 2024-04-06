import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "./stats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export function SellerStats() {
  const [monthlySales, setMonthlySales] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    data: [100, 200, 150, 300, 250, 400],
  });

  const [salesDistribution, setSalesDistribution] = useState({
    labels: ["Category A", "Category B", "Category C"],
    data: [30, 40, 30],
  });

  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    if (
      monthlySales &&
      monthlySales.labels &&
      monthlySales.data &&
      barChartRef.current
    ) {
      const ctx = barChartRef.current.getContext("2d");
      if (barChartRef.current && ctx) {
        if (barChartRef.current.chart) {
          barChartRef.current.chart.destroy();
        }
        barChartRef.current.chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: monthlySales.labels,
            datasets: [
              {
                label: "Monthly Sales",
                data: monthlySales.data,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [monthlySales]);

  useEffect(() => {
    if (
      salesDistribution &&
      salesDistribution.labels &&
      salesDistribution.data &&
      pieChartRef.current
    ) {
      const ctx = pieChartRef.current.getContext("2d");
      if (pieChartRef.current && ctx) {
        if (pieChartRef.current.chart) {
          pieChartRef.current.chart.destroy();
        }
        pieChartRef.current.chart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: salesDistribution.labels,
            datasets: [
              {
                label: "Sales Distribution",
                data: salesDistribution.data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [salesDistribution]);

  const handleDownloadClick = () => {
    // Code to handle download data
    console.log('Downloading data...');
  };

  return (
    <div>
      <h2>Montonly Stats</h2>
      <div className="download-btn-container">
        <button className="download-btn" onClick={handleDownloadClick}>
        <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
      <div className="stats-container">
        <div className="bar-graph-container">
          <h3>Monthly Sales</h3>
          <canvas ref={barChartRef}></canvas>
        </div>
        <div className="pie-chart-container">
          <h3>Sales Distribution</h3>
          <canvas ref={pieChartRef}></canvas>
        </div>
      </div>
    </div>
  );
}
