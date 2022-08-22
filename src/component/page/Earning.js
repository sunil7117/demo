import { Typography, Grid, Avatar, Box } from "@mui/material";

import { FaRegCheckCircle } from "react-icons/fa";
import dev from "../../images/dev.png";
import ShowcaseOne from "./mainComponent/ShowcaseOne";
import About1 from "../../images/about1.png";
import payment from "../../images/payment.jpg";
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
        <Grid container>
          <Grid item xs={6} sx={{ backgroundColor: "red" }}>
            one
          </Grid>
          <Grid item xs={6} sx={{ backgroundColor: "blue" }}>
            Two
          </Grid>
        </Grid>
      </ShowcaseOne>
      <Box>
        {/*Earning Dashboard   */}
        <Box paddingBottom={2}>
          <Typography
            textAlign="center"
            sx={{
              lineHeight: { xs: 1 },
              fontSize: { xs: 42, md: 52 },
              fontWeight: 600,
            }}
          >
            <span style={{ color: "red" }}>Earning </span>Dashboard
          </Typography>
          <Typography textAlign="center" sx={{ fontSize: 20, fontWeight: 300 }}>
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
              width: "95%",
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
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                background: "rgba(255,255,255,0.5)",
                width: "80%",
                m: "auto",
                p: 3,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255 255 255 1 )",
                  width: "100%",
                  m: "auto",
                }}
              >
                <Grid container>
                  {devinfo.devdetails.map((detail, i) => {
                    return (
                      <>
                        <Grid
                          item
                          // sx={{ border: "2px solid blue", borderRadius: 2 }}
                          xs={12}
                          sm={6}
                          md={4}
                          py={3}
                          key={i}
                        >
                          <Box
                            textAlign="center"
                            sx={{
                              width: 230,
                              m: "auto",
                              border: "2px solid blue",
                              borderRadius: 2,
                              p: 1,
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
          </Box>
          {/* Develper overall details settings */}
        </Box>
      </Box>
    </>
  );
};
export default Earning;
