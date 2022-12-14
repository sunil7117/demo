import React from "react";
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
          // backgroundPosition: "center center",
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
          <Grid item xs={7} sx={{}}>
            <Box sx={{ pl: { xs: 3, sm: 10 }, py: 1 }}>
              <Grid container>
                {/*  Show case one Title settings */}
                <Grid item xs={12} md={12} sx={{ py: { sm: 3 } }}>
                  <Typography
                    component="div"
                    variant="h1"
                    sx={{
                      fontSize: { xs: 24, sm: 32, md: 52 },
                      fontWeight: 700,
                      color: "red",
                    }}
                  >
                    {props.value.title}
                  </Typography>
                  {props.children}
                </Grid>
                {/*  Show case one Title settings */}
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
          <Grid item xs={5} sx={{}}></Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ShowcaseOne;
