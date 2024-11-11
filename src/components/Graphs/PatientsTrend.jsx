import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Button from "@mui/material/Button";

export default function PatientsTrend() {
  // Sample data for 1D trend
  const [xAxisData, setXAxisData] = React.useState([1, 2, 3, 5, 8, 10]);
  const [data, setData] = React.useState([2, 5.5, 2, 8.5, 1.5, 5]);

  // Function to change the time frame of the data
  const changeTimeFrame = (timeFrame) => {
    // Implement logic to fetch and update the data based on the selected time frame
    // For example, fetch data from a server based on the provided time frame
    // Update the data variable and re-render the LineChart component
  };
  return (
    <div>
      <Button
        variant="text"
        onClick={() => {
          setXAxisData([1, 2, 3, 5, 8, 10]);
          setData([2, 5.5, 2, 8.5, 1.5, 5]);
        }}
      >
        1D
      </Button>
      <Button
        variant="text"
        onClick={() => {
          setXAxisData([1, 2, 3, 5, 8, 10, 11, 15, 20]);
          setData([2, 5.5, 2, 8.5, 1.5, 5, 3, 7, 10]);
        }}
      >
        5D
      </Button>
      <Button
        variant="text"
        onClick={() => {
          setXAxisData([1, 2, 3, 5, 8, 10, 11, 15, 20, 25, 30]);
          setData([2, 5.5, 2, 8.5, 1.5, 5, 3, 7, 10, 4, 6]);
        }}
      >
        1M
      </Button>
      <Button
        variant="text"
        onClick={() => {
          setXAxisData([1, 2, 3, 5, 8, 10, 11, 15, 20, 25, 30, 35, 40]);
          setData([2, 5.5, 2, 8.5, 1.5, 5, 3, 7, 10, 4, 6, 8, 10]);
        }}
      >
        6M
      </Button>
      <Button
        variant="text"
        onClick={() => {
          setXAxisData([1, 2, 3, 5, 8, 10, 11, 15, 20, 25, 30, 35, 40, 45, 50]);
          setData([2, 5.5, 2, 8.5, 1.5, 5, 3, 7, 10, 4, 6, 8, 10, 12, 14]);
        }}
      >
        1Y
      </Button>
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={[
          {
            data: data,
            showMark: false,
            color: "#752bdf",
            area: true,
            label: 'Logged Patients',
          },
        ]}
        width={500}
        height={300}
      />
      <input type="number" />
    </div>
  );
}
