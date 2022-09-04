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
const Registration = () => {
  const [client, setClient] = React.useState("client");
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState({
    status: false,
    message: "",
    type: "",
  });
  const userRole = client;
  const handleChangeClient = (event) => {
    setClient(event.target.value);
  };
  const developers = ["Andriod", "Web"];
  console.log(userRole);

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const registerData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confrim_password: data.get("confrim_password"),
      client: data.get("client"),
      developer_role: data.getAll("developer_role"),
    };
    if (
      registerData.name &&
      registerData.email &&
      registerData.password &&
      registerData.confrim_password
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
          message: "success",
          type: "success",
        });
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
          />
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
            id="password"
            variant="outlined"
            fullWidth
            required
            margin="dense"
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
          />
          <FormControl fullWidth margin="dense">
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
                {error.status ? (
                  <Alert severity={error.type}>{error.message}</Alert>
                ) : (
                  "ok"
                )}
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
          <Alert severity={error.type}> {error.message}</Alert>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};
export default Registration;
