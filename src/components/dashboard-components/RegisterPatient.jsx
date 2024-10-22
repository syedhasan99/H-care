import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import './CommonStyles.css'

const RegisterPatient = () => {
  let formRef = useRef();
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    emergencyContact: "",
    physician: "",
    bloodGroup: "",
    allergies: "",
    conditions: "",
    department: "",
    roomNumber: "",
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Patient Registered:", patientData);
  };

  return (
    <form ref={formRef}>
    <div className="register-patient">
      <div className="card">
        <div className="card-header">
          <h2>Personal Information</h2>
        </div>
        <div className="card-body">
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={patientData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={patientData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Date Of Birth"
            variant="outlined"
            name="dob"
            type="date"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            value={patientData.dob}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              value={patientData.gender}
              label="Gender"
              name="gender"
              onChange={handleChange}
              required
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Contact Number"
            variant="outlined"
            name="contactNumber"
            value={patientData.contactNumber}
            onChange={handleChange}
            fullWidth
            required
          />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Medical Information</h2>
        </div>
        <div className="card-body">
          <TextField
            label="Emergency Contact"
            variant="outlined"
            name="emergencyContact"
            value={patientData.emergencyContact}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Primary Physician"
            variant="outlined"
            name="physician"
            value={patientData.physician}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel id="bloodGroup">Blood Group</InputLabel>
            <Select
              labelId="bloodGroup"
              value={patientData.bloodGroup}
              label="Blood Group"
              name="bloodGroup"
              onChange={handleChange}
              required
            >
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Allergies"
            variant="outlined"
            name="allergies"
            value={patientData.allergies}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />
          <TextField
            label="Pre Existing Conditions"
            variant="outlined"
            name="conditions"
            value={patientData.conditions}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </div>
      </div>
      <Button variant="contained" disableElevation type="submit" onClick={handleSubmit} >
        Register
      </Button>
    </div>
    </form>
  );
};

export default RegisterPatient;
