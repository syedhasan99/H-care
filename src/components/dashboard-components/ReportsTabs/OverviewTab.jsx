import React from "react";
import { HiDotsHorizontal, HiUsers } from "react-icons/hi";
import {
  FaAmbulance,
  FaBed,
} from "react-icons/fa";
import {
  FaPeopleGroup,
  FaWallet,
} from "react-icons/fa6";
import { MdAddAlert, MdBed } from "react-icons/md";
import '../CommonStyles.css'
import PatientsFlow from "../../Graphs/PateintsFlow";
import patientFlowInDpts from "../../../HospitalData/patientsFlow";
import GenderPie from "../../Graphs/GenderPie";
import CommonPieChart from "../../Graphs/CommonPieChart";

const OverviewTab = () => {
  let genderChartData = {
    labels: ["Male", "Female"],
    data: [25, 35],
    chartName: "Gender Breakdown",
    bgColors: ["#752bdf", "#39d89e"]
  }
  let ageChartData = {
    labels: ["0-18", "19-35", "36-50", "51-65", "66+"],
    data: [30, 40, 35, 25, 10],
    chartName: "Age Distribution",
    bgColors: ["#752bdf", "#39d89e", "#41b6ff", "#ff9f43", "#ffcc00"]
  }
  let commonConditonData = {
    labels: ["Diabetes", "Hypertension", "Chronic Kidney Disease", "Cancer", "Asthma"],
    data: [10, 15, 20, 25, 15],
    chartName: "Common Conditions",
    bgColors: ["#752bdf", "#39d89e", "#41b6ff", "#ff9f43", "#ffcc00"]
  }
  return (
    <div className="overview">
      <h2 style={{ fontWeight: 500, margin: "10px 0 0 0", fontSize: 22 }}>
        Top Metrics Today
      </h2>
      <div className="top">
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaBed />
          </div>
          <div className="right">
            <h2>356</h2>
            <h3>Total Patients</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />

          <div className="icon">
            <MdBed />
          </div>
          <div className="right">
            <h2>43%</h2>
            <h3>Available Beds</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaWallet />
          </div>
          <div className="right">
            <h2>$20,690</h2>
            <h3>Today's Revenue</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <MdAddAlert />
          </div>
          <div className="right">
            <h2>8</h2>
            <h3>Emergency Visits</h3>
          </div>
        </div>
      </div>
      <div className="card">
          <div className="card-header">
            <h2>Patient Flow Trends across Departments <span style={{fontSize: 16, fontWeight: "normal"}}>(By Last week)</span></h2>
          </div>
          <div className="card-body carousel-layout">
            {patientFlowInDpts.map(dept => {
              return (
                  <PatientsFlow key={dept.departmentId} dept={dept} />
              );
            })}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Patient Demographics Snapshot</h2>
          </div>
          <div className="card-body" style={{flexDirection: 'row'}}>
            <CommonPieChart chartDataRec={ageChartData} />
            <CommonPieChart chartDataRec={genderChartData} />
            <CommonPieChart chartDataRec={commonConditonData} />
          </div>
        </div>
    </div>
  );
};

export default OverviewTab;
