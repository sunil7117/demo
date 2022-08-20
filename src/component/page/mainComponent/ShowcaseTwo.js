import { Button, Typography, Box, Grid } from "@mui/material";

const ShowcaseTwo = (props) => {
  const btn2 = props.value.btn2;
  // console.log(props.value.pic);
  return (
    <>
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${props.value.pic})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "content-box",
          backgroundRepeat: "no-repeat",
          height: { xs: 250, sm: 400, md: 550 },
        }}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            // background: "blue",
            height: { sx: "100%", sm: "100%", md: "100%" },
          }}
        >
          <Grid item xs={5} sx={{}}>
            1
          </Grid>
          <Grid item xs={7} sx={{ py: 2 }}>
            <Box sx={{ pr: { xs: 3, sm: 8 } }}>
              <Typography
                component="div"
                variant="h1"
                textAlign="center"
                sx={{
                  fontSize: { xs: 25, sm: 32, md: 52 },
                  fontWeight: 700,
                  color: "red",
                }}
              >
                {props.value.title}
              </Typography>
              <Grid container>
                <Grid item xs={6} md={12}>
                  <Box
                    sx={{
                      width: { xs: 200, sm: 300, md: 600 },
                      pb: 1,
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        overflow: {
                          xs: "hidden",
                          sm: "hidden",
                          md: "visible",
                        },
                        height: { xs: 95, sm: 100 },
                        fontSize: { xs: 16, sm: 22 },
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
                    sx={{ fontSize: { xs: 11, sm: 14, md: 16 } }}
                  >
                    {props.value.btn1.btnName}
                  </Button>
                </Grid>
                {btn2 === undefined ? (
                  ""
                ) : (
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="outlined"
                      size="small"
                      color={props.value.btn2.btnColor}
                      sx={{ fontSize: { xs: 10, sm: 12 } }}
                    >
                      {props.value.btn2.btnName}
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ShowcaseTwo;
