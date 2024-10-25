import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  CardMedia,
  CardActions,
  Grid,
} from "@mui/material";
import "./CommonStyles.css"; // Add your custom CSS styles here.
import { HiDotsHorizontal } from "react-icons/hi";
import { FaBed, FaPeopleGroup, FaStethoscope } from "react-icons/fa6";
import { FaAmbulance, FaRegCalendarAlt, FaWallet } from "react-icons/fa";
import doctors from "../../HospitalData/doctors";
import paramedicStaff from "../../HospitalData/paramedicStaff";
import machines from "../../HospitalData/machinesData";
import departments from "../../HospitalData/departments";



// const cardiologyEquipment = [
  //   { id: "E001", name: "EKG Machine", availability: "Available" },
  //   { id: "E002", name: "Cardiac Monitor", availability: "In Use" },
  //   { id: "E003", name: "Defibrillator", availability: "Available" },
  //   // Add more equipment...
  // ];
  
  
  const CommonDepartment = ({departmentId}) => {
    
    const department = departments.find((department) => department.departmentId === departmentId);

    const deptDoctors = doctors.filter((doctor) => doctor.department === department.name);
    const deptStaff = paramedicStaff.filter((staff) => staff.department.includes(department.name));
    const deptEquipment = machines.filter((machine) => machine.department === department.name);
  
  return (
    <div className="department-container">
      <div>

      <h2 style={{ fontWeight: 500, margin: "10px 0", fontSize: 25 }}>
        {department.name} Department Overview
      </h2>
      <Typography variant="p">{department.description}</Typography>
      </div>
      <div className="top">
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaBed />
          </div>
          <div className="right">
            <h2>247</h2>
            <h3>Total Patients</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />

          <div className="icon">
            <FaPeopleGroup />
          </div>
          <div className="right">
            <h2>{department.totalDoctors + department.totalStaff}</h2>
            <h3>Available Staff</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaRegCalendarAlt />
          </div>
          <div className="right">
            <h2>50</h2>
            <h3>Appointments Today</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaStethoscope />
          </div>
          <div className="right">
            <h2>{department.machineCount}</h2>
            <h3>Available Equipments</h3>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="card">
        <div className="card-header">
          <h2>Available Doctors</h2>
        </div>
        <div className="card-body">
          <div className="over">
            {deptDoctors.map((doctor) => {
              return (
                <Card key={doctor.doctorId}>
                  <CardMedia
                    component="img"
                    alt={doctor.name}
                    height="200"
                    image={doctor.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {doctor.specialization} - Cardiology
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Experience:</strong> {doctor.experience} years
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                   <strong>Availability:</strong> {doctor.availability}
                 </Typography> */}
                    <Typography variant="body2" color="textSecondary">
                      <strong>Contact:</strong> {doctor.contact}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                   <strong>Consultation Fee:</strong> {doctor.consultationFee}
                 </Typography> */}
                    {/* <Typography variant="body2" color="textSecondary">
                   <strong>Patients Assigned:</strong> {doctor.patientsAssigned}
                 </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Profile</Button>
                    <Button size="small">Assign Patient</Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Available Staff</h2>
        </div>
        <div className="card-body">
          <div className="over">
            {deptStaff.map((staff) => {
              return (
                <Card key={staff.staffId}>
                  {/* <CardMedia
                component="img"
                alt={staff.name}
                height="200"
                image={staff.image}
              /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {staff.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {staff.role} - Cardiology
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                   <strong>Experience:</strong> {staff.experience} years
                 </Typography> */}
                    {/* <Typography variant="body2" color="textSecondary">
                   <strong>Availability:</strong> {staff.availability}
                 </Typography> */}
                    <Typography variant="body2" color="textSecondary">
                      <strong>Contact:</strong> {staff.contact}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary">
                   <strong>Consultation Fee:</strong> {staff.consultationFee}
                 </Typography> */}
                    {/* <Typography variant="body2" color="textSecondary">
                   <strong>Patients Assigned:</strong> {staff.patientsAssigned}
                 </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Profile</Button>
                    <Button size="small">Assign Patient</Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Typography variant="h6" className="section-header">Doctors & Staff</Typography>
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
      </Grid> */}

      {/* Equipment Section */}
      <Typography variant="h6" className="section-header">
        Equipment Availability
      </Typography>
      <Grid container spacing={2}>
        {deptEquipment.map((equipment) => (
          <Grid item xs={12} md={6} lg={4} key={equipment.machineId}>
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

export default CommonDepartment;
