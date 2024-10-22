import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TimeAdmittedGraph() {
  return (
    <LineChart
      xAxis={[{ data: [6, 7, 7.5, 8, 8.8, 9.7, 10.6, 11.2, 12.2] }]}
      series={[
        {
          data: [40, 110, 80, 113, 68, 135, 60, 145, 115],
        },
      ]}
      width={500}
      height={300}
    />
  );
}