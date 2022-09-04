import React, { useState } from "react";
import {
  MenuItem,
  Menu,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";

const Logout = (props) => {
  console.log(props.state);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    console.log("handleOpenUserMenu");
    console.log(event.currentTarget);
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    // console.log(dl);
  };

  const handleSendPage = (page) => {};
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="SK" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography
              textAlign="center"
              onClick={() => {
                handleSendPage(setting);
              }}
            >
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default Logout;
