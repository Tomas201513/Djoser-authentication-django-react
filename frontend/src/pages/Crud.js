import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar, GridEventListener } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Alert from "@mui/material/Alert";

import axios from "axios";

function Crud() {
  // Store list of all users
  const [users, setUsers] = useState([]);
  const [rows, setRows] = useState();
  const [deletedRows, setDeletedRows] = useState([]);
  const [customers, setCustomers] = React.useState([]);
  const [message, setMessage] = useState([]);
  const [messagee, setMessagee] = useState([]);
  const [checkboxSelection, setCheckboxSelection] = useState(true);

  const [posts, setPosts] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "types", headerName: "Name", flex: 0.5 },
    { field: "description", headerName: "Description", flex: 0.5 },

    // {
    //   field: "action",
    //   headerName: "Action",
    //   sortable: false,
    //   renderCell: ({ row }) => (
    //     <IconButton
    //       onClick={(e) => {
    //         handleDelete(row.id);
    //         console.log(row.id);
    //       }}
    //     >
    //       <DeleteOutlineIcon />
    //     </IconButton>
    //   ),
    // },
  ];

  const handleDelete = (params) => {
    try {
      axios
        .delete(`http://127.0.0.1:8000/service/servicetype/${message}/`)
        .then(() => {
          const del = posts.filter((posts) => params.row.id !== posts.id);
          setPosts(del);
        });
    } catch (e) {
      console.log(e.response.status);
      setMessagee(e.response.status);
    }
  };

  const handleRowClick = (params) => {
    setMessage(params.row.id);
  };
  // Function to collect data
  const getApiData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/service/servicetype/"
      ).then((response) => response.json());

      // update the state
      setUsers(response);
      console.log(response);
    } catch (e) {
      console.log("tom unable to fetch data");
    }
  };

  useEffect(() => {
    getApiData();
  }, [posts]);

  return (
    <Box m="20px">
      {" "}
      <IconButton onClick={handleDelete}>
        <DeleteOutlineIcon />
      </IconButton>
      {checkboxSelection ? (
        <IconButton
          sx={{ mb: 2 }}
          onClick={() => setCheckboxSelection(!checkboxSelection)}
        >
          1
        </IconButton>
      ) : (
        <IconButton
          sx={{ mb: 2 }}
          onClick={() => setCheckboxSelection(!checkboxSelection)}
        >
          0
        </IconButton>
      )}
      {message && <Alert severity="info">{message}</Alert>}
      {messagee && <Alert severity="info">{messagee}</Alert>}
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={users}
          columns={columns}
          checkboxSelection={checkboxSelection}
          components={{ Toolbar: GridToolbar }}
          experimentalFeatures={{ newEditingApi: true }}
          onRowClick={handleRowClick}
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
