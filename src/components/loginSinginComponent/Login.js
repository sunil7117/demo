import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      Password: data.get("password"),
    };
    // Send a POST request
    console.log("login process is active");
    document.getElementById("login").reset();
    checkUser(actualData);
  };

  const checkUser = async (get) => {
    try {
      const config = {
        method: "post",
        url: "https://calm-thicket-93020.herokuapp.com/users/login",
        headers: {
          "Content-Tye": "application/json",
        },
        data: get,
      };
      console.log(config.data);
      const res = await axios(config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Box sx={{ height: 450 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 600 }}>Login</Typography>
        <Box component="form" id="login" noValidate onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
};
export default Login;
