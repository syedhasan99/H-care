import * as React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut, Line, Pie } from "react-chartjs-2";

Chart.register(CategoryScale);
export default function CommonPieChart({ chartDataRec }) {
  const [chartData, setChartData] = React.useState({
    labels: chartDataRec.labels,
    datasets: [
      {
        label: "Users Gained ",
        data: chartDataRec.data,
        backgroundColor: chartDataRec.bgColors,
        // borderColor: "#752bdf",
        // borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  });
  return (
    <div style={{ width: "100%", flex: 1 }}>
      <h2>{chartDataRec.chartName}</h2>
      {/* Add your chart code here */}
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          cutout: 110,
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
