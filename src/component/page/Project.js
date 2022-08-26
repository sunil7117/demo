import { Grid, Typography, Box, Avatar } from "@mui/material";
import ShowcaseOne from "./mainComponent/ShowcaseOne";
import About1 from "../../images/about1.png";
import andr from "../../images/and1.png";
import { FaRegCheckCircle } from "react-icons/fa";
import dev from "../../images/dev.png";
import SigninSignup from "../loginSinginComponent/SigninSignup";
const Project = () => {
  const showcase1 = {
    pic: About1,
    title: "Start Your Project",
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

  const projectData = {
    devName: "Dev",
    image: dev,
    newData: [
      {
        pic: andr,
        title: "Andriod App Development",
      },
      {
        pic: andr,
        title: "E-com / FlipZone",
      },
      {
        pic: andr,
        title: "Project Update",
      },
    ],
    oldData: [
      {
        pic: andr,
        title: "codingsick.com / wordpress site",
      },
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
        {/*Project  Dashboard   */}
        <Box>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: 32, md: 52 },
              fontWeight: 600,
            }}
          >
            <span style={{ color: "red" }}>Project </span>Dashboard
          </Typography>
          <Typography
            textAlign="center"
            sx={{ fontSize: { xs: 15, md: 18 }, fontWeight: 300 }}
          >
            This is our earning Dashboard/protfolio.
          </Typography>
        </Box>
        {/*Project Dashboard   */}
        <Box
          sx={{
            backgroundColor: "green",
            display: "flex",
            alignItems: "center",
            m: "auto",
            width: "95%",
          }}
        >
          <Avatar alt="devloper" src={projectData.image} sx={{ p: 1 }} />
          <Typography
            component="div"
            variant="h4"
            sx={{ p: 1, color: "white" }}
          >
            {projectData.devName}
          </Typography>
          <Box sx={{ p: 1, color: "white" }}>
            <FaRegCheckCircle />
          </Box>
        </Box>
      </Box>
      <Grid container justifyContent="space-around" columnSpacing={5} px={3}>
        <Grid item xs={10} sm={5}>
          <Typography sx={{ fontSize: { xs: 31, md: 42 }, fontWeight: 600 }}>
            <span style={{ color: "red" }}> Latest</span> Project
          </Typography>
          <Box sx={{ width: "100%", p: 0.3 }}>
            {projectData.newData.map((Data) => {
              return (
                <>
                  <Box
                    sx={{
                      backgroundColor: "blue",
                      display: "flex",
                      flexGrow: 3,
                      alignItems: "center",
                      my: 2,
                      py: 1,
                    }}
                  >
                    <Typography
                      component="img"
                      src={Data.pic}
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                      }}
                    />
                    <Box pl={2}>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: 13, sm: 16, md: 22 },
                          fontWeight: 300,
                        }}
                      >
                        {Data.title}
                      </Typography>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={10} sm={5}>
          <Typography sx={{ fontSize: { xs: 31, md: 42 }, fontWeight: 600 }}>
            <span style={{ color: "red" }}> Old</span> Project
          </Typography>
          <Box sx={{ width: "100%", p: 0.3 }}>
            {projectData.oldData.map((Data) => {
              return (
                <>
                  <Box
                    sx={{
                      backgroundColor: "blue",
                      display: "flex",
                      flexGrow: 3,
                      alignItems: "center",
                      my: 2,
                      py: 1,
                    }}
                  >
                    <Typography
                      component="img"
                      src={Data.pic}
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                      }}
                    />
                    <Box pl={2}>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: 13, sm: 16, md: 22 },
                          fontWeight: 300,
                        }}
                      >
                        {Data.title}
                      </Typography>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Project;
