import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OverviewTab from "./ReportsTabs/OverviewTab";
import DepartmentalReports from "./ReportsTabs/DepartmentalReports";
import StaffAnalytics from "./ReportsTabs/StaffAnalytics";

export default function ReportsAnalytics() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 style={{ fontWeight: 500, margin: "10px 0", fontSize: 25 }}>
        Reports & Analytics
      </h1>
      <p style={{ marginBottom: 10 }}>
        The Reports & Analytics section provides a comprehensive overview of
        patient data, medical records, and reporting metrics. This will help
        healthcare providers make informed decisions and improve patient
        outcomes.
      </p> 
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="scrollable"
            >
              <Tab label="Overview" value="1" />
              <Tab label="Departmental Reports" value="2" />
              <Tab label="Staff Analysis" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <OverviewTab />
          </TabPanel>
          <TabPanel value="2">
            <DepartmentalReports />
          </TabPanel>
          <TabPanel value="3">
            <StaffAnalytics />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
