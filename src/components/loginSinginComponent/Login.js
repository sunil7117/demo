import React, { useState } from "react";

import { Alert, Box, Button, TextField, Typography } from "@mui/material";

import axios from "axios";
// import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isLogin, setLogin] = React.useState("false");
  // const navigation = useNavigate();
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
          url: "http://localhost:1000/api/login",
          data: loginData,
        });
        const { msg, status, token, user } = response.data;
        console.log(token);
        if (status === "failed") {
          setError({
            status: true,
            message: msg,
            type: "error",
          });
        } else {
          localStorage.setItem("token", token);
          localStorage.setItem("name", user.name);
          localStorage.setItem("email", user.email);
        }
      } catch (error) {
        setError({
          status: true,
          message: "unable to login please try again latter...",
          type: "error",
        });
      }
    } else {
      setError({ status: true, message: "Try again latter!", type: "error" });
    }
  };
  console.log(isLogin);
  return (
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
          size="small"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          fullWidth
          required
          margin="dense"
          size="small"
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
      {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ""}
    </Box>
  );
};
export default Login;
