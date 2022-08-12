import { Box, Paper, Typography } from "@mui/material";

const ServiceBox = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 200,
            border: "blue 2px solid",
          },
        }}
      >
        <Paper elevation={3} sx={{ backgroundColor: "#E9ECEF", p: 3 }}>
          <Box>
            <Typography
              component="img"
              src={props.data.pic}
              sx={{ width: 80 }}
            />
          </Box>
          <Box>
            <Typography
              component="div"
              variant="h5"
              sx={{ display: "inline", color: "red", fontWeight: 600 }}
            >
              {props.data.title1}
            </Typography>
            <Typography
              component="div"
              variant="h5"
              sx={{ display: "inline", fontWeight: 600 }}
            >
              {props.data.title2}
            </Typography>
          </Box>
          <Box>
            <Typography component="p">{props.data.content}</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default ServiceBox;
