import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PatientsPie() {
  return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Outpatients", color: "#39d89e" },
              { id: 1, value: 25, label: "Inpatients", color: "#752bdf" },
              // { id: 2, value: 20, label: 'series C' },
            ],
            innerRadius: 100,
            cornerRadius: 10,
          },
        ]}
        width={350}
        height={300}
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
