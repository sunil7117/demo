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
          backgroundPosition: "content-box",
          mb: 2,
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
          <Grid item xs={7} sx={{ py: 2 }}>
            <Box sx={{ pl: { xs: 3, sm: 10 } }}>
              <Typography
                component="div"
                variant="h1"
                sx={{ fontSize: { xs: 32, sm: 32, md: 42 }, fontWeight: 600 }}
              >
                {props.value.title}
              </Typography>
              <Grid container>
                <Grid item xs={6} md={12}>
                  <Box
                    sx={{
                      background: "red",
                      width: { xs: 210, sm: 400, md: 600 },
                      pb: 1,
                    }}
                  >
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        overflow: { xs: "hidden", sm: "hidden", md: "visible" },
                        height: { xs: 95, sm: 100 },
                        fontSize: { xs: 16, sm: 16 },
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
                    sx={{ fontSize: { xs: 10, sm: 12, md: 16 } }}
                  >
                    {props.value.btn1.btnName}
                    {/* {btnIcon === undefined ? "" : <btnIcon />} */}
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
          <Grid item xs={5} sx={{}}></Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ShowcaseOne;
