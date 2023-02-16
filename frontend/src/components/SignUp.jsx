import axios from "axios";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Input, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import { useSnackbar } from "notistack";
import { SocialIcon } from "react-social-icons";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
 import { useFormik } from "formik";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { LoadingButton } from "@mui/lab";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(props) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");
  // const { registerUser } = useContext(AuthContext);

  // const handleSubmit = async e => {
  //   e.preventDefault();`
  //   registerUser(username, password, password2);
  // };
  const [authform, setAuthForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [checkEmail, setcheckEmail] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showPassword, setshowPassword] = useState(false);

  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Check your email to activate your account", {
      variant: "info",
    });
  };

  const handleClickShowPassword = () => {
    setshowPassword((show) => !show);
    console.log(showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(userForm);

    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://127.0.0.1:8000/auth/users/",
        body,
        config
      );
      setUserForm({
        username: "",
        email: "",
        password: "",
        re_password: "",
      });
      setIsLoading(false);
      setIsDone(true);
      console.log(res.data);
      handleClick();
      setcheckEmail(true);
    } catch (err) {
      setIsDone(false);
      setIsLoading(false);
      console.error(err.response.data);
      setErrors(err.response.data);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {checkEmail ? (
          <>
            <Box
              sx={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 30,
                  marginTop: 2,
                }}
              >
                Activate your account
              </Typography>
              <Typography>Click here if you are using gmail!</Typography>

              <ArrowDownwardIcon sx={{ marginBottom: 3, size: "medium" }} />
              <SocialIcon url="https://mail.google.com/" />
              <Link sx={{marginTop:5}} href="/login" variant="body2">
                Back To LogIn{" "}
              </Link>
            </Box>
          </>
        ) : (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {checkEmail ? (
                <SocialIcon url="https://mail.google.com/" />
              ) : (
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
              )}
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="username"
                      name="Username"
                      value={userForm.username}
                      required
                      fullWidth
                      error={errors.username}
                      helperText={errors.username ? `${errors.username}` : ""}
                      id="username"
                      label="username"
                      autoFocus
                      onChange={(e) =>
                        setUserForm({ ...userForm, username: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      helperText={errors.email ? `${errors.email}` : ""}
                      id="email"
                      label="Email"
                      value={userForm.email}
                      name="email"
                      error={errors.email}
                      autoComplete="family-name"
                      onChange={(e) =>
                        setUserForm({ ...userForm, email: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      helperText={
                        userForm.re_password !== userForm.password
                          ? `${errors.password}`
                          : ""
                      }
                      error={errors.password}
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={userForm.password}
                      autoComplete="password"
                      onChange={(e) =>
                        setUserForm({ ...userForm, password: e.target.value })
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      helperText={
                        userForm.re_password !== userForm.password
                          ? `${errors.non_field_errors}`
                          : ""
                      }
                      error={errors.non_field_errors || errors.re_password}
                      required
                      fullWidth
                      name="password"
                      label="Confirm Password"
                      type={showPassword ? "text" : "password"}
                      value={userForm.re_password}
                      id="confirm-password"
                      autoComplete="confirm-password"
                      onChange={(e) =>
                        setUserForm({
                          ...userForm,
                          re_password: e.target.value,
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                {isLoading ? (
                  <LoadingButton
                    fullWidth
                    loading
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </LoadingButton>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                )}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        )}
      </ThemeProvider>
    </>
  );
}
