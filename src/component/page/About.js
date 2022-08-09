import { Paper, Button, Typography, Box, Grid } from "@mui/material";
import About1 from "../../images/about1.png";
import { FaChevronRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${About1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box sx={{ px: 12, py: 5 }}>
              <Typography component="div" variant="h2" sx={{}}>
                codingsick
              </Typography>
              <Box>
                <Typography
                  component="div"
                  variant="p"
                  sx={{ py: 5, fontSize: 20 }}
                >
                  provding the best costumer service. This is the plateform
                  where you can develop your dream projects. we are here to do
                  your work.
                </Typography>
              </Box>
              <Button variant="contained" endIcon={<FaChevronRight />}>
                Send
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            w
          </Grid>
        </Grid>
        {/*  */}
      </Paper>
    </>
  );
};
export default About;
