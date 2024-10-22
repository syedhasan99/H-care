import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import "./CommonStyles.css";

const AdmitNewPatient = () => {
  let formRef = useRef();
  const [patientData, setPatientData] = useState({
    patientId: "Auto-generated",
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    admissionDate: "",
    roomAssignment: "",
    department: "",
    attendingPhysician: "",
    insuranceProvider: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Patient Admitted:", patientData);
  };

  const handleClear = () => {
    setPatientData({
      patientId: "Auto-generated",
      fullName: "",
      dob: "",
      gender: "",
      contactNumber: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      admissionDate: "",
      roomAssignment: "",
      department: "",
      attendingPhysician: "",
      insuranceProvider: "",
      additionalNotes: "",
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="admit-new-patient">
        <div className="card">
          <div className="card-header">
            <h2>Admit New Patient</h2>
          </div>
          <div className="card-body">
            <TextField
              label="Patient ID"
              variant="outlined"
              name="patientId"
              value="Auto-generated"
              fullWidth
              disabled
            />
            <TextField
              label="Full Name"
              variant="outlined"
              name="fullName"
              value={patientData.fullName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Date of Birth"
              variant="outlined"
              name="dob"
              type="date"
              slotProps={{
                inputLabel: { shrink: true },
              }}
              value={patientData.dob}
              onChange={handleChange}
              fullWidth
              required
            />
            <FormControl fullWidth>
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                name="gender"
                aria-labelledby="gender"
                value={patientData.gender}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
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
            <TextField
              label="Emergency Contact Name"
              variant="outlined"
              name="emergencyContactName"
              value={patientData.emergencyContactName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Emergency Contact Number"
              variant="outlined"
              name="emergencyContactNumber"
              value={patientData.emergencyContactNumber}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Admission Date"
              variant="outlined"
              name="admissionDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={patientData.admissionDate}
              onChange={handleChange}
              fullWidth
              required
            />
            <FormControl fullWidth>
              <InputLabel id="roomAssignment">Room Assignment</InputLabel>
              <Select
                labelId="roomAssignment"
                name="roomAssignment"
                value={patientData.roomAssignment}
                label="Room Assignment"
                onChange={handleChange}
                required
              >
                <MenuItem value="Ward 1">Ward 1</MenuItem>
                <MenuItem value="Ward 2">Ward 2</MenuItem>
                <MenuItem value="ICU">ICU</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="department">Department</InputLabel>
              <Select
                name="department"
                labelId="department"
                value={patientData.department}
                label="Department"
                onChange={handleChange}
                required
              >
                <MenuItem value="Cardiology">Cardiology</MenuItem>
                <MenuItem value="Neurology">Neurology</MenuItem>
                <MenuItem value="Orthopedics">Orthopedics</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Attending Physician"
              variant="outlined"
              name="attendingPhysician"
              value={patientData.attendingPhysician}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Insurance Provider"
              variant="outlined"
              name="insuranceProvider"
              value={patientData.insuranceProvider}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Additional Notes"
              variant="outlined"
              name="additionalNotes"
              value={patientData.additionalNotes}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
            <div className="buttons">
              <Button
                variant="contained"
                disableElevation
                type="submit"
              >
                Admit Patient
              </Button>
              <Button
                variant="outlined"
                onClick={handleClear}
                style={{ marginLeft: "10px" }}
              >
                Clear Form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdmitNewPatient;
