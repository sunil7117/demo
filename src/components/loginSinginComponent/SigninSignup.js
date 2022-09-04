import * as React from "react";
import { Button, Dialog, DialogContent, Box, Tabs, Tab } from "@mui/material";
import Registration from "./Registration";
import Login from "./Login";
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const SigninSignup = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        onClick={handleClickOpen}
        sx={{ fontSize: { xs: 10, sm: 12, md: 16 } }}
      >
        Register
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {/* Create a Login and Registration page */}
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChangeTabs}>
                <Tab label="Registration" />
                <Tab label="Login" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Registration />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Login />
            </TabPanel>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default SigninSignup;
