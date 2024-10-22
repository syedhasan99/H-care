import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import './CommonStyles.css';

const Discharge = () => {
  let formRef = useRef();
  const [dischargeData, setDischargeData] = useState({
    patientId: "Auto-generated",
    patientName: "",
    dateOfAdmission: "",
    dateOfDischarge: "",
    attendingPhysician: "",
    diagnosis: "",
    treatmentProvided: "",
    medicationPrescribed: "",
    followUpInstructions: "",
    nextAppointment: "",
    additionalNotes: "",
    dischargeStatus: "",
  });

  const handleChange = (e) => {
    setDischargeData({ ...dischargeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Discharge Summary:", dischargeData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="discharge-summary">
        <div className="card">
          <div className="card-header">
            <h2>Discharge Summary</h2>
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
              label="Patient Name"
              variant="outlined"
              name="patientName"
              value={dischargeData.patientName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Date of Admission"
              variant="outlined"
              name="dateOfAdmission"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dischargeData.dateOfAdmission}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Date of Discharge"
              variant="outlined"
              name="dateOfDischarge"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dischargeData.dateOfDischarge}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Attending Physician"
              variant="outlined"
              name="attendingPhysician"
              value={dischargeData.attendingPhysician}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Diagnosis"
              variant="outlined"
              name="diagnosis"
              value={dischargeData.diagnosis}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              required
            />
            <TextField
              label="Treatment Provided"
              variant="outlined"
              name="treatmentProvided"
              value={dischargeData.treatmentProvided}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              required
            />
            <TextField
              label="Medication Prescribed"
              variant="outlined"
              name="medicationPrescribed"
              value={dischargeData.medicationPrescribed}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              required
            />
            <TextField
              label="Follow-Up Instructions"
              variant="outlined"
              name="followUpInstructions"
              value={dischargeData.followUpInstructions}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              required
            />
            <TextField
              label="Next Appointment"
              variant="outlined"
              name="nextAppointment"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dischargeData.nextAppointment}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Additional Notes"
              variant="outlined"
              name="additionalNotes"
              value={dischargeData.additionalNotes}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
            <FormControl fullWidth>
              <InputLabel>Discharge Status</InputLabel>
              <Select
                name="dischargeStatus"
                label="Discharge Status"
                value={dischargeData.dischargeStatus}
                onChange={handleChange}
                required
              >
                <MenuItem value="Recovered">Recovered</MenuItem>
                <MenuItem value="Referred">Referred</MenuItem>
                <MenuItem value="Transferred">Transferred</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" disableElevation type="submit">
              Save Discharge Summary
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Discharge;
