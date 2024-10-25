const paramedicStaff = [
  {
    staffId: "P001",
    name: "Nurse Emily White",
    role: "Nurse",
    department: ["Cardiology", "General Medicine"], // Works across multiple departments
    experience: 5,
    contact: "123-987-4560",
    shift: "Morning",
    patientsAssigned: 10,
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-nurse-standing-hospital_1301-9467.jpg",
  },
  {
    staffId: "P002",
    name: "Nurse James Hall",
    role: "Nurse",
    department: ["Pediatrics"],
    experience: 7,
    contact: "234-567-8901",
    shift: "Afternoon",
    patientsAssigned: 8,
    image:
      "https://img.freepik.com/free-photo/portrait-confident-male-nurse_329181-11189.jpg",
  },
  {
    staffId: "P003",
    name: "Nurse Sarah Brown",
    role: "Nurse",
    department: ["Dermatology", "ENT"], // Works across multiple departments
    experience: 4,
    contact: "456-123-7890",
    shift: "Evening",
    patientsAssigned: 6,
    image:
      "https://img.freepik.com/free-photo/portrait-young-female-doctor-holding-clipboard-hospital_1301-9647.jpg",
  },
  {
    staffId: "P004",
    name: "Paramedic John Davis",
    role: "Paramedic",
    department: ["Orthopedics", "Neurology"],
    experience: 6,
    contact: "987-654-3210",
    shift: "Morning",
    patientsAssigned: 5,
    image:
      "https://img.freepik.com/premium-photo/portrait-young-male-paramedic-standing-outdoors-wearing-uniform_67155-1898.jpg",
  },
  {
    staffId: "P005",
    name: "Nurse Olivia Clark",
    role: "Nurse",
    department: ["Gynecology"],
    experience: 9,
    contact: "123-456-7890",
    shift: "Afternoon",
    patientsAssigned: 12,
    image:
      "https://img.freepik.com/free-photo/portrait-female-nurse-posing-with-stethoscope-hospital_1262-16167.jpg",
  },
  {
    staffId: "P006",
    name: "Nurse Michael Garcia",
    role: "Nurse",
    department: ["Neurology", "General Medicine"], // Works across multiple departments
    experience: 10,
    contact: "654-789-3210",
    shift: "Evening",
    patientsAssigned: 7,
    image: "https://img.freepik.com/premium-photo/male-nurse_158595-2195.jpg",
  },
  {
    staffId: "P007",
    name: "Nurse Amelia Wilson",
    role: "Nurse",
    department: ["Cardiology"],
    experience: 3,
    contact: "456-789-0123",
    shift: "Full-time",
    patientsAssigned: 4,
    image:
      "https://img.freepik.com/free-photo/portrait-young-female-nurse-standing-arms-crossed-hospital-corridor_23-2147853693.jpg",
  },
  {
    staffId: "P008",
    name: "Paramedic Henry Thomas",
    role: "Paramedic",
    department: ["Pediatrics", "General Medicine"], // Works across multiple departments
    experience: 8,
    contact: "789-321-6540",
    shift: "Morning",
    patientsAssigned: 9,
    image:
      "https://img.freepik.com/premium-photo/smiling-paramedic-holding-radio-walkie-talkie-outside_67155-1901.jpg",
  },
  {
    staffId: "P009",
    name: "Nurse Chloe Miller",
    role: "Nurse",
    department: ["Orthopedics"],
    experience: 4,
    contact: "123-789-6543",
    shift: "Afternoon",
    patientsAssigned: 10,
    image:
      "https://img.freepik.com/free-photo/smiling-nurse-with-stethoscope-isolated-white_23-2148466030.jpg",
  },
  {
    staffId: "P010",
    name: "Nurse Ethan Martinez",
    role: "Nurse",
    department: ["ENT", "Dermatology"], // Works across multiple departments
    experience: 7,
    contact: "987-123-6540",
    shift: "Evening",
    patientsAssigned: 3,
    image:
      "https://img.freepik.com/premium-photo/young-male-nurse-with-stethoscope-around-neck-looking-camera-while-standing-office_158595-2073.jpg",
  },
  {
    staffId: "P011",
    name: "Nurse Anna Lopez",
    role: "Nurse",
    department: ["Cardiology", "Neurology"], // Works across multiple departments
    experience: 6,
    contact: "123-654-7890",
    shift: "Morning",
    patientsAssigned: 5,
    image:
      "https://img.freepik.com/free-photo/beautiful-doctor-posing-with-stethoscope-white_23-2148474659.jpg",
  },
  {
    staffId: "P012",
    name: "Paramedic Kevin Turner",
    role: "Paramedic",
    department: ["Orthopedics"],
    experience: 4,
    contact: "987-654-1230",
    shift: "Afternoon",
    patientsAssigned: 8,
    image:
      "https://img.freepik.com/free-photo/portrait-young-handsome-paramedic-hospital_496169-186.jpg",
  },
  {
    staffId: "P013",
    name: "Nurse Lily Adams",
    role: "Nurse",
    department: ["Pediatrics", "Gynecology"], // Works across multiple departments
    experience: 7,
    contact: "321-987-6540",
    shift: "Full-time",
    patientsAssigned: 11,
    image:
      "https://img.freepik.com/free-photo/smiling-female-doctor-stethoscope_329181-13054.jpg",
  },
  {
    staffId: "P014",
    name: "Paramedic Thomas Wright",
    role: "Paramedic",
    department: ["General Medicine"],
    experience: 10,
    contact: "456-123-6540",
    shift: "Evening",
    patientsAssigned: 4,
    image:
      "https://img.freepik.com/free-photo/portrait-young-male-paramedic-hospital_23-2148927987.jpg",
  },
  {
    staffId: "P015",
    name: "Nurse Emma Robinson",
    role: "Nurse",
    department: ["Dermatology"],
    experience: 5,
    contact: "654-321-9870",
    shift: "Morning",
    patientsAssigned: 6,
    image:
      "https://img.freepik.com/free-photo/portrait-young-female-nurse-isolated-white-background_231208-229.jpg",
  },
  {
    staffId: "P016",
    name: "Nurse David Mitchell",
    role: "Nurse",
    department: ["Neurology", "Orthopedics"], // Works across multiple departments
    experience: 8,
    contact: "789-654-3210",
    shift: "Full-time",
    patientsAssigned: 9,
    image:
      "https://img.freepik.com/premium-photo/portrait-doctor-wearing-uniform-with-stethoscope-around-his-neck_158595-2181.jpg",
  },
  {
    staffId: "P017",
    name: "Nurse Megan Parker",
    role: "Nurse",
    department: ["Gynecology"],
    experience: 6,
    contact: "321-654-1230",
    shift: "Afternoon",
    patientsAssigned: 12,
    image:
      "https://img.freepik.com/free-photo/portrait-happy-nurse-smiling-white-background_53876-120705.jpg",
  },
  {
    staffId: "P018",
    name: "Paramedic Daniel Cooper",
    role: "Paramedic",
    department: ["Cardiology"],
    experience: 7,
    contact: "123-456-9870",
    shift: "Morning",
    patientsAssigned: 8,
    image:
      "https://img.freepik.com/free-photo/portrait-young-male-nurse-studio-background_496169-132.jpg",
  },
  {
    staffId: "P019",
    name: "Nurse Jessica King",
    role: "Nurse",
    department: ["Pediatrics", "Dermatology"], // Works across multiple departments
    experience: 9,
    contact: "987-321-6540",
    shift: "Evening",
    patientsAssigned: 7,
    image:
      "https://img.freepik.com/free-photo/smiling-young-woman-nurse-with-hands-pockets_496169-150.jpg",
  },
  {
    staffId: "P020",
    name: "Paramedic Lucas Foster",
    role: "Paramedic",
    department: ["General Medicine"],
    experience: 5,
    contact: "654-789-3210",
    shift: "Afternoon",
    patientsAssigned: 6,
    image:
      "https://img.freepik.com/premium-photo/portrait-handsome-paramedic-ambulance-uniform_158595-2874.jpg",
  },
];

export default paramedicStaff;
