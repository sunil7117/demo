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
          backgroundRepeat: "no-repeat",
          mb: 2,
          height: { xs: 250, sm: 400, md: 550 },
        }}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            height: "100%",
          }}
        >
          <Grid item xs={5} sx={{}}></Grid>
          <Grid item xs={7} sx={{ py: 2 }}>
            <Box sx={{ pr: { xs: 3, sm: 8 } }}>
              <Grid container>
                {/*  Show case two Title settings */}
                <Grid item xs={12} md={12}>
                  <Typography
                    component="div"
                    variant="h1"
                    textAlign="center"
                    sx={{
                      fontSize: { xs: 24, sm: 32, md: 52 },
                      fontWeight: 700,
                      color: "red",
                    }}
                  >
                    {props.value.title}
                  </Typography>
                </Grid>
                {/*  Show case Two Title settings */}
                {/*  Show case one contentBox settings */}
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    display: "flex",
                    py: { xs: 1, sm: 4 },
                  }}
                >
                  <Box>
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        fontSize: { xs: 14, sm: 16, md: 16 },
                      }}
                    >
                      {props.value.content}
                    </Typography>
                  </Box>
                </Grid>
                {/*  Show case one contentBox settings */}
                {/*  dummy below */}
                <Grid item xs={6}></Grid>
              </Grid>
              <Grid container sx={{ py: { sm: 3 } }}>
                {/*  Show case one buttonBox-1 settings */}
                <Grid item xs={12} md={6} sx={{ mb: 0.5 }}>
                  <Button
                    variant="contained"
                    size="small"
                    color={props.value.btn1.btnColor}
                    sx={{ fontSize: { xs: 9, sm: 12, md: 16 } }}
                  >
                    {props.value.btn1.btnName}
                  </Button>
                </Grid>

                {/*  Show case one buttonBox-1 settings */}
                {/*  Show case one buttonBox-2 settings With conditons */}
                {btn2 === undefined ? (
                  ""
                ) : (
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="outlined"
                      size="small"
                      color={props.value.btn2.btnColor}
                      sx={{ fontSize: { xs: 9, sm: 12, md: 16 } }}
                    >
                      {props.value.btn2.btnName}
                    </Button>
                  </Grid>
                )}
                {/*  Show case one buttonBox-2 settings With conditons */}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ShowcaseTwo;
