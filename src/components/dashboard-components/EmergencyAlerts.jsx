import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { AiFillAlert } from "react-icons/ai";
import { FaGear, FaPrescriptionBottle } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";

const EmergencyAlerts = () => {
  const [value, setValue] = React.useState("1");
  let alertsData = [
    {
      id: 1,
      type: "Emergency Alert",
      description: "Incoming emergency patient: John Doe",
      timestamp: "2024-10-25T10:15:00Z",
      status: "Unacknowledged",
      action: "View Details",
    },
    {
      id: 2,
      type: "Pharmacy Shortage",
      description: "Medication XYZ running low, only 2 units left in stock.",
      timestamp: "2024-10-25T09:50:00Z",
      status: "Unacknowledged",
      action: "Reorder Medication",
    },
    {
      id: 3,
      type: "Maintenance Alert",
      description:
        "HVAC system maintenance scheduled for tonight from 11 PM to 1 AM.",
      timestamp: "2024-10-25T08:30:00Z",
      status: "Acknowledged",
      action: "View Schedule",
    },
    {
      id: 4,
      type: "Information Alert",
      description: "New COVID-19 guidelines issued by the health department.",
      timestamp: "2024-10-25T07:00:00Z",
      status: "Unacknowledged",
      action: "Read Guidelines",
    },
    {
      id: 5,
      type: "Emergency Alert",
      description:
        "Critical patient transfer: Sarah Smith, requires immediate attention.",
      timestamp: "2024-10-25T11:05:00Z",
      status: "Unacknowledged",
      action: "Prepare for Arrival",
    },
    {
      id: 6,
      type: "Pharmacy Shortage",
      description: "Insulin shortage, expected delivery delayed by 3 days.",
      timestamp: "2024-10-25T09:00:00Z",
      status: "Unacknowledged",
      action: "Contact Supplier",
    },
    {
      id: 7,
      type: "Maintenance Alert",
      description: "Elevator maintenance scheduled for 10 AM to 12 PM.",
      timestamp: "2024-10-24T15:45:00Z",
      status: "Acknowledged",
      action: "View Schedule",
    },
    {
      id: 8,
      type: "Information Alert",
      description:
        "Staff meeting scheduled for tomorrow at 2 PM in Conference Room A.",
      timestamp: "2024-10-25T06:30:00Z",
      status: "Acknowledged",
      action: "Add to Calendar",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 style={{ fontWeight: 500, margin: "10px 0", fontSize: 25 }}>
        Emergency Alerts
      </h1>
      <p style={{ marginBottom: 10 }}>
        The Emergency Alerts section serves as a real-time notification system
        for urgent situations, ensuring that medical staff can quickly respond
        to critical incidents.
      </p>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="scrollable"
            >
              <Tab label="All Alerts" value="1" />
              <Tab label="Emergency Alerts" value="2" />
              <Tab label="Pharmacy Shortages" value="3" />
              <Tab label="Maintenance Alerts" value="4" />
              <Tab label="Information Alerts" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <AlertCards alerts={alertsData} />
          </TabPanel>
          <TabPanel value="2">
            <AlertCards
              alerts={alertsData.filter(
                (alert) => alert.type === "Emergency Alert"
              )}
            />
          </TabPanel>
          <TabPanel value="3">
            <AlertCards
              alerts={alertsData.filter(
                (alert) => alert.type === "Pharmacy Shortage"
              )}
            />
          </TabPanel>
          <TabPanel value="4">
            <AlertCards
              alerts={alertsData.filter(
                (alert) => alert.type === "Maintenance Alert"
              )}
            />
          </TabPanel>
          <TabPanel value="5">
            <AlertCards
              alerts={alertsData.filter(
                (alert) => alert.type === "Information Alert"
              )}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default EmergencyAlerts;

const AlertCards = ({ alerts }) => {

  const AlertIcon = ( type ) => {
    switch (type) {
      case "Emergency Alert":
        return <AiFillAlert style={{marginRight: 7 ,color: "red" }} />;
      case "Pharmacy Shortage":
        return <FaPrescriptionBottle style={{marginRight: 7 ,color: "gold" }} />;
      case "Maintenance Alert":
        return <FaGear style={{marginRight: 7 ,color: "indigo" }} />;
      case "Information Alert":
        return <GoAlertFill style={{marginRight: 7 ,color: "darkorange" }} />;
      default:
        return null;
    }
  }

  if (!alerts.length) {
    return <Typography>No alerts found.</Typography>;
  }
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {alerts.map((alert, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                {AlertIcon(alert.type)}
                {alert.type}
              </Typography>
              <Typography variant="h6" component="div">
                {alert.type}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                {alert.description}
              </Typography>
              <Typography variant="body2">
                {alert.status}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{alert.action}</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
