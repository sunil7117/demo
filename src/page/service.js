import { Box, Grid, Typography } from "@mui/material";
import ShowcaseOne from "../components/mainComponent/ShowcaseOne";
import service from "../images/serviceindex.webp";
import ServiceBox from "../components/serviceComponent/ServiceBox";
// images
import andriod1 from "../images/and1.webp";
import React from "react";
import ux from "../images/uiux.webp";
import web from "../images/web.webp";
import wordpress from "../images/wordpress.webp";
import error from "../images/error.webp";
import convert from "../images/convert.png";
const Service = () => {
  const showcase1 = {
    pic: service,
    title: "Your Wishes Our services",
    content:
      "We are providing you the best customer sevice across the world. CodingSick provies many kind of Technical Support for Free of Cost.",
    btn1: { btnName: "Learn More", btnIcon: "icon", btnColor: "primary" },
  };
  const servicepacks = [
    {
      pic: andriod1,
      title1: "App",
      title2: " Development",
      content:
        "We can create any kind of application according to your requirement.",
    },
    {
      pic: ux,
      title1: "UI/UX",
      title2: " Designing",
      content:
        "We are here to Design your UI/UX for your Website or Application.",
    },
    {
      pic: wordpress,
      title1: "Wordpress ",
      title2: " Websites",
      content: "We also provide Wordpress website at cheap Price.",
    },
    {
      pic: error,
      title1: "Error",
      title2: " Solving",
      content: "We also provide free Technical support.",
    },
    {
      pic: web,
      title1: "Web",
      title2: " Development",
      content:
        "We can create any kind of application according to your requirement.",
    },
    {
      pic: convert,
      title1: "Web",
      title2: " Into Application",
      content:
        "We can create any kind of application according to your requirement.",
    },
  ];
  return (
    <>
      <ShowcaseOne value={showcase1} />
      <Box>
        {/*Service  Dashboard   */}
        <Box>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: 32, md: 52 },
              fontWeight: 600,
            }}
          >
            <span style={{ color: "red" }}>Service </span>Dashboard
          </Typography>
          <Typography
            textAlign="center"
            sx={{ fontSize: { xs: 15, md: 18 }, fontWeight: 300 }}
          >
            This is our earning Dashboard/protfolio.
          </Typography>
        </Box>
        {/*Service  Dashboard   */}
        <Grid container>
          {servicepacks.map((servicepack, i) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <ServiceBox data={servicepack} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default Service;
