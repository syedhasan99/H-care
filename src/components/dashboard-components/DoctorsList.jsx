import React, { useState } from "react";
import "./CommonStyles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import doctors from "../../HospitalData/doctors";

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const doctorsData = doctors;


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="doctor-list">
      <Typography variant="h4" gutterBottom>
        Doctor List
      </Typography>

      <TextField
        label="Search Doctor"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        // fullWidth
        sx={{ marginBottom: 2 }}
        className="search-field"
      />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {doctors
          .filter(
            (doc) =>
              doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              doc.specialization
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
          .map((doctor, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <Card>
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
                    {doctor.specialization} - {doctor.department}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                     <strong>Experience:</strong> {doctor.experience} years
                   </Typography>
                   <Typography variant="body2" color="textSecondary">
                     <strong>Availability:</strong> {doctor.availability}
                   </Typography>
                   <Typography variant="body2" color="textSecondary">
                     <strong>Contact:</strong> {doctor.contact}
                   </Typography>
                   <Typography variant="body2" color="textSecondary">
                     <strong>Consultation Fee:</strong> {doctor.consultationFee}
                   </Typography>
                   <Typography variant="body2" color="textSecondary">
                     <strong>Patients Assigned:</strong> {doctor.patientsAssigned}
                   </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Profile</Button>
                  <Button size="small">Assign Patient</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default DoctorList;
