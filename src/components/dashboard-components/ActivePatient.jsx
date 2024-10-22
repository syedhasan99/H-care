import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ActivePatients = () => {
  const activePatients = [
    {
      patientID: "P15670",
      name: "John Doe",
      status: "In Treatment",
      room: "Ward 3",
      admittedDuration: "2 Days",
      doctor: "Dr. Smith",
      comments: "Recovering with optimism",
    },
    {
      patientID: "P98676",
      name: "Jane Smith",
      status: "Under Observation",
      room: "ICU",
      admittedDuration: "4 Days",
      doctor: "Dr. Adams",
      comments: "Displaying positive signs",
    },
    {
      patientID: "P32159",
      name: "Michael Brown",
      status: "Critical Condition",
      room: "ICU",
      admittedDuration: "1 Day",
      doctor: "Dr. Lopez",
      comments: "Showing resilience and strength",
    },
    {
      patientID: "P56987",
      name: "Emily Johnson",
      status: "Discharged Soon",
      room: "Ward 5",
      admittedDuration: "6 Days",
      doctor: "Dr. Harris",
      comments: "Hopeful and determined",
    },
    {
      patientID: "P10234",
      name: "Christopher Lee",
      status: "In Recovery",
      room: "Ward 2",
      admittedDuration: "3 Days",
      doctor: "Dr. Patel",
      comments: "Making steady progress",
    },
    {
      patientID: "P87451",
      name: "Sophia Martinez",
      status: "In Treatment",
      room: "Ward 1",
      admittedDuration: "5 Days",
      doctor: "Dr. Nguyen",
      comments: "Grateful for care",
    },
    {
      patientID: "P65972",
      name: "David Wilson",
      status: "Under Observation",
      room: "ICU",
      admittedDuration: "2 Days",
      doctor: "Dr. Thompson",
      comments: "Responding well to treatment",
    },
    {
      patientID: "P37459",
      name: "Isabella Anderson",
      status: "Critical Condition",
      room: "ICU",
      admittedDuration: "1 Day",
      doctor: "Dr. Rodriguez",
      comments: "In good spirits",
    },
    {
      patientID: "P12834",
      name: "Daniel Robinson",
      status: "Discharged Soon",
      room: "Ward 6",
      admittedDuration: "7 Days",
      doctor: "Dr. Carter",
      comments: "Feeling optimistic and hopeful",
    },
    {
      patientID: "P45902",
      name: "Olivia White",
      status: "In Treatment",
      room: "Ward 2",
      admittedDuration: "1 Day",
      doctor: "Dr. Evans",
      comments: "Displaying positive sign",
    },
  ];

  return (
    <section className="active-patients">
      <h2 style={{fontWeight: 500, margin: '10px 0', fontSize: 25}}>Active Patients</h2>
      <p style={{marginBottom: 10}}>Total Active Patients: {activePatients.length}</p>

      <div className="patient-cards">
        {activePatients.map((patient, index) => (
          <CardContent
            key={index}
            sx={{ backgroundColor: "#fff", width: "24%" }}
          >
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              PatientID: {patient.patientID}
            </Typography>
            <Typography variant="h5" component="div">
              {patient.name}
            </Typography>
            <Typography
              sx={{
                color:
                  patient.status == "Critical Condition"
                    ? "error.main"
                    : "text.secondary",
                mb: 1.5,
              }}
            >
              {patient.status}
            </Typography>
            <Typography variant="body2">
              Room: {patient.room}
              <br />
              Admitted Duration: {patient.admittedDuration}
              <br />
              Doctor: {patient.doctor}
              <br />
              <br />"{patient.comments}"
            </Typography>
            <Button size="small">Learn More</Button>
          </CardContent>
        ))}
      </div>
    </section>
  );
};

export default ActivePatients;
