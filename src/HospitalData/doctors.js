const doctors = [
  // Cardiology
  {
    doctorId: "D001",
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    department: "Cardiology",
    experience: 10,
    contact: "123-456-7890",
    availability: "Full-time",
    patientsAssigned: 12,
    consultationFee: "$100",
    image:
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
  },
  {
    doctorId: "D011",
    name: "Dr. Maria Stevens",
    specialization: "Cardiologist",
    department: "Cardiology",
    experience: 8,
    contact: "123-987-6540",
    availability: "Part-time",
    patientsAssigned: 7,
    consultationFee: "$90",
    image:
      "https://img.freepik.com/premium-photo/woman-white-lab-coat-is-posing-photo_1304358-2909.jpg?w=1060",
  },

  // Pediatrics
  {
    doctorId: "D002",
    name: "Dr. Emily Brown",
    specialization: "Pediatrician",
    department: "Pediatrics",
    experience: 8,
    contact: "987-654-3210",
    availability: "Part-time",
    patientsAssigned: 5,
    consultationFee: "$80",
    image:
      "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=826&t=st=1729445443~exp=1729446043~hmac=490b809127e7d875fa6e5f5568df1542f344c9a5e5b82cc1ed1f677632d5c2f6",
  },
  {
    doctorId: "D012",
    name: "Dr. Daniel Harris",
    specialization: "Pediatrician",
    department: "Pediatrics",
    experience: 6,
    contact: "876-543-2109",
    availability: "Full-time",
    patientsAssigned: 8,
    consultationFee: "$85",
    image:
      "https://img.freepik.com/premium-photo/man-with-stethoscope-around-his-neck_1185498-132429.jpg?w=1060",
  },

  // Neurology
  {
    doctorId: "D003",
    name: "Dr. William Johnson",
    specialization: "Neurologist",
    department: "Neurology",
    experience: 15,
    contact: "345-123-9876",
    availability: "Full-time",
    patientsAssigned: 20,
    consultationFee: "$120",
    image:
      "https://img.freepik.com/free-photo/cheerful-male-doctor-white-gown-portrait_53876-108640.jpg?t=st=1729445836~exp=1729449436~hmac=78b78ef674d0ec304c20e66aa7b5b5f05365c6edb5ee9296f20ca81e7574f653&w=826",
  },
  {
    doctorId: "D013",
    name: "Dr. Lisa Cooper",
    specialization: "Neurologist",
    department: "Neurology",
    experience: 12,
    contact: "234-567-8901",
    availability: "Part-time",
    patientsAssigned: 15,
    consultationFee: "$110",
    image:
      "https://img.freepik.com/free-photo/doctor-woman-smiling-gesturing-thumbs-up_23-2148075688.jpg?t=st=1729771362~exp=1729774962~hmac=da6bb5d5dd68cd0ece7dd762b65e8e77b670d7c65d0cd4cb6904907c0f413bd7&w=996",
  },

  // Dermatology
  {
    doctorId: "D005",
    name: "Dr. Sophia Lee",
    specialization: "Dermatologist",
    department: "Dermatology",
    experience: 7,
    contact: "321-654-7890",
    availability: "Part-time",
    patientsAssigned: 6,
    consultationFee: "$90",
    image:
      "https://img.freepik.com/free-photo/portrait-asian-doctor-woman-cross-arms-standing-medical-uniform-stethoscope-smiling-camera-white-background_1258-83220.jpg?t=st=1729446197~exp=1729449797~hmac=8b06cc811b71b507b5316b30bf851e2dd1b3994b44c6d5d8c88f3a0a069cc6c3&w=826",
  },
  {
    doctorId: "D014",
    name: "Dr. Kevin Murphy",
    specialization: "Dermatologist",
    department: "Dermatology",
    experience: 9,
    contact: "543-210-6789",
    availability: "Full-time",
    patientsAssigned: 10,
    consultationFee: "$95",
    image:
      "https://img.freepik.com/premium-photo/doctor-with-his-arms-crossed-smiling_1185498-132279.jpg?w=1060",
  },

  // Orthopedics
  {
    doctorId: "D006",
    name: "Dr. David Nguyen",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    experience: 20,
    contact: "789-456-1230",
    availability: "Full-time",
    patientsAssigned: 30,
    consultationFee: "$200",
    image:
      "https://img.freepik.com/premium-photo/rheumatologist-isolated-flat-color-background_980928-38401.jpg?w=1060",
  },
  {
    doctorId: "D015",
    name: "Dr. Jessica Lee",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    experience: 18,
    contact: "234-543-9876",
    availability: "Part-time",
    patientsAssigned: 25,
    consultationFee: "$180",
    image:
      "https://img.freepik.com/free-photo/isolated-shotof-happy-successful-mature-senior-physician-wearing-medical-unifrom-stethoscope-having-cheerful-facial-expression-smiling-broadly-keeping-arms-crossed-chest_343059-2254.jpg?t=st=1729835903~exp=1729839503~hmac=8560693d67ade189d0c5f26864e70be6a728db9564bcaa627554bb7f76660a4b&w=996",
  },

  // Gynecology
  {
    doctorId: "D007",
    name: "Dr. Sarah Patel",
    specialization: "Gynecologist",
    department: "Gynecology",
    experience: 9,
    contact: "123-789-6540",
    availability: "Part-time",
    patientsAssigned: 11,
    consultationFee: "$110",
    image:
      "https://img.freepik.com/premium-photo/young-doctor-venezuelan-woman-isolated-blue-background-happy-smiling-cheerful_1187-184669.jpg?w=826",
  },
  {
    doctorId: "D016",
    name: "Dr. Laura White",
    specialization: "Gynecologist",
    department: "Gynecology",
    experience: 14,
    contact: "321-543-8765",
    availability: "Full-time",
    patientsAssigned: 18,
    consultationFee: "$115",
    image:
      "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827775.jpg?t=st=1729836657~exp=1729840257~hmac=4c8727a8415bbeb21105676e3a80ad9d4818b0ed6c22e372201584ffd5e008b9&w=1060",
  },

  // ENT
  {
    doctorId: "D017",
    name: "Dr. David Thompson",
    specialization: "ENT Specialist",
    department: "ENT",
    experience: 11,
    contact: "432-765-9876",
    availability: "Full-time",
    patientsAssigned: 9,
    consultationFee: "$90",
    image:
      "https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?t=st=1729837025~exp=1729840625~hmac=09624d2155c9cef09cdb1a08eba05fd1d43e508430d7c890092745034d734d7c&w=996",
  },
  {
    doctorId: "D018",
    name: "Dr. Rebecca Jones",
    specialization: "ENT Specialist",
    department: "ENT",
    experience: 9,
    contact: "789-654-1234",
    availability: "Part-time",
    patientsAssigned: 7,
    consultationFee: "$85",
    image:
      "https://img.freepik.com/premium-photo/confident-young-female-doctor-white-coat-with-stethoscope-standing-with-arms-crossed-smiling-against-gray-background_1285909-758.jpg?w=1060",
  },
];

export default doctors;