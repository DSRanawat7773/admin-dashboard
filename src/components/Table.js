import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[{ name: 'John', age: 30, city: 'New York' }, { name: 'Jane', age: 25, city: 'San Francisco' }].map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
