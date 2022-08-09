import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Card, CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import {
  FaStackOverflow,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "gray", color: "white" }}>
      <Grid container>
        <Grid item xs={12} sm={4} sx={{}}>
          <Box component="img" alt="logo" src=""></Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{}}>
          <Card
            sx={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "inherit",
            }}
          >
            <CardHeader
              sx={{ padding: 1 }}
              avatar={
                <Avatar>
                  <ImLocation2 />
                </Avatar>
              }
              title={
                <Typography sx={{ color: "white" }}>
                  Delhi,Sector-9 India
                </Typography>
              }
            />
          </Card>
          <Card
            sx={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "inherit",
            }}
          >
            <CardHeader
              sx={{ padding: 1 }}
              avatar={
                <Avatar>
                  <FiPhoneCall />
                </Avatar>
              }
              title={
                <Typography component="a" href="#" sx={{ color: "white" }}>
                  123456789
                </Typography>
              }
            />
          </Card>
          <Card
            sx={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "inherit",
            }}
          >
            <CardHeader
              sx={{ padding: 1 }}
              avatar={
                <Avatar>
                  <FiMail />
                </Avatar>
              }
              title={
                <Typography component="a" href="#" sx={{ color: "white" }}>
                  codingsick.gmail.com
                </Typography>
              }
            />
          </Card>
          <Card
            sx={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "inherit",
            }}
          >
            <CardHeader
              sx={{ padding: 1 }}
              avatar={
                <Avatar>
                  <FaStackOverflow />
                </Avatar>
              }
              title={
                <Typography component="a" href="#" sx={{ color: "white" }}>
                  codingsick.com
                </Typography>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ p: 2 }}>
          <Box>
            <Typography variant="h4">About the compony</Typography>
          </Box>
          <Box>
            <Typography variant="p">
              This is the platform where you can get your dream projects.We will
              get design and develop projects og your idea.
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography>Spred your love</Typography>
            <Grid container justifyContent="space-around">
              <Grid item>
                <Avatar variant="square">
                  <FaFacebook />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar variant="square">
                  <FaTwitter />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar variant="square">
                  <FaLinkedin />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar variant="square">
                  <FaGithubSquare />
                </Avatar>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
