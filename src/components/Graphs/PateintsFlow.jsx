import * as React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);
export default function PatientsFlow({ dept }) {
  const [chartData, setChartData] = React.useState({
    labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Patients ",
        data: dept.data,
        // backgroundColor: [
        //   "rgba(75,192,192,1)",
        //   "&quot;#ecf0f1",
        //   "#50AF95",
        //   "#f3ba2f",
        //   "#2a71d0",
        // ],
        borderColor: "#752bdf",
        borderWidth: 1,
        circular: false,
      },
    ],
  });
  return (
    <div style={{ width: "100%", flex: 1 }}>
      <h2>{dept.departmentName}</h2>
      {/* Add your chart code here */}
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Patients Inflow",
            },
            legend: {
              display: false,
            },
          },
          elements: {
            point: {
              pointStyle: false,
            },
            line: {
              tension: 0.2,
              borderWidth: 3,
              fill: false,
            },
          },
        }}
      />
    </div>
  );
}
