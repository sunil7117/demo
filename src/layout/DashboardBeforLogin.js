import React from "react";
import Navbar from "../components/navbarComponent/Navbar";
import Footer from "../components/footerComponent/Footer";
import { Outlet } from "react-router-dom";
const DashboardBeforLogin = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default DashboardBeforLogin;
