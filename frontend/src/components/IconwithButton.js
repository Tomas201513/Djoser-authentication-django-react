import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@mui/material";
function IconwithButton({ icon, open, to, text = "ola" }) {
  return (
    <div>
      <ListItem key={text} disablePadding sx={{ display: "block" }}>
        {/* <Link to={to}> */}
        <ListItemButton
          to={to}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
        {/* </Link> */}
      </ListItem>
    </div>
  );
}

export default IconwithButton;
