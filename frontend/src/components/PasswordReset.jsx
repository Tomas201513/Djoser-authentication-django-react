import { useState, useEffect } from "react";
import axios from "axios";
import { Box, TextField, Typography, Link } from "@mui/material";
import Button from "@mui/material/Button";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(email));
    setIsSubmitting(true);
  };



  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        axios
          .post("http://127.0.0.1:8000/auth/users/reset_password/", {
            email,
          })
          .then((res) => {
            console.log(res);
            setEmail("");
          })
          .catch((err) => {
            console.log(err);
          });
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  const validate = (email) => {
    let err = {};

    if (!email) {
      err.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      err.email = "Invalid email address";
    }

    return err;
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 35,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography sx={{ fontSize: 30 }}> Reset Your Password</Typography>
          <Typography>
            Enter your email we will send you reset password{" "}
          </Typography>
          <TextField
            sx={{
              marginTop: 5,
            }}
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            type="email"
            autoComplete="password"
            value={email}
            error={errors.email}
            onChange={handleChange}
          />

          <Button
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isSubmitting ? "Sending email..." : "Reset"}
          </Button>
          <Link href="/login" variant="body2">
            Back To LogIn{" "}
          </Link>
        </form>
      </Box>
    </>
  );
};

export default PasswordReset;

