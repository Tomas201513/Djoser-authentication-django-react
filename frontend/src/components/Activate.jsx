import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Box, Button, } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
import { Container } from "@mui/system";


const Activate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { uid, token } = useParams();
  const navigate = useNavigate();
   
  const activeClick = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await axios
      .post(
        `http://127.0.0.1:8000/auth/users/activation/`,
        {
          uid,
          token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 35,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 30 }}> Activate Your Account</Typography>
          <Typography>Stay up to date with Lamba Service </Typography>

          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="secondary"
              onClick={activeClick}
              disabled={isLoading}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
              {isLoading ? "Activating..." : "Activate"}
            </Button>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default Activate;



