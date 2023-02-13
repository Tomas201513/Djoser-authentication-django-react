import axios from "axios";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {


  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");
  // const { registerUser } = useContext(AuthContext);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   registerUser(username, password, password2);
  // };
const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [userForm, setUserForm] = useState({
    user_name: "",
    email: "",
    password: "",
    re_password: "",
  });

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
        "http://127.0.0.1:9005/auth/users/",
        body,
        config
      );
      setUserForm({
        user_name: "",
        email: "",
        password: "",
        re_password: "",
      });
      setIsLoading(false);
      setIsDone(true);
      console.log(res.data);
    } catch (err) {
      setIsDone(false);
      setIsLoading(false);
      console.error(err.response.data);
    }
  };

  return (
    <>
      {isDone ? (
        <Box>
          <span>
            <b className="capitalize"></b> Check your email to activate your
            account
          </span>
          <button onClick={() => setIsDone(false)}>
            <span>×</span>
          </button>
        </Box>
      ) : null}

      <ThemeProvider theme={theme}>
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
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
                    name="username"
                    value={userForm.user_name}
                    required
                    fullWidth
                    id="username"
                    label="username"
                    autoFocus
                    onChange={(e) =>
                      setUserForm({ ...userForm, user_name: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    value={userForm.email}
                    name="email"
                    autoComplete="family-name"
                    onChange={(e) =>
                      setUserForm({ ...userForm, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="password"
                    name="password"
                    value={userForm.password}
                    autoComplete="password"
                    onChange={(e) =>
                      setUserForm({ ...userForm, password: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="confirm-password"
                    type="password"
                    value={userForm.re_password}
                    id="confirm-password"
                    autoComplete="confirm-password"
                    onChange={(e) =>
                      setUserForm({ ...userForm, re_password: e.target.value })
                    }
                  />
                </Grid>
                <p>
                  {userForm.re_password !== userForm.password
                    ? "Passwords do not match"
                    : ""}
                </p>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
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
      </ThemeProvider>
    </>
  );
}