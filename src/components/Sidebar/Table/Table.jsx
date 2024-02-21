import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';


function createData(
  name: string,
  start: string,
  rate: number,
  level: string,
) {
  return { name, start, rate, level};
}

const rows = [
  createData('Web Design', "May 12", 4.8, "Elementary"),
  createData('Development Basics',"May 14", 4.4,"Intermediate"),
  createData('Data with python', "May 17", 4.6,"Elementary"),
  createData('Html Basics', "May 26", 4.9,"Elementary"),
];

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>My Courses</h3>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course name</TableCell>
            <TableCell align="right">Start</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.start}</TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">{row.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
