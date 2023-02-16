import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";

function Crud() {
  // Store list of all users
  const [users, setUsers] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 0.5 },
    { field: "description", headerName: "Description" },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: ({ row }) => (
        <IconButton onClick={deleteRow(row)}>
          <DeleteOutlineIcon />
        </IconButton>
      ),
    },
  ];

  const deleteRow = async (row) => {
    const response = await fetch(
      `http://127.0.0.1:8000/service/servicetype/${row.id}/`
    ).then((response) => response.json());

    // update the state
    setUsers(response);
    console.log(response);
  };

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/service/servicetype/"
    ).then((response) => response.json());

    // update the state
    setUsers(response);
    console.log(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Box m="20px">
      {" "}
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          editMode
          pageSize="2"
          paginationMode="server"
          checkboxSelection
          scrollbarSize="0"
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}
export default Crud;

{
  /*=================================OLD WAY OF MAKING TABLE=====================================
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
    </TableContainer> */
}
