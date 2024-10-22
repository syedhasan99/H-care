import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Badge, Avatar } from "@mui/material";
import './CommonStyles.css';

const AvailabilityTracker = () => {
  const [availabilityData, setAvailabilityData] = useState([
    {
      staffName: "Dr. Emily Brown",
      role: "Pediatrician",
      status: "In Consultation",
      department: "Pediatrics",
      nextAvailability: "Available at 3:00 PM",
      nextShift: "Tomorrow, 6:00 AM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Dr. John Smith",
      role: "Cardiologist",
      status: "In Surgery",
      department: "Cardiology",
      nextAvailability: "Available at 5:00 PM",
      nextShift: "Tomorrow, 8:00 AM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Nurse Sarah Wilson",
      role: "Head Nurse",
      status: "Available",
      department: "ICU",
      nextAvailability: "Currently Available",
      nextShift: "Today, 4:00 PM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Dr. Michael Lee",
      role: "Orthopedic Surgeon",
      status: "On Call",
      department: "Orthopedics",
      nextAvailability: "Available at 6:00 PM",
      nextShift: "Today, 10:00 AM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Paramedic James Hall",
      role: "Emergency Paramedic",
      status: "In Ambulance",
      department: "Emergency",
      nextAvailability: "Available at 2:00 PM",
      nextShift: "Tomorrow, 6:00 AM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Dr. Anna Davis",
      role: "Dermatologist",
      status: "Available",
      department: "Dermatology",
      nextAvailability: "Currently Available",
      nextShift: "Today, 12:00 PM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Nurse Linda Thompson",
      role: "Pediatric Nurse",
      status: "On Break",
      department: "Pediatrics",
      nextAvailability: "Available at 1:00 PM",
      nextShift: "Today, 8:00 AM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Paramedic Robert Martinez",
      role: "On Call Paramedic",
      status: "Available",
      department: "Emergency",
      nextAvailability: "Currently Available",
      nextShift: "Today, 6:00 PM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Dr. Olivia Taylor",
      role: "Oncologist",
      status: "In Surgery",
      department: "Oncology",
      nextAvailability: "Available at 4:00 PM",
      nextShift: "Tomorrow, 8:00 AM",
      image: "https://example.com/doctor-image2.jpg",
    },
    {
      staffName: "Dr. Kevin Patel",
      role: "Neurologist",
      status: "Available",
      department: "Neurology",
      nextAvailability: "Currently Available",
      nextShift: "Today, 3:00 PM",
      image: "https://example.com/doctor-image2.jpg",
    },
  ]);
  

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "green";
      case "In Surgery":
        return "red";
      case "On Call":
        return "#ffe033";
      case "In Consultation":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <div className="availability-tracker">
      <Typography variant="h4" className="tracker-title">Staff Availability Tracker</Typography>
      
      <div className="filters">
        <TextField variant="outlined" placeholder="Search staff by name..." fullWidth />
        {/* Add other filters here if needed */}
      </div>

      <div className="staff-cards">
        {availabilityData.map((staff, index) => (
          <Card key={index} className="staff-card" variant="outlined">
            <CardContent>
              <div className="avai-card-header">
                <Avatar src={staff.image} alt={staff.staffName} className="staff-avatar" />
                <div>
                  <Typography variant="h6">{staff.staffName}</Typography>
                  <Typography variant="subtitle1">{staff.role}</Typography>
                </div>
                <Badge 
                  className="status-badge" 
                  style={{ backgroundColor: getStatusColor(staff.status) }}
                  variant="dot"
                >
                  {staff.status}
                </Badge>
              </div>
              
              <Typography variant="body2">
                <strong>Department:</strong> {staff.department}
              </Typography>
              <Typography variant="body2">
                <strong>Next Availability:</strong> {staff.nextAvailability}
              </Typography>
              <Typography variant="body2">
                <strong>Next Shift:</strong> {staff.nextShift}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityTracker;



