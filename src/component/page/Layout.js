import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Navbar />
        </Box>
        <Box sx={{}}>
          <Outlet />
        </Box>

        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
export default Layout;
