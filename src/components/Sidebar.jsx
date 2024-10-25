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
import { PiBoneFill, PiUsersFill } from "react-icons/pi";
import {
  FaBabyCarriage,
  FaBrain,
  FaClipboardList,
  FaClock,
  FaUserDoctor,
} from "react-icons/fa6";
import { IoDocument, IoEar } from "react-icons/io5";
import { CgPill } from "react-icons/cg";
import { MdAddAlert, MdPregnantWoman } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { GiMedicalThermometer, GiMedicines, GiPieChart } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Button from "@mui/material/Button";
import { SiBentobox } from "react-icons/si";

const Sidebar = () => {
  const [openSection, setOpenSection] = React.useState(localStorage.getItem('openSection') || "quick-access");
  const [selectedTab, setSelectedTab] = React.useState(localStorage.getItem('selectedTab') || "overview");

  const handleTabClick = (para) => {
    setSelectedTab(para);
    localStorage.setItem('selectedTab', para);
  };

  const handleClick = (para) => {
    setOpenSection(para);
    localStorage.setItem('openSection', para);
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
            Service with Care
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
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("overview");
                }}
              >
                <ListItemIcon>
                  <GiPieChart
                    color={selectedTab == "overview" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Overview"
                  primaryTypographyProps={{
                    color: selectedTab == "overview" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
            <Link to="todayAppointments">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("todayAppointments");
                }}
              >
                <ListItemIcon>
                  <FaRegCalendarAlt
                    color={selectedTab === "todayAppointments" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Today's Appointments"
                  primaryTypographyProps={{
                    color: selectedTab === "todayAppointments" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
            <Link to="activePatient">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("activePatient");
                }}
              >
                <ListItemIcon>
                  <PiUsersFill
                    color={selectedTab === "activePatient" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Active Patients"
                  primaryTypographyProps={{
                    color: selectedTab === "activePatient" ? "primary" : "",
                  }}
                />
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
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("patientsList");
                }}
              >
                <ListItemIcon>
                  <FaClipboardList
                    color={selectedTab === "patientsList" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Patient List"
                  primaryTypographyProps={{
                    color: selectedTab === "patientsList" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
            <Link to="admitPatient">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("admitPatient");
                }}
              >
                <ListItemIcon>
                  <FaPlus
                    color={selectedTab === "admitPatient" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Admit New Patient"
                  primaryTypographyProps={{
                    color: selectedTab === "admitPatient" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
            <Link to="discharge">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("discharge");
                }}
              >
                <ListItemIcon>
                  <IoDocument
                    color={selectedTab === "discharge" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Discharge Summary"
                  primaryTypographyProps={{
                    color: selectedTab === "discharge" ? "primary" : "",
                  }}
                />
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
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("doctorsList");
                }}
              >
                <ListItemIcon>
                  <FaUserDoctor
                    color={selectedTab === "doctorsList" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Doctor List"
                  primaryTypographyProps={{
                    color: selectedTab === "doctorsList" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
            <Link to="shiftSchedules">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("shiftSchedules");
                }}
              >
                <ListItemIcon>
                  <FaClock
                    color={selectedTab === "shiftSchedules" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Shift Schedules"
                  primaryTypographyProps={{
                    color: selectedTab === "shiftSchedules" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
            <Link to="availabilityTracker">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  handleTabClick("availabilityTracker");
                }}
              >
                <ListItemIcon>
                  <FaCheckSquare
                    color={
                      selectedTab === "availabilityTracker" ? "#752bdf" : ""
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Availability Tracker"
                  primaryTypographyProps={{
                    color:
                      selectedTab === "availabilityTracker" ? "primary" : "",
                  }}
                />
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
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("cardiology")}
              >
                <ListItemIcon>
                  <FaHeartbeat
                    color={selectedTab === "cardiology" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Cardiology"
                  primaryTypographyProps={{
                    color: selectedTab === "cardiology" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="neurology">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("neurology")}
              >
                <ListItemIcon>
                  <FaBrain
                    color={selectedTab === "neurology" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Neurology"
                  primaryTypographyProps={{
                    color: selectedTab === "neurology" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="pediatrics">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("pediatrics")}
              >
                <ListItemIcon>
                  <FaBabyCarriage
                    color={selectedTab === "pediatrics" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Pediatrics"
                  primaryTypographyProps={{
                    color: selectedTab === "pediatrics" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="orthopedics">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("orthopedics")}
              >
                <ListItemIcon>
                  <PiBoneFill
                    color={selectedTab === "orthopedics" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Orthopedics"
                  primaryTypographyProps={{
                    color: selectedTab === "orthopedics" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="dermatology">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("dermatology")}
              >
                <ListItemIcon>
                  <SiBentobox
                    color={selectedTab === "dermatology" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Dermatology"
                  primaryTypographyProps={{
                    color: selectedTab === "dermatology" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="ent">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("ent")}
              >
                <ListItemIcon>
                  <IoEar color={selectedTab === "ent" ? "#752bdf" : ""} />
                </ListItemIcon>
                <ListItemText
                  primary="ENT"
                  primaryTypographyProps={{
                    color: selectedTab === "ent" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="gynecology">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("gynecology")}
              >
                <ListItemIcon>
                  <MdPregnantWoman
                    color={selectedTab === "gynecology" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Gynecology"
                  primaryTypographyProps={{
                    color: selectedTab === "gynecology" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="generalmedicine">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("generalmedicine")}
              >
                <ListItemIcon>
                  <GiMedicines
                    color={selectedTab === "generalmedicine" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="General Medicine"
                  primaryTypographyProps={{
                    color: selectedTab === "generalmedicine" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="surgery">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("surgery")}
              >
                <ListItemIcon>
                  <GiMedicalThermometer
                    color={selectedTab === "surgery" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Surgery"
                  primaryTypographyProps={{
                    color: selectedTab === "surgery" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>

            <Link to="pharmacy">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("pharmacy")}
              >
                <ListItemIcon>
                  <CgPill color={selectedTab === "pharmacy" ? "#752bdf" : ""} />
                </ListItemIcon>
                <ListItemText
                  primary="Pharmacy Inventory"
                  primaryTypographyProps={{
                    color: selectedTab === "pharmacy" ? "primary" : "",
                  }}
                />
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
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("emergencyAlerts")}
              >
                <ListItemIcon>
                  <MdAddAlert
                    color={selectedTab === "emergencyAlerts" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Emergency Alerts"
                  primaryTypographyProps={{
                    color: selectedTab === "emergencyAlerts" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
            <Link to="reportsAnalytics">
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleTabClick("reportsAnalytics")}
              >
                <ListItemIcon>
                  <BsFileBarGraphFill
                    color={selectedTab === "reportsAnalytics" ? "#752bdf" : ""}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Reports & Analytics"
                  primaryTypographyProps={{
                    color: selectedTab === "reportsAnalytics" ? "primary" : "",
                  }}
                />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
