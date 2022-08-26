import { Typography, Grid, Avatar, Box } from "@mui/material";

import { FaRegCheckCircle } from "react-icons/fa";
import dev from "../../images/dev.png";
import ShowcaseOne from "./mainComponent/ShowcaseOne";
import About1 from "../../images/about1.png";
import payment from "../../images/payment.jpg";
import SigninSignup from "../loginSinginComponent/SigninSignup";
const Earning = () => {
  const showcase1 = {
    pic: About1,
    title: "Get Paid",
    child: [
      {
        content1: "sometiing",
        content2: "someting",
        btn: "create",
      },
    ],
    content:
      "if you want to earn then create partner account with us and start earning instantly in some easy steps.",
    btn1: { btnName: "Learn More", btnIcon: "icon", btnColor: "primary" },
    // btn2: { btnName: "Give Work", btnIcon: "icon", btnColor: "error" },
  };
  const devinfo = {
    devName: "Dev",
    image: dev,
    devdetails: [
      { title: "Your Lifetime Earning", value: "INR- 5000" },
      { title: "Total No. of Project", value: "50" },
      { title: "Projects Done", value: "25" },
      { title: "This Month Earnings", value: "INR-8000" },
      { title: "Pending Amount", value: "INR-5000" },
      { title: "Pending Project", value: "25" },
      { title: "Holding Projects Amount", value: "INR -3000/per pj" },
    ],
  };
  return (
    <>
      <ShowcaseOne value={showcase1}>
        <Grid container sx={{ border: "2x solid black" }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontSize: { xs: 14, sm: 16, md: 20 }, color: "#DC3545" }}
            >
              If You want to earn
            </Typography>
            <SigninSignup />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ fontSize: { xs: 14, sm: 16, md: 20 }, color: "#0D6EFD" }}
          >
            instantly partner account with us.
          </Grid>
        </Grid>
      </ShowcaseOne>
      <Box>
        {/*Earning Dashboard   */}
        <Box>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: 32, md: 52 },
              fontWeight: 600,
            }}
          >
            <span style={{ color: "red" }}>Earning </span>Dashboard
          </Typography>
          <Typography
            textAlign="center"
            sx={{ fontSize: { xs: 15, md: 18 }, fontWeight: 300 }}
          >
            This is our earning Dashboard/protfolio.
          </Typography>
        </Box>
        {/*Earning Dashboard   */}
        <Box
          sx={{
            backgroundImage: `url(${payment})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Develper details settings */}
          <Box
            sx={{
              backgroundColor: "green",
              display: "flex",
              alignItems: "center",
              m: "auto",
              width: "96%",
            }}
          >
            <Avatar alt="devloper" src={devinfo.image} sx={{ p: 1 }} />
            <Typography
              component="div"
              variant="h4"
              sx={{ p: 1, color: "white" }}
            >
              {devinfo.devName}
            </Typography>
            <Box sx={{ p: 1, color: "white" }}>
              <FaRegCheckCircle />
            </Box>
          </Box>
          {/* Develper details settings */}
          {/* Develper overall details settings */}
          <Box p={2}>
            <Box
              sx={{
                background: "rgba(239,240,255,0.7)",
                width: "90%",
                m: "auto",
                p: { xs: 1, md: 4 },
                borderRadius: 5,
              }}
            >
              <Grid container>
                {devinfo.devdetails.map((detail, i) => {
                  return (
                    <>
                      <Grid item xs={12} sm={6} md={4} key={i} sx={{ my: 2 }}>
                        <Box
                          textAlign="center"
                          sx={{
                            width: 250,
                            m: "auto",
                            border: "2px solid blue",
                            borderRadius: 2,
                            py: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 20,
                              fontWeight: 600,
                              color: "red",
                            }}
                          >
                            {detail.title}
                          </Typography>
                          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                            {detail.value}
                          </Typography>
                        </Box>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Box>
          </Box>
          {/* Develper overall details settings */}
        </Box>
      </Box>
    </>
  );
};
export default Earning;
