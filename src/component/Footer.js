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
          <Grid item xs={12} sm={3} sx={{}}>
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
                sx={{ width: 190 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} sx={{}}>
            <Grid
              container
              sx={{
                height: "100%",
                alignItems: "center",
              }}
            >
              <Grid item md={12} sm={6} xs={6} sx={{}}>
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
              </Grid>
              <Grid item md={12} sm={6} xs={6} sx={{}}>
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
              <Grid item md={12} sm={6} xs={6} sx={{}}>
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
              <Grid item md={12} sm={6} xs={6} sx={{}}>
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
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ p: 2 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: 25 }, fontWeight: 600 }}
              >
                About the compony
              </Typography>
            </Box>
            <Box>
              <Typography variant="p">
                This is the platform where you can get your dream projects.We
                will get design and develop projects og your idea.
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 5,
          backgroundColor: "black",
        }}
      >
        <Typography sx={{ color: "red", fontSize: 14 }}>
          <Typography component="span" sx={{ color: "white", fontSize: 14 }}>
            &copy;
          </Typography>{" "}
          codingsick
        </Typography>
        <Typography sx={{ color: "white", fontSize: 14 }}>
          All Rights Reserved 2021
        </Typography>
      </Box>
    </>
  );
}
