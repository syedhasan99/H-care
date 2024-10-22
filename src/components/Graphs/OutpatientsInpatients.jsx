import * as React from "react";
import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from '@mui/x-charts/ChartsAxis';


export default function OutpatientsInpatients() {
  const colors = ['red', 'green'];
  return (
    <BarChart
    sx={(theme) => ({
      [`.${axisClasses.root}`]: {
        [`.${axisClasses.tickLabel}`]: {
          fill: '#999cac',
        },
      },
    })}
      series={[
        { data: [1200, 1624, 700, 900, 1350, 1100], color: "#39d89e" }, // Green bar color for outpatients
        { data: [2700, 3105, 4200, 2750, 2900, 4100], color: "#752bdf" }, // Purple bar color for inpatients
        // { data: [15, 25, 30, 50, 56, 78] },
        // { data: [60, 50, 15, 25, 56, 78] },
        // { data: [60, 50, 15, 25, 56, 78] },
        // { data: [60, 50, 15, 25, 56, 78] },
      ]}
      height={290}
      xAxis={[
        {
          data: [
            "Oct 2024",
            "Nov 2024",
            "Dec 2024",
            "Jan 2025",
            "Feb 2025",
            "Mar 2025",
          ],
          scaleType: "band",
          categoryGapRatio: 0.7,
          barGapRatio: 0.3
        },
      ]}
      borderRadius={15}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      slotProps={{
        legend: {
          labelStyle: {
            fontSize: 20,
            fill: '#999cac',
          },
          // direction: 'row',
          // position: { vertical: 'bottom', horizontal: 'middle' },
          // padding: 0,
        },
      }}
    />
  );
}
