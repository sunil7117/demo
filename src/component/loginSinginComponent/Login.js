import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const handleLogin = (e) => {
    // e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      Password: data.get("password"),
    };
    console.log(actualData);
    document.getElementById("login").reset();
  };
  // const userDetails = [{ email: "sunilapp7117@gmail.com", password: "sunil" }];
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
