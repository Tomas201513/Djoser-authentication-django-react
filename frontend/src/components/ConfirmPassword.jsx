import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import {Box,Typography,TextField,Button} from '@mui/material'

const ConfirmPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { uid, token } = useParams();

  const resetPassword = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/auth/users/reset_password_confirm/`,
        {
          uid: uid,
          token: token,
          new_password: password,
          re_new_password: confirmPassword,
        },
        config
      );

      setIsDone(true);
      console.log(res);
      setConfirmPassword("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={resetPassword}>
        <Box
          sx={{
            marginTop: 35,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 30 }}> Password Reset</Typography>

          <TextField
            sx={{
              marginTop: 5,
            }}
            required
            // fullWidth
            id="password"
            label="New password"
            name="password"
            type="password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            sx={{
              marginTop: 5,
            }}
            required
            // fullWidth
            id="password"
            label="Confirm password"
            name="password"
            type="password"
            autoComplete="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            disabled={isLoading}
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? "Wait" : "Reset Password"}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ConfirmPassword;





