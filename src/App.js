import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/service";
import Earning from "./page/Earning";
import Project from "./page/Project";
import Account from "./page/Account";
import Support from "./page/Support";
import Team from "./page/Team";
import React from "react";
import Dashboard from "./layout/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="account" element={<Account />} />
            <Route path="support" element={<Support />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
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
