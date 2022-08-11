import { Button, Typography, Box, Grid } from "@mui/material";

const ShowcaseTwo = (props) => {
  // console.log(props.value.pic);
  return (
    <>
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${props.value.pic})`,
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          height: { xs: 250, sm: 400, md: 550 },
        }}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            height: { sx: "50%", sm: "75%", md: "100%" },
          }}
        >
          <Grid item xs={6} sx={{ backgroundColor: "red" }}>
            1
          </Grid>
          <Grid item xs={6} sx={{}}>
            <Box sx={{}}>
              <Typography
                component="div"
                variant="h1"
                sx={{ fontSize: { xs: 32, sm: 42, md: 52 } }}
              >
                {props.value.title}
              </Typography>
              <Grid container>
                <Grid item xs={6} md={12}>
                  <Box
                    sx={{
                      width: { xs: 200, sm: 300, md: 500 },
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        overflow: { xs: "hidden", sm: "hidden", md: "visible" },
                        height: { xs: 85, sm: 100 },
                        fontSize: { xs: 18, sm: 20 },
                        border: "5px solid red",
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
                  <Button
                    variant="contained"
                    size="small"
                    color={props.value.btn1.btnColor}
                    sx={{ fontSize: { xs: 12, sm: 14 } }}
                  >
                    {props.value.btn1.btnName}
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="outlined"
                    size="small"
                    color={props.value.btn2.btnColor}
                    sx={{ fontSize: { xs: 12, sm: 14 } }}
                  >
                    {props.value.btn2.btnName}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ShowcaseTwo;
