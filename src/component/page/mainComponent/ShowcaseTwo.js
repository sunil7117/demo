import { Button, Typography, Box, Grid } from "@mui/material";

const ShowcaseTwo = (props) => {
  console.log(props.value.pic);
  return (
    <>
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${props.value.pic})`,
          backgroundSize: "100%",
          height: "90vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            height: { sx: "50%", sm: "75%", md: "100%" },
          }}
        >
          <Grid item xs={12} md={5} sx={{}}>
            <Box sx={{ px: { xs: 3, sm: 8 }, py: {} }}>
              <Typography component="div" variant="h3" sx={{}}>
                {props.value.title}
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
                      {props.value.content}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
              <Grid container sx={{ pt: 1 }} spacing={0.5}>
                <Grid item xs={12} md={6}>
                  <Button variant="contained" size="small">
                    {props.value.btn1}
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button variant="contained" size="small">
                    {props.value.btn2}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{}}></Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ShowcaseTwo;
