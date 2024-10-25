import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './Dashboard.css'
import { Route, Routes } from 'react-router-dom'
import RegisterPatient from './dashboard-components/RegisterPatient'
import TodayAppointment from './dashboard-components/TodayAppointment'
import ActivePatient from './dashboard-components/ActivePatient'
import PatientsList from './dashboard-components/PatientsList'
import AdmitPatient from './dashboard-components/AdmitPatient'
import Discharge from './dashboard-components/Discharge'
import DoctorsList from './dashboard-components/DoctorsList'
import ShiftSchedule from './dashboard-components/ShiftSchedule'
import AvailabilityTracker from './dashboard-components/AvailabilityTracker'
import Surgery from './dashboard-components/Surgery'
import Pharmacy from './dashboard-components/Pharmacy'
import EmergencyAlerts from './dashboard-components/EmergencyAlerts'
import ReportsAnalytics from './dashboard-components/ReportsAnalytics'
import Overview from './dashboard-components/Overview'
import CommonDepartment from './dashboard-components/CommonDepartment'
import departments from '../HospitalData/departments'

const Dashboard = () => {
  return (
    <div className='main-container'>
        <Sidebar />
        <div className="main-content">
            <Header />
            <div className='main-div' >
                <Routes>

                  <Route path='/registerPatient' element={<RegisterPatient />}></Route>
                  <Route path='/overview' element={<Overview />}></Route>
                  <Route path='/todayAppointments' element={<TodayAppointment />}></Route>
                  <Route path='/activePatient' element={<ActivePatient />}></Route> 

                  <Route path='/patientsList' element={<PatientsList />}></Route> 
                  <Route path='/admitPatient' element={<AdmitPatient />}></Route> 
                  <Route path='/discharge' element={<Discharge />}></Route> 

                  <Route path='/doctorsList' element={<DoctorsList />}></Route> 
                  <Route path='/shiftSchedules' element={<ShiftSchedule />}></Route> 
                  <Route path='/availabilityTracker' element={<AvailabilityTracker />}></Route> 

                  {departments.map((department) => (
                    <Route key={department.departmentId} path={`/${department.name.split(' ').join('').toLowerCase()}`} element={<CommonDepartment departmentId={department.departmentId} />}></Route>
                  ))}
                  {/* <Route path='/cardiology' element={<CommonDepartment />}></Route>  */}
                  {/* <Route path='/neurology' element={<Neurology />}></Route> */}
                  <Route path='/surgery' element={<Surgery />}></Route> 
                  <Route path='/pharmacy' element={<Pharmacy />}></Route> 

                  <Route path='/emergencyAlerts' element={<EmergencyAlerts />}></Route> 
                  <Route path='/reportsAnalytics' element={<ReportsAnalytics />}></Route> 

                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Dashboard