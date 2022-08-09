import { Paper, Button, Typography, Box, Grid } from "@mui/material";

const ShowcaseTwo = (props) => {
  console.log(props.pic);
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${props.pic})`,
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          minHeight: 300,
          pb: 1,
        }}
      >
        <Grid container>
          <Grid item xs={12} md={5}></Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ px: { xs: 3, sm: 8 }, py: {} }}>
              <Typography component="div" variant="h3" sx={{}}>
                {props.title}
              </Typography>
              <Grid container>
                <Grid item xs={6} md={12}>
                  <Box
                    sx={{
                      width: { xs: 200, sm: 400, md: 600 },
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        overflow: "hidden",
                        height: 85,
                        fontSize: 20,
                      }}
                    >
                      {props.content}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
              <Grid container sx={{ pt: 3 }}>
                <Grid item md={6}>
                  <Button variant="contained" size="small">
                    {props.btn1}
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button variant="contained" size="small">
                    {props.btn2}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default ShowcaseTwo;
