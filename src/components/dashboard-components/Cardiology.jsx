import React from "react";
import { Card, CardContent, Typography, Grid, Avatar, Button } from "@mui/material";
import "./CommonStyles.css"; // Add your custom CSS styles here.

const cardiologyDoctors = [
  {
    id: "D001",
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    contact: "123-456-7890",
    experience: 10,
    image: "https://link-to-doctor1-image.jpg",
  },
  {
    id: "D002",
    name: "Dr. Emily Brown",
    specialization: "Cardiologist",
    contact: "987-654-3210",
    experience: 8,
    image: "https://link-to-doctor2-image.jpg",
  },
  // Add more doctors...
];

const cardiologyStaff = [
  {
    id: "S001",
    name: "Nurse Alex Johnson",
    role: "Nurse",
    contact: "234-567-8901",
  },
  {
    id: "S002",
    name: "Nurse Lisa Wilson",
    role: "Nurse",
    contact: "345-678-9012",
  },
  // Add more staff...
];

const cardiologyEquipment = [
  { id: "E001", name: "EKG Machine", availability: "Available" },
  { id: "E002", name: "Cardiac Monitor", availability: "In Use" },
  { id: "E003", name: "Defibrillator", availability: "Available" },
  // Add more equipment...
];

const Cardiology = () => {
  return (
    <div className="department-container">
      <Typography variant="h4" className="department-header">
        Cardiology Department Overview
      </Typography>

      {/* Overview Section */}
      <Card className="overview-card">
        <CardContent>
          <Typography variant="h6">Department Overview</Typography>
          <Typography>
            The Cardiology department specializes in the treatment of heart-related conditions. Our team is equipped with advanced
            equipment to ensure the best patient care.
          </Typography>
        </CardContent>
      </Card>

      {/* Doctors Section */}
      <Typography variant="h6" className="section-header">Doctors & Staff</Typography>
      <Grid container spacing={3}>
        {cardiologyDoctors.map((doctor) => (
          <Grid item xs={12} md={6} lg={4} key={doctor.id}>
            <Card className="doctor-card">
              <CardContent>
                <Avatar src={doctor.image} alt={doctor.name} className="doctor-avatar" />
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography>{doctor.specialization}</Typography>
                <Typography>Contact: {doctor.contact}</Typography>
                <Typography>Experience: {doctor.experience} years</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {cardiologyStaff.map((staff) => (
          <Grid item xs={12} md={6} lg={4} key={staff.id}>
            <Card className="staff-card">
              <CardContent>
                <Typography variant="h6">{staff.name}</Typography>
                <Typography>{staff.role}</Typography>
                <Typography>Contact: {staff.contact}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Equipment Section */}
      <Typography variant="h6" className="section-header">Equipment Availability</Typography>
      <Grid container spacing={2}>
        {cardiologyEquipment.map((equipment) => (
          <Grid item xs={12} md={6} lg={4} key={equipment.id}>
            <Card className="equipment-card">
              <CardContent>
                <Typography variant="h6">{equipment.name}</Typography>
                <Typography>Availability: {equipment.availability}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Performance Metrics Section */}
      <Card className="performance-card">
        <CardContent>
          <Typography variant="h6">Performance Metrics</Typography>
          <Typography>Patients Treated: 230</Typography>
          <Typography>Successful Surgeries: 56</Typography>
          <Typography>Emergency Cases Handled: 20</Typography>
        </CardContent>
      </Card>

      <Button variant="contained" className="view-reports-btn">
        View Detailed Reports
      </Button>
    </div>
  );
};

export default Cardiology;
