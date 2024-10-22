import React from "react";
import "./Sidebar.css";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  FaCheckSquare,
  FaHeartbeat,
  FaPlus,
  FaPlusSquare,
} from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import {
  FaBrain,
  FaClipboardList,
  FaClock,
  FaUserDoctor,
} from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { CgPill } from "react-icons/cg";
import { MdAddAlert } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { GiMedicalThermometer, GiPieChart } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Button from "@mui/material/Button";

const Sidebar = () => {
  const [openSection, setOpenSection] = React.useState("quick-access");

  const handleClick = (para) => {
    setOpenSection(para);
  };
  return (
    <div className="sidebar">
      <img src={logo} alt="LOGO" />
      <Link to="registerPatient" className="btn-link">
        <Button variant="contained" disableElevation>
          Register Patient
          <FaPlus />
        </Button>
      </Link>
      <List
        sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        {/* Quick Access SEction */}
        <ListItemButton
          onClick={() => {
            let section =
              openSection == "quick-access" ? "none" : "quick-access";
            handleClick(section);
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Quick Access" />
          {openSection == "quick-access" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={openSection == "quick-access"}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <Link to="overview">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GiPieChart />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </Link>
            <Link to="todayAppointments">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaRegCalendarAlt />
                </ListItemIcon>
                <ListItemText primary="Today's Appointments" />
              </ListItemButton>
            </Link>
            <Link to="activePatient">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PiUsersFill />
                </ListItemIcon>
                <ListItemText primary="Active Patients" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Patient Section */}
        <ListItemButton
          onClick={() => {
            let section = openSection == "patients" ? "none" : "patients";
            handleClick(section);
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Patients" />
          {openSection == "patients" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSection == "patients"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="patientsList">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaClipboardList />
                </ListItemIcon>
                <ListItemText primary="Patient List" />
              </ListItemButton>
            </Link>
            <Link to="admitPatient">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaPlus />
                </ListItemIcon>
                <ListItemText primary="Admit New Patient" />
              </ListItemButton>
            </Link>
            <Link to="discharge">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <IoDocument />
                </ListItemIcon>
                <ListItemText primary="Discharge Summary" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Doctors Section */}
        <ListItemButton
          onClick={() => {
            let section = openSection == "doctors" ? "none" : "doctors";
            handleClick(section);
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Doctors" />
          {openSection == "doctors" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSection == "doctors"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="doctorsList">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaUserDoctor />
                </ListItemIcon>
                <ListItemText primary="Doctor List" />
              </ListItemButton>
            </Link>
            <Link to="shiftSchedules">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaClock />
                </ListItemIcon>
                <ListItemText primary="Shift Schedules" />
              </ListItemButton>
            </Link>
            <Link to="availabilityTracker">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaCheckSquare />
                </ListItemIcon>
                <ListItemText primary="Availability Tracker" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Departments Section */}
        <ListItemButton
          onClick={() => {
            let section = openSection == "departments" ? "none" : "departments";
            handleClick(section);
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
          {openSection == "departments" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={openSection == "departments"}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <Link to="cardiology">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaHeartbeat />
                </ListItemIcon>
                <ListItemText primary="Cardiology" />
              </ListItemButton>
            </Link>
            <Link to="neurology">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FaBrain />
                </ListItemIcon>
                <ListItemText primary="Neurology" />
              </ListItemButton>
            </Link>
            <Link to="surgery">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GiMedicalThermometer />
                </ListItemIcon>
                <ListItemText primary="Surgery" />
              </ListItemButton>
            </Link>
            <Link to="pharmacy">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CgPill />
                </ListItemIcon>
                <ListItemText primary="Pharmacy Inventory" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        {/* Announcements Section */}
        <ListItemButton
          onClick={() => {
            let section =
              openSection == "announcements" ? "none" : "announcements";
            handleClick(section);
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="System Announcements" />
          {openSection == "announcements" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={openSection == "announcements"}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <Link to="emergencyAlerts">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdAddAlert />
                </ListItemIcon>
                <ListItemText primary="Emergency Alerts" />
              </ListItemButton>
            </Link>
            <Link to="reportsAnalytics">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <BsFileBarGraphFill />
                </ListItemIcon>
                <ListItemText primary="Reports & Analytics" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
