import React from "react";
import { useState, useEffect } from "react";
// import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Crud() {
  // Store list of all users
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("http://127.0.0.1:8000/service/servicetype/")
      .then((response) => response.json())
      .catch((err) => console.error("erorrrrrrrrr", err));

    // update the state
    setUsers(response);
    console.log("response", response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service Type ID</TableCell>
            <TableCell align="right">Service Type Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    }
export default Crud;
