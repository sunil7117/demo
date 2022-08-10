import ShowcaseOne from "./mainComponent/ShowcaseOne";
import ShowcaseTwo from "./mainComponent/ShowcaseTwo";
import About1 from "../../images/about1.png";

import img from "../../images/img.png";
const Home = () => {
  const showcase1 = {
    pic: About1,
    title: "component1",
    content:
      "Websites, Applications, Ui/Ux designs, Logos, Banners,College Projects etc. at Affordable Prices.",
    btn1: "Start Earning",
    btn2: "Give Work",
  };
  const showcase2 = {
    pic: img,
    title: "component2",
    content:
      "Websites, Applications, Ui/Ux designs, Logos, Banners,College Projects etc. at Affordable Prices.",
    btn1: "Start Earning",
    btn2: "Give Work",
  };
  return (
    <>
      <ShowcaseOne value={showcase1} />
      <ShowcaseTwo value={showcase2} />
    </>
  );
};
export default Home;
