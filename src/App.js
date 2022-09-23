import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardBeforLogin from "./layout/DashboardBeforLogin";
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/service";
import Earning from "./page/Earning";
import Project from "./page/Project";
import Account from "./page/Account";
import Support from "./page/Support";
import Team from "./page/Team";
import React from "react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardBeforLogin />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="earning" element={<Earning />} />
            <Route path="project" element={<Project />} />
            <Route path="account" element={<Account />} />
            <Route path="support" element={<Support />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
