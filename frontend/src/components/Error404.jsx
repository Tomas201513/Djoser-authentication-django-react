import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import fof from "../assets/fof.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const Error404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid>
        <Grid item xs={12}>
          <img src={fof} alt="404" width={300} height={300} />
        </Grid>
        <Grid item xs={12}>
          <Link
            sx={{ alignItems: "center", justifyContent: "center" }}
            href="/login"
            variant="body2"
          >
            {"Back Home"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Error404;
