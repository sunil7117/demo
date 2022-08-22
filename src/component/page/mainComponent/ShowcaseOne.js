import { Button, Typography, Box, Grid } from "@mui/material";
// import { BsChevronRight } from "react-icons/bs";
const ShowcaseOne = (props) => {
  const btn2 = props.value.btn2;
  // const btnIcon = props.value.btn1.btnIcon;

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
            height: { sx: "100%", sm: "100%", md: "100%" },
          }}
        >
          <Grid item xs={7} sx={{ py: 2 }}>
            <Box sx={{ pl: { xs: 3, sm: 10 } }}>
              {/*  Show case one Title settings */}
              <Typography
                component="div"
                variant="h1"
                sx={{
                  fontSize: { xs: 25, sm: 32, md: 52 },
                  fontWeight: 700,
                  color: "red",
                  mb: { xs: 1, md: 10 },
                }}
              >
                {props.value.title}
              </Typography>
              {/*  Show case one Title settings */}
              <Grid container>
                {/*  Show case one contentBox settings */}

                <Grid item xs={6} md={12}>
                  <Box
                    sx={{
                      width: { xs: 210, sm: 400, md: 600 },

                      mb: { xs: 1, md: 10 },
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        overflow: { xs: "hidden", sm: "hidden", md: "visible" },
                        height: { xs: 95, sm: 100 },
                        fontSize: { xs: 16, sm: 22 },
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
              <Grid container sx={{ mt: { xs: -2 } }} spacing={0.5}>
                {/*  Show case one buttonBox-1 settings */}

                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    size="small"
                    color={props.value.btn1.btnColor}
                    sx={{ fontSize: { xs: 10, sm: 12, md: 16 } }}
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
                      sx={{ fontSize: { xs: 10, sm: 12 } }}
                    >
                      {props.value.btn2.btnName}
                    </Button>
                  </Grid>
                )}

                {/*  Show case one buttonBox-2 settings With conditons */}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={5} sx={{}}></Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ShowcaseOne;
