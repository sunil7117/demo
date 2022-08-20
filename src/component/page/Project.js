import { Grid, Typography, Box, Avatar } from "@mui/material";
import andr from "../../images/and1.png";
import { FaRegCheckCircle } from "react-icons/fa";
import dev from "../../images/dev.png";
const Project = () => {
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
        title: "Andriod App Development",
      },
      {
        pic: andr,
        title: "Andriod App Development",
      },
    ],
    oldData: [
      {
        pic: andr,
        title: "Andriod App Development",
      },
      {
        pic: andr,
        title: "Andriod App Development",
      },
    ],
  };
  return (
    <>
      <Box>
        <Typography variant="h2" textAlign="center">
          Projects
        </Typography>
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
      <Grid container justifyContent="space-between" columnSpacing={5} px={3}>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ fontSize: { xs: 31, md: 42 }, fontWeight: 600 }}>
            <span style={{ color: "red" }}> Old</span> Project
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
        <Grid item xs={12} sm={6}>
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
