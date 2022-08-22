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
} from "@mui/material";

const Registration = () => {
  const [client, setClient] = React.useState("client");
  const userRole = client;
  const handleChangeClient = (event) => {
    setClient(event.target.value);
  };
  const developers = ["Andriod", "Web"];
  console.log(userRole);
  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      Password: data.get("password"),
      confrim_Password: data.get("confrim_password"),
      client: data.get("client"),
      developer_role: data.getAll("developer_role"),
    };
    console.log(actualData);
    document.getElementById("registration").reset();
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
            margin="dense"
          />
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
          <TextField
            label="Confrim Password"
            type="password"
            name="confrim_password"
            variant="outlined"
            fullWidth
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
      </Box>
    </div>
  );
};
export default Registration;
