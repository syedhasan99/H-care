import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import "./CommonStyles.css";
import { FaUser } from "react-icons/fa6";

const shiftSchedule = [
  {
    shift: "Morning",
    startTime: "6:00 AM",
    endTime: "2:00 PM",
    doctors: [
      { name: "Dr. John Smith", specialization: "Cardiologist" },
      { name: "Dr. Emily Brown", specialization: "Pediatrician" },
      { name: "Dr. Sarah Johnson", specialization: "Neurologist" },
    ],
    paramedics: [
      { name: "Nurse Alice", role: "Head Nurse" },
      { name: "Nurse Bob", role: "Assistant Nurse" },
      { name: "Paramedic Mark", role: "Technician" },
      { name: "Paramedic David", role: "Technician" },
    ],
  },
  {
    shift: "Afternoon",
    startTime: "2:00 PM",
    endTime: "10:00 PM",
    doctors: [
      { name: "Dr. Michael Davis", specialization: "Orthopedic Surgeon" },
      { name: "Dr. Olivia Williams", specialization: "Gynecologist" },
      { name: "Dr. Daniel Martinez", specialization: "General Surgeon" },
    ],
    paramedics: [
      { name: "Nurse Karen", role: "Head Nurse" },
      { name: "Nurse Peter", role: "Assistant Nurse" },
      { name: "Paramedic Jane", role: "Technician" },
      { name: "Paramedic Alex", role: "Technician" },
      { name: "Paramedic Chris", role: "Technician" },
    ],
  },
  {
    shift: "Evening",
    startTime: "10:00 PM",
    endTime: "6:00 AM",
    doctors: [
      { name: "Dr. William Johnson", specialization: "Emergency Medicine" },
      { name: "Dr. Sophia Lee", specialization: "Pulmonologist" },
    ],
    paramedics: [
      { name: "Nurse Susan", role: "Head Nurse" },
      { name: "Nurse James", role: "Assistant Nurse" },
      { name: "Paramedic Carol", role: "Technician" },
      { name: "Paramedic Kevin", role: "Technician" },
      { name: "Paramedic Ryan", role: "Technician" },
    ],
  },
];

const ShiftSchedule = () => {
  return (
    <section className="shift-schedule">
      <h2 style={{ fontWeight: 500, margin: "10px 0", fontSize: 25 }}>
        Shift Schedules
      </h2>
      {shiftSchedule.map((shift, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-header fheader">
              <h3>{shift.shift}</h3>
              <p>
                ({shift.startTime} - {shift.endTime})
              </p>
            </div>
            <div className="card-body">
              <Typography variant="h5" component="div">
                Doctors
              </Typography>
              <List dense>
                {shift.doctors.map((doctor) => (
                  <ListItem key={doctor.name}>
                    <ListItemAvatar>
                      <Avatar>
                        <FaUser />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={doctor.name}
                      secondary={doctor.specialization}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h5" component="div">
                Paramedics
              </Typography>
              <List dense>
                {shift.paramedics.map((paramedic) => (
                  <ListItem key={paramedic.name}>
                    <ListItemAvatar>
                      <Avatar>
                        <FaUser />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={paramedic.name}
                      secondary={paramedic.role}
                    />
                  </ListItem>
                ))}
              </List>
              {/* <ul>
                {shift.doctors.map((doctor) => (
                  <li key={doctor.name}>{doctor.name} - {doctor.specialization}</li>
                ))}
              </ul> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ShiftSchedule;
