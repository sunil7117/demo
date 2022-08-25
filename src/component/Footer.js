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
import logo from "../images/logo.png";
export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "gray", color: "white" }}>
        <Grid container>
          {/* Footer logo settings */}
          <Grid item xs={12} sm={4} sx={{}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Typography
                component="img"
                alt="logo"
                src={logo}
                sx={{ width: 190, m: { xs: 2 } }}
              />
            </Box>
          </Grid>
          {/* Footer logo settings */}
          <Grid item xs={12} sm={4} sx={{}}>
            <Grid container>
              {/* Company information settings */}
              <Grid item xs={12} sx={{}}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "inherit",
                  }}
                >
                  <CardHeader
                    sx={{ "&.MuiCardHeader-root": { p: 1 } }}
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
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "inherit",
                  }}
                >
                  <CardHeader
                    sx={{ "&.MuiCardHeader-root": { p: 1 } }}
                    avatar={
                      <Avatar>
                        <FiPhoneCall />
                      </Avatar>
                    }
                    title={
                      <Typography
                        component="a"
                        href="#"
                        sx={{ color: "white" }}
                      >
                        123456789
                      </Typography>
                    }
                  />
                </Card>
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "inherit",
                  }}
                >
                  <CardHeader
                    sx={{ "&.MuiCardHeader-root": { p: 1 } }}
                    avatar={
                      <Avatar>
                        <FiMail />
                      </Avatar>
                    }
                    title={
                      <Typography
                        component="a"
                        href="#"
                        sx={{ color: "white" }}
                      >
                        codingsick.gmail.com
                      </Typography>
                    }
                  />
                </Card>
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "inherit",
                  }}
                >
                  <CardHeader
                    sx={{ "&.MuiCardHeader-root": { p: 1 } }}
                    avatar={
                      <Avatar>
                        <FaStackOverflow />
                      </Avatar>
                    }
                    title={
                      <Typography
                        component="a"
                        href="#"
                        sx={{ color: "white" }}
                      >
                        codingsick.com
                      </Typography>
                    }
                  />
                </Card>
              </Grid>
              {/* Company information settings */}
            </Grid>
          </Grid>
          {/* Footer About company settings */}
          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <Box mb={2}>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: 20, md: 22 }, fontWeight: 600 }}
              >
                About the compony
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="p" sx={{ fontSize: { xs: 14, md: 16 } }}>
                This is the platform where you can get your dream projects.We
                will get design and develop projects og your idea.
              </Typography>
            </Box>
            <Box>
              <Typography
                mb={2}
                sx={{ fontSize: { xs: 14 }, fontWeight: "bold" }}
              >
                Spred your love
              </Typography>
              <Grid container justifyContent="space-between">
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

          {/* Footer About company settings */}
        </Grid>
      </Box>
      {/* Copyright banner */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <Typography sx={{ color: "red", fontSize: 14, ml: 3 }}>
          <Typography component="span" sx={{ color: "white", fontSize: 14 }}>
            &copy;
          </Typography>{" "}
          codingsick
        </Typography>
        <Typography sx={{ color: "white", fontSize: 14, mr: 3 }}>
          All Rights Reserved 2021
        </Typography>
      </Box>
      {/* Copyright banner */}
    </>
  );
}
