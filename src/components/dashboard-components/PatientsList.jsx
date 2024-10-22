import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "patientId", label: "Patient ID", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
  {
    id: "room",
    label: "Room/Department",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "duration",
    label: "Admitted\u00a0Duration",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "doctor",
    label: "Doctor",
    minWidth: 170,
    align: "right",
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "right",
  },
];

function createData(patientId, name, status, room, duration, doctor) {
  // const density = room / duration;
  return { patientId, name, status, room, duration, doctor };
}

const rows = [
  createData("P15670", "John Doe", "In Treatment", "Ward 3", "2 Days", "Dr. Smith"),
  createData("P37459", "Isabella Anderson", "Critical Condition", "ICU", "1 Day", "Dr. Rodriguez"),
  createData("P12834", "Daniel Robinson", "In Treatment", "Cardiology", "2 Days", "Dr. Smith"),
  createData("P76542", "Emily Johnson", "Discharged Soon", "Ward 5", "6 Days", "Dr. Harris"),
  createData("P49865", "Olivia Martin", "Under Observation", "Neurology", "3 Days", "Dr. Adams"),
  createData("P23547", "Sophia White", "In Treatment", "ICU", "5 Days", "Dr. Brown"),
  createData("P76254", "James Clark", "In Treatment", "Ward 2", "1 Day", "Dr. Lopez"),
  createData("P49385", "Charlotte Davis", "Discharged Soon", "Ward 1", "7 Days", "Dr. Garcia"),
  createData("P76345", "Liam Thompson", "Critical Condition", "ICU", "2 Days", "Dr. Rodriguez"),
  createData("P09873", "Mason Lewis", "In Treatment", "Ward 6", "4 Days", "Dr. Lee"),
  createData("P83745", "Amelia Wilson", "Under Observation", "ICU", "1 Day", "Dr. Green"),
  createData("P58347", "Ethan Hall", "In Treatment", "Cardiology", "2 Days", "Dr. Harris"),
  createData("P37529", "Ava Young", "In Treatment", "Ward 4", "3 Days", "Dr. Taylor"),
  createData("P12347", "Lucas King", "Critical Condition", "ICU", "5 Days", "Dr. Rodriguez"),
  createData("P46573", "Benjamin Scott", "Under Observation", "Neurology", "2 Days", "Dr. Adams"),
  createData("P98745", "Mia Harris", "In Treatment", "Ward 3", "6 Days", "Dr. Lee"),
  createData("P14578", "Elijah Wright", "Discharged Soon", "Ward 7", "8 Days", "Dr. Brown"),
  createData("P35692", "Abigail Turner", "In Treatment", "Ward 1", "3 Days", "Dr. Smith"),
  createData("P97634", "Logan Hill", "Under Observation", "ICU", "1 Day", "Dr. Green"),
  createData("P32659", "Alexander Baker", "In Treatment", "Ward 5", "4 Days", "Dr. Taylor"),
  createData("P78643", "Harper Adams", "Critical Condition", "ICU", "2 Days", "Dr. Rodriguez"),
  createData("P57324", "Sebastian Allen", "In Treatment", "Cardiology", "3 Days", "Dr. Harris"),
  createData("P15473", "Henry Collins", "Discharged Soon", "Ward 2", "7 Days", "Dr. Garcia"),
  createData("P34875", "Ella Edwards", "In Treatment", "Ward 4", "5 Days", "Dr. Lee"),
  createData("P14562", "Grace Perez", "Under Observation", "ICU", "3 Days", "Dr. Green"),
];


export default function PatientsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section>
      <h2 style={{ fontWeight: 500, margin: "10px 0", fontSize: 25 }}>
        Patients List
      </h2>
      <p style={{ marginBottom: 10 }}>
        Displaying {rowsPerPage} rows per page.
      </p>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </section>
  );
}
