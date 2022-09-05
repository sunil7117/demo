import React from "react";
import Footer from "../components/footerComponent/Footer";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/navbarComponent/DashboardNavbar";
const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Dashboard;
