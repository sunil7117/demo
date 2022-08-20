import { Box, Grid, Typography } from "@mui/material";
import ShowcaseOne from "./mainComponent/ShowcaseOne";
import service from "../../images/serviceindex.png";
import ServiceBox from "./serviceComponent/ServiceBox";
// images
import andriod1 from "../../images/and1.png";
import ux from "../../images/uiux.png";
import web from "../../images/web.png";
import wordpress from "../../images/wordpress.png";
import error from "../../images/error.png";
const Service = () => {
  const showcase1 = {
    pic: service,
    title: "CodingSick",
    content:
      "provding the best costumer service. This is the plateform where you can develop your dream projects. we are here to do your work.",
    btn1: { btnName: "Start Earning", btnIcon: "icon", btnColor: "primary" },
    btn2: { btnName: "Give Work", btnIcon: "icon", btnColor: "error" },
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
      pic: web,
      title1: "Web",
      title2: " Into Application",
      content:
        "We can create any kind of application according to your requirement.",
    },
  ];
  return (
    <>
      <ShowcaseOne value={showcase1} />
      <Box sx={{ width: "80%", m: "auto" }}>
        <Typography variant="h2" textAlign="center">
          Services
        </Typography>

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
