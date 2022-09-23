import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  //   SelectChangeEvent,
  MenuItem,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [client, setClient] = React.useState("client");
  const [error, setError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const navigation = useNavigate();
  const userRole = client;
  const handleChangeClient = (event) => {
    setClient(event.target.value);
  };
  const developers = ["Andriod", "Web"];

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const registerData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      mobile: data.get("mobile"),
      confrim_password: data.get("confrim_password"),
      client: data.get("client"),
      developer_role: data.getAll("developer_role"),
    };

    if (
      registerData.name &&
      registerData.email &&
      registerData.password &&
      registerData.mobile &&
      registerData.client
    ) {
      if (registerData.password !== registerData.confrim_password) {
        setError({
          status: "true",
          message: "password / confrim password not matched",
          type: "error",
        });
      } else {
        setError({
          status: "true",
          message: "password matched",
          type: "success",
        });
        try {
          const response = await axios({
            method: "post",
            url: "http://localhost:1000/api/register",
            data: registerData,
          });

          document.getElementById("registration").reset();
          setError({
            status: "true",
            message: response.data.msg,
            type: "success",
            token: response.data.token,
          });
          navigation("/");
        } catch (err) {
          setError({
            status: "true",
            message: "Request failed with status code 400",
            type: "error",
          });
        }
      }
    } else {
      setError({
        status: "true",
        message: "All fields are required",
        type: "error",
      });
    }
  };

  return (
    <div>
      <Box sx={{ height: 450 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 600 }}>
          Registration
        </Typography>
        <Box component="form" id="registration" onSubmit={handleRegister}>
          <TextField
            label="User Name"
            type="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            margin="dense"
            size="small"
          />
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
            id="password"
            variant="outlined"
            fullWidth
            required
            margin="dense"
            size="small"
          />
          <TextField
            label="Confrim Password"
            type="password"
            id="confrim_Password"
            name="confrim_password"
            variant="outlined"
            fullWidth
            required
            margin="dense"
            size="small"
          />
          <TextField
            label="mobile"
            type="number"
            id="mobile"
            name="mobile"
            variant="outlined"
            fullWidth
            required
            margin="dense"
            size="small"
          />
          <FormControl fullWidth margin="dense" size="small">
            <InputLabel id="demo-simple-select-label">Client Type</InputLabel>
            <Select
              id="client_role"
              value={client}
              name="client"
              label="Client Type"
              onChange={handleChangeClient}
            >
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="client">Client</MenuItem>
            </Select>
            {userRole === "developer" ? (
              <FormGroup sx={{ display: "inline" }}>
                {developers.map((developer, i) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="developer_role"
                          value={developer}
                          size="small"
                          // checked={checked}
                        />
                      }
                      key={i}
                      label={developer}
                    />
                  );
                })}
              </FormGroup>
            ) : (
              ""
            )}
          </FormControl>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Box>
        {error.status ? (
          <Alert severity={error.type}> {(error.message, error.token)}</Alert>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};
export default Registration;
