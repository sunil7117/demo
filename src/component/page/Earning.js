import { Button, Typography, Grid, Avatar, Box } from "@mui/material";
import { borderRadius } from "@mui/system";

import { FaRegCheckCircle } from "react-icons/fa";
import dev from "../../images/dev.png";

const Earning = () => {
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
      <Box>
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
        <Box
          sx={{
            backgroundColor: "lightblue",
            width: "95%",
            m: "auto",
          }}
        >
          <Grid container>
            {devinfo.devdetails.map((detail) => {
              return (
                <>
                  <Grid
                    item
                    // sx={{ border: "2px solid blue", borderRadius: 2 }}
                    xs={12}
                    sm={6}
                    md={4}
                    p={2}
                  >
                    <Box
                      textAlign="center"
                      sx={{
                        width: 250,
                        m: "auto",
                        border: "2px solid blue",
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 20, fontWeight: 600, color: "red" }}
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
    </>
  );
};
export default Earning;
