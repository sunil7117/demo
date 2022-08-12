import ShowcaseOne from "./mainComponent/ShowcaseOne";
import ShowcaseTwo from "./mainComponent/ShowcaseTwo";
import index1 from "../../images/serviceindex.png";

import img from "../../images/img.png";
const Home = () => {
  const showcase1 = {
    pic: index1,
    title: "Hello, Learn Earn and Grow",
    content:
      "Websites, Applications, Ui/Ux designs, Logos, Banners,College Projects etc. at Affordable Prices.",
    btn1: { btnName: "Start Earning", btnIcon: "icon", btnColor: "primary" },
    btn2: { btnName: "Give Work", btnIcon: "icon", btnColor: "error" },
  };
  const showcase2 = {
    pic: img,
    title: "Get Work",
    content:
      "Websites, Applications, Ui/Ux designs, Logos, Banners,College Projects etc. at Affordable Prices.",
    btn1: { btnName: "Start Earning", btnIcon: "icon", btnColor: "primary" },
    btn2: { btnName: "Give Work", btnIcon: "icon", btnColor: "error" },
  };
  return (
    <>
      <ShowcaseOne value={showcase1} />
      <ShowcaseTwo value={showcase2} />
    </>
  );
};
export default Home;
