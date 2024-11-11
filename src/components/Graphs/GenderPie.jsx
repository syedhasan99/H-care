import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function GenderPie() {
  return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Female", color: "#fa8b4f" },
              { id: 1, value: 15, label: "Male", color: "#752bdf" },
              // { id: 2, value: 20, label: 'series C' },
            ],
            innerRadius: 100,
            cornerRadius: 10,
          },
        ]}
        width={300}
        height={250}
        margin={{ top: 20, bottom: 50, left: 20, right: 20 }}
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 18,
            },
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 0,
            itemGap: 15,
          },
        }}
      />
  );
}
