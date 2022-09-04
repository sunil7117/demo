import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import aakash from "../images/akash.webp";
import dev from "../images/desi.webp";

const Team = () => {
  const developerDetailsDesktop = [
    {
      Name: "Aakash",
      roll: "App Developer",
      details:
        "I am Aakash and I better known as lead the team of Coding Sick. In this platform We are providing best digital services solution like 1. app development 2. Website development, 3. Logo design, 4. Digital visiting card , 5. WordPress Site 6. Domain , 7. Hosting and developer error problem . Our goal is to push the world to ensure the benefits of technology that you can widely grow your business in Covid-19 . If you are fresher or expert developer then you can join us and learn and earn more .Just come together and push your skill to new revolution world.if you have any business/idea and you want to take your business/idea online then contact us : CodingSick@gmail.com",
      pic: aakash,
    },
    {
      Name: "Dev",
      roll: "Web Designer",
      details:
        "I am Deva and I better known as lead the team of UI/UX Designer in codingSick platform. Experienced Interface Specialist with a demonstrated history of working in the computer software industry. Skilled in UI/UX Designing ,Engineering, Communication, Android Design, Web Development etc. Strong information technology professional with a Diploma focused in Computer Science Engineering. In this platform We are providing best digital services solution. contact us : CodingSick@gmail.com",
      pic: dev,
    },
    {
      Name: "Sunil",
      roll: "Web developer",
      details:
        "I am Sunil and I better known as lead the team of web developer in CodingSick platform. In this platform We are providing best digital services solution like 1. app development 2. Website development, 3. Logo design, 4. Digital visiting card , 5. WordPress Site 6. Domain , 7. Hosting and developer error problem . Our goal is to push the world to ensure the benefits of technology that you can widely grow your business in Covid-19 . If you are fresher or expert developer then you can join us and learn and earn more .Just come together and push your skill to new revolution world. if you have any business/idea and you want to take your business/idea online then contact us : CodingSick@gmail.com",
    },
  ];
  const developerDetailsMobile = [
    {
      Name: "Aakash",
      roll: "App Developer",
      pic: aakash,
      details: `i there , I am Aakash and I better known as lead the team of CodingSick. In this platform We are providing best digital services solution like'\n'
      1.one is good. 
      Our goal is to push the world to ensure the benefits of technology that you can widely grow your business in Covid-19 . If you are fresher or expert developer then you can join us and learn and earn more .Just come together and push your skill to new revolution world. if you have any business/idea and you want to take your business/idea online then contact us : CodingSick@gmail.com`,
    },
    {
      Name: "Sunil",
      roll: "App Developer",
      pic: aakash,
      details: "sunil sunil sunil sunil",
    },
  ];
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
        >
          {developerDetailsDesktop.map((team, i) => {
            return (
              <SwiperSlide key={i}>
                <Box>
                  <Grid container py={4}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                      <Box sx={{ width: "100%" }}>
                        <Box sx={{ pl: 2 }}>
                          <Typography sx={{ fontSize: 32, fontWeight: "bold" }}>
                            {team.Name}
                          </Typography>
                          <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                            {team.roll}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            height: "300px",
                          }}
                        >
                          <Box width="70%">
                            <Typography p={2}>{team.details}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "30%",
                              height: "100%",
                            }}
                          >
                            <Typography
                              component="img"
                              src={team.pic}
                              sx={{ width: "100%", height: "80%" }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box py={2} sx={{ display: { xs: "block", md: "none" } }}>
        {developerDetailsMobile.map((team, i) => {
          return (
            <Accordion
              key={i}
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${i}` ? <RemoveIcon /> : <AddIcon />
                }
                id={`panel${i}a-header`}
                aria-controls={`panel${i}a-header`}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                    }}
                  >
                    <Typography
                      component="img"
                      src={team.pic}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    ></Typography>
                  </Box>
                  <Box sx={{ ml: 3 }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {team.Name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 18,
                      }}
                    >
                      {team.roll}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{team.details}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </>
  );
};
export default Team;
