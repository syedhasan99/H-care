import React from "react";
import { FaStar, FaStethoscope, FaUser } from "react-icons/fa6";
import "../CommonStyles.css";
import doctors from "../../../HospitalData/doctors";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { IoAlertCircleOutline } from "react-icons/io5";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { DataGrid } from "@mui/x-data-grid";

const StaffAnalytics = () => {
  const calculateDoctorPoints = (doctor) => {
    const {
      patientsAssigned,
      procedureCompleted,
      attendance,
      emergencyCases,
      averageRating,
      experience,
    } = doctor;
    let points =
      patientsAssigned * 0.3 +
      procedureCompleted * 0.2 +
      (attendance * 0.15) / 100 +
      emergencyCases * 0.15 +
      averageRating * 2 * 0.1 +
      experience * 0.1;

    return points.toFixed(2);
  };
  let doctorsWithPoints = doctors.map((doctor) => {
    const points = calculateDoctorPoints(doctor);
    return { ...doctor, performancePoints: points };
  });
  let sortedDoctors = doctorsWithPoints.sort(
    (a, b) => b.performancePoints - a.performancePoints
  );
  let columns = [
    { field: "doctorId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "department", headerName: "Department", width: 130 },
    {
      field: "performancePoints",
      headerName: "Performance Points",
      width: 150,
    },
    { field: "patientsAssigned", headerName: "Patients Treated", width: 130 },
    {field: 'procedureCompleted', headerName: "Procedure Completed", width: 130},
    {field: 'attendance', headerName: 'Attendance', width: 130},
    { field: "averageRating", headerName: "Rating", width: 130 },
  ];
  let rows = sortedDoctors.map((doctor) => {
    return {
      id: doctor.doctorId,
      doctorId: doctor.doctorId,
      name: doctor.name,
      department: doctor.department,
      performancePoints: doctor.performancePoints,
      patientsAssigned: doctor.patientsAssigned,
      procedureCompleted: doctor.procedureCompleted,
      attendance: doctor.attendance,
      averageRating: doctor.averageRating,
    };
  });
  return (
    <div className="overview">
      <h2 style={{ fontWeight: 500, margin: "10px 0 0 0", fontSize: 22 }}>
        Employees Report
      </h2>
      <section>
        <h3 style={{ fontSize: 20, marginBottom: 10 }}>
          Top employees by activity
          <Tooltip
            title="Performance points are calculated based on patients treated, procedure completed, rating, experience and other means."
            placement="right"
          >
            <IconButton>
              <ErrorOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </h3>
        <div className="employees-cards">
          {doctorsWithPoints.slice(0, 5).map((doctor) => {
            return (
              <div className="employee-card" key={doctor.doctorId}>
                <div className="row">
                  <img src={doctor.image} alt="image" />
                  <h4>{doctor.name}</h4>
                </div>
                <div className="row">
                  Total Activity Points:<b>{doctor.performancePoints}</b>
                </div>
                <div className="row">
                  <FaUser />
                  <p>
                    <b>{doctor.patientsAssigned}</b> Patients Treated
                  </p>
                </div>
                <div className="row">
                  <FaStethoscope />
                  <p>
                    <b>{doctor.procedureCompleted}</b> Procedures Completed
                  </p>
                </div>
                <div className="row">
                  <FaStar />
                  <p>
                    <b>{doctor.averageRating}</b> Avearge Rating
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h3 style={{ fontSize: 20, marginBottom: 10 }}>
          Doctor Performance Report
        </h3>
        <Box sx={{ height: 400, width: "100%", overflowX: 'auto' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5, 10, 25, { value: -1, label: 'All' }]}
            onRowClick={(params) => {
              console.log("Row clicked", params.row.id);
            }}
            cellSelection
          />
        </Box>
      </section>
    </div>
  );
};

export default StaffAnalytics;
