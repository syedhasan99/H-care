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

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState([
    {
      doctorId: "D001",
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      department: "Cardiology",
      experience: 10,
      contact: "123-456-7890",
      availability: "Full-time",
      patientsAssigned: 12,
      consultationFee: "$100",
      image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    },
    {
      doctorId: "D002",
      name: "Dr. Emily Brown",
      specialization: "Pediatrician",
      department: "Pediatrics",
      experience: 8,
      contact: "987-654-3210",
      availability: "Part-time",
      patientsAssigned: 5,
      consultationFee: "$80",
      image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=826&t=st=1729445443~exp=1729446043~hmac=490b809127e7d875fa6e5f5568df1542f344c9a5e5b82cc1ed1f677632d5c2f6",
    },
    {
      doctorId: "D003",
      name: "Dr. William Johnson",
      specialization: "Neurologist",
      department: "Neurology",
      experience: 15,
      contact: "345-123-9876",
      availability: "Full-time",
      patientsAssigned: 20,
      consultationFee: "$120",
      image: "https://img.freepik.com/free-photo/cheerful-male-doctor-white-gown-portrait_53876-108640.jpg?t=st=1729445836~exp=1729449436~hmac=78b78ef674d0ec304c20e66aa7b5b5f05365c6edb5ee9296f20ca81e7574f653&w=826",
    },
    {
      doctorId: "D004",
      name: "Dr. Olivia Martinez",
      specialization: "Oncologist",
      department: "Oncology",
      experience: 12,
      contact: "456-789-0123",
      availability: "Full-time",
      patientsAssigned: 9,
      consultationFee: "$150",
      image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=826&t=st=1729446024~exp=1729446624~hmac=28fade9d3125e5fa83ac31015cc5beebae3f495cd42302d746d6a5071b5568f7",
    },
    {
      doctorId: "D005",
      name: "Dr. Sophia Lee",
      specialization: "Dermatologist",
      department: "Dermatology",
      experience: 7,
      contact: "321-654-7890",
      availability: "Part-time",
      patientsAssigned: 6,
      consultationFee: "$90",
      image: "https://img.freepik.com/free-photo/portrait-asian-doctor-woman-cross-arms-standing-medical-uniform-stethoscope-smiling-camera-white-background_1258-83220.jpg?t=st=1729446197~exp=1729449797~hmac=8b06cc811b71b507b5316b30bf851e2dd1b3994b44c6d5d8c88f3a0a069cc6c3&w=826",
    },
    {
      doctorId: "D006",
      name: "Dr. David Nguyen",
      specialization: "Orthopedic Surgeon",
      department: "Orthopedics",
      experience: 20,
      contact: "789-456-1230",
      availability: "Full-time",
      patientsAssigned: 30,
      consultationFee: "$200",
      image: "https://img.freepik.com/premium-photo/man-white-coat-with-stethoscope-around-his-neck_917856-36520.jpg?w=826",
    },
    {
      doctorId: "D007",
      name: "Dr. Sarah Patel",
      specialization: "Gynecologist",
      department: "Gynecology",
      experience: 9,
      contact: "123-789-6540",
      availability: "Part-time",
      patientsAssigned: 11,
      consultationFee: "$110",
      image: "https://img.freepik.com/premium-photo/young-doctor-venezuelan-woman-isolated-blue-background-happy-smiling-cheerful_1187-184669.jpg?w=826",
    },
    {
      doctorId: "D008",
      name: "Dr. Michael Rivera",
      specialization: "Psychiatrist",
      department: "Psychiatry",
      experience: 13,
      contact: "321-789-4560",
      availability: "Full-time",
      patientsAssigned: 16,
      consultationFee: "$130",
      image: "https://img.freepik.com/premium-photo/young-doctor-is-smiling-while-wearing-his-lab-coat-stethoscope_967812-14171.jpg?w=826",
    },
    {
      doctorId: "D009",
      name: "Dr. James Thompson",
      specialization: "General Physician",
      department: "General Medicine",
      experience: 5,
      contact: "654-321-7890",
      availability: "Full-time",
      patientsAssigned: 7,
      consultationFee: "$70",
      image: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=826&t=st=1729446953~exp=1729447553~hmac=2dc6ab7c23227764430074dbaa0bbc65b9f7e905f69fcc94c1090dd2cbd6d50b",
    },
    {
      doctorId: "D010",
      name: "Dr. Laura Green",
      specialization: "Endocrinologist",
      department: "Endocrinology",
      experience: 14,
      contact: "987-123-4560",
      availability: "Part-time",
      patientsAssigned: 9,
      consultationFee: "$95",
      image: "https://img.freepik.com/premium-photo/young-asian-female-doctor-standing-blue-background_296537-5450.jpg?w=826",
    },
  ]);
  
  


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
            // <Grid item xs={12} sm={6} md={4} lg={3} key={doctor.doctorId}>
            //   <Card className="doctor-card" variant="outlined">
            //     <CardContent>
            //       <Typography variant="h6" component="div">
            //         {doctor.name}
            //       </Typography>
            //       <Typography variant="subtitle1" color="textSecondary">
            //         {doctor.specialization} - {doctor.department}
            //       </Typography>
            //       <Typography variant="body2" color="textSecondary">
            //         <strong>Experience:</strong> {doctor.experience} years
            //       </Typography>
            //       <Typography variant="body2" color="textSecondary">
            //         <strong>Availability:</strong> {doctor.availability}
            //       </Typography>
            //       <Typography variant="body2" color="textSecondary">
            //         <strong>Contact:</strong> {doctor.contact}
            //       </Typography>
            //       <Typography variant="body2" color="textSecondary">
            //         <strong>Consultation Fee:</strong> {doctor.consultationFee}
            //       </Typography>
            //       <Typography variant="body2" color="textSecondary">
            //         <strong>Patients Assigned:</strong> {doctor.patientsAssigned}
            //       </Typography>
            //     </CardContent>
            //     <Box display="flex" justifyContent="space-between" padding="16px">
            //       <Button variant="contained" color="primary">
            //         View Profile
            //       </Button>
            //       <Button variant="outlined" color="secondary">
            //         Assign Patient
            //       </Button>
            //     </Box>
            //   </Card>
            // </Grid>
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
