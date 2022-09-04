import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";

import axios from "axios";
const Login = () => {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (loginData.email && loginData.password) {
      try {
        const response = await axios({
          method: "post",
          url: "https://calm-thicket-93020.herokuapp.com/users/login",
          data: loginData,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      // setError({ status: true, message: "login success", type: "success" });
    } else {
      console.log("try again!");
    }
  };
  return (
    <div>
      <Box sx={{ height: 450 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 600 }}>Login</Typography>
        <form id="login" onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
            required
            margin="dense"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            required
            margin="dense"
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
        {error.status ? (
          <Alert severity={error.type}>{error.message}</Alert>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};
export default Login;
