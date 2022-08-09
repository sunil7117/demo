import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/page/Layout";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Service from "./component/page/service";
import Earning from "./component/page/Earning";
import Project from "./component/page/Project";
import Account from "./component/page/Account";
import Support from "./component/page/Support";
import Team from "./component/page/Team";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
