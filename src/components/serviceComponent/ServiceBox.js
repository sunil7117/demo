import { Box, Paper, Typography } from "@mui/material";
import React from "react";
const ServiceBox = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 350,
            height: 200,
            border: "#87CEFA 2px solid",
          },
        }}
      >
        <Paper elevation={3} sx={{ backgroundColor: "#E9ECEF", px: 2 }}>
          <Box
            width="60%"
            sx={{ border: "3px solid #AFB2B4", m: "auto" }}
          ></Box>
          <Box sx={{ background: "red", mt: 1 }}>
            <Typography
              component="img"
              src={props.data.pic}
              sx={{ width: 70 }}
            />
          </Box>
          <Box sx={{ pt: 1, lineHeight: 1 }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ display: "inline", color: "#DC3545", fontWeight: 600 }}
            >
              {props.data.title1}
            </Typography>
            <Typography
              component="div"
              variant="h5"
              sx={{ display: "inline", fontWeight: 600 }}
            >
              {props.data.title2}
            </Typography>
          </Box>
          <Box sx={{ pb: 1 }}>
            <Typography component="p">{props.data.content}</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default ServiceBox;
