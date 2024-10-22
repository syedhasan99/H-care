import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Badge, Button } from '@mui/material';
import './CommonStyles.css'

const appointments = [
  {
    time: '08:00 AM',
    patientName: 'John Doe',
    patientID: 'P12345',
    doctor: 'Dr. Smith',
    specialty: 'Cardiology',
    status: 'Confirmed',
    reason: 'Routine Checkup',
    priority: 'Normal'
  },
  {
    time: '09:30 AM',
    patientName: 'Jane Smith',
    patientID: 'P67890',
    doctor: 'Dr. Williams',
    specialty: 'Dermatology',
    status: 'In\u00a0Progress',
    reason: 'Follow-up Visit',
    priority: 'High'
  },
  {
    time: '10:00 AM',
    patientName: 'Michael Johnson',
    patientID: 'P54321',
    doctor: 'Dr. Anderson',
    specialty: 'Neurology',
    status: 'Completed',
    reason: 'Consultation',
    priority: 'Normal'
  },
  {
    time: '11:30 AM',
    patientName: 'Emily Davis',
    patientID: 'P98765',
    doctor: 'Dr. Brown',
    specialty: 'Oncology',
    status: 'Canceled',
    reason: 'Chemotherapy',
    priority: 'High'
  },
  {
    time: '01:00 PM',
    patientName: 'James Wilson',
    patientID: 'P23456',
    doctor: 'Dr. Clark',
    specialty: 'Orthopedics',
    status: 'Confirmed',
    reason: 'Fracture Follow-up',
    priority: 'Normal'
  },
  {
    time: '02:30 PM',
    patientName: 'Olivia Miller',
    patientID: 'P67891',
    doctor: 'Dr. Thomas',
    specialty: 'Pediatrics',
    status: 'In\u00a0Progress',
    reason: 'Vaccination',
    priority: 'Normal'
  },
  {
    time: '04:00 PM',
    patientName: 'Liam Harris',
    patientID: 'P43210',
    doctor: 'Dr. Martinez',
    specialty: 'ENT',
    status: 'Completed',
    reason: 'Hearing Test',
    priority: 'Normal'
  },
  {
    time: '05:30 PM',
    patientName: 'Sophia Johnson',
    patientID: 'P32109',
    doctor: 'Dr. Robinson',
    specialty: 'Cardiology',
    status: 'Confirmed',
    reason: 'Heart Monitoring',
    priority: 'High'
  },
];


const getStatusBadgeColor = (status) => {
  switch (status) {
    case 'Confirmed':
      return 'primary';
    case 'In\u00a0Progress':
      return 'warning';
    case 'Completed':
      return 'success';
    case 'Canceled':
      return 'error';
    default:
      return 'default';
  }
};

const getPriorityColor = (priority) => {
  return priority === 'High' ? 'error' : 'default';
};

const TodaysAppointments = () => {
  return (
    <Card sx={{ borderRadius: '15px', margin: '20px 0', backgroundColor: '#f7f7f9' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Today's Appointments
        </Typography>

        <List>
          {appointments.map((appointment, index) => (
            <ListItem key={index} divider sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText
                sx={{flex: 2}}
                primary={`${appointment.time} - ${appointment.patientName}`}
                secondary={`Doctor: ${appointment.doctor} (${appointment.specialty})`}
              />
              <div className='middle-appoint' style={{flex: 0.8}}>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                  Reason: {appointment.reason}
                </Typography>
                <div className="badges">
                  <Badge badgeContent={appointment.status} color={getStatusBadgeColor(appointment.status)} />
                  <Badge badgeContent={appointment.priority} color={getPriorityColor(appointment.priority)} sx={{ marginLeft: '0px' }} />
                </div>
              </div>
              <div style={{ marginLeft: '20px', flex: 1 }}>
                <Button variant="outlined" size="small" color="primary" sx={{ marginRight: '5px' }}>
                  Reschedule
                </Button>
                <Button variant="outlined" size="small" color="secondary">
                  Cancel
                </Button>
              </div>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TodaysAppointments;
