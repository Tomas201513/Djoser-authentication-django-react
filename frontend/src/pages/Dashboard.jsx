import React from 'react'
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";



function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <IconButton>
        <LogoutIcon onClick={logoutUser} />
      </IconButton>{" "}
    </div>
  );
}

export default Dashboard