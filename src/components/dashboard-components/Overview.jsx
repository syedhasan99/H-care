import React from "react";
import "./Overview.css";
import { FaAmbulance, FaBed, FaHeartbeat, FaTransgender, FaUserCircle } from "react-icons/fa";
import { FaBrain, FaHouse, FaPeopleGroup, FaScissors, FaWallet } from "react-icons/fa6";
import { HiDotsHorizontal, HiUsers } from "react-icons/hi";
import OutpatientsInpatients from "../Graphs/OutpatientsInpatients";
import PatientsPie from "../Graphs/PatientsPie";
import GenderPie from "../Graphs/GenderPie";
import TimeAdmittedGraph from "../Graphs/TimeAdmitted";

const Overview = () => {
  return (
    <div className="overview">
      <div className="top">
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaBed />
          </div>
          <div className="right">
            <h2>3,256</h2>
            <h3>Total Patients</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />

          <div className="icon">
            <FaPeopleGroup />
          </div>
          <div className="right">
            <h2>394</h2>
            <h3>Available Staff</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaWallet />
          </div>
          <div className="right">
            <h2>$2,536</h2>
            <h3>Avg Treats. Costs</h3>
          </div>
        </div>
        <div className="small-card">
          <HiDotsHorizontal className="dots" />
          <div className="icon">
            <FaAmbulance />
          </div>
          <div className="right">
            <h2>38</h2>
            <h3>Available Cars</h3>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="card">
          <div className="card-header">
            <h2>Outpatients vs. Inpatients Trend</h2>
          </div>
          <div className="card-body graphs">
            <div className="left-graph">
              <OutpatientsInpatients />
            </div>
            <div className="right-graph">
              <HiUsers className="icon" />
              <PatientsPie />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Pateints by Gender</h2>
          </div>
          <div className="card-body graphs">
            <div className="right-graph">
              <FaTransgender className="icon" />
              <GenderPie />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="card">
          <div className="card-header">
            <h2>Time Admitted</h2>
          </div>
          <div className="card-body">
            <TimeAdmittedGraph />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Patients By Division</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <FaHouse />
              <h3>DIVISION</h3>
              <p>PT.</p>
            </div>
            <div className="row">
              <FaHeartbeat />
              <h3>Cardiology</h3>
              <p>247</p>
            </div>
            <div className="row">
              <FaBrain />
              <h3>Neurology</h3>
              <p>164</p>
            </div>
            <div className="row">
              <FaScissors />
              <h3>Surgery</h3>
              <p>86</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;



