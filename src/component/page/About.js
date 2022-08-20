import ShowcaseOne from "./mainComponent/ShowcaseOne";
import ShowcaseTwo from "./mainComponent/ShowcaseTwo";
import About1 from "../../images/about1.png";
import About2 from "../../images/about2.png";

const About = () => {
  const showcase1 = {
    pic: About1,
    title: "CodingSick",
    content:
      "provding the best costumer service. This is the plateform where you can develop your dream projects. we are here to do your work.",
    btn1: {
      btnName: "Learn More",
      btnIcon: "BsChevronRight",
      btnColor: "primary",
    },
  };
  const showcase2 = {
    pic: About2,
    title: "Our project",
    content:
      "provding the best costumer service. This is the plateform where you can develop your dream projects. we are here to do your work.",
    btn1: { btnName: "Click Here", btnIcon: "icon", btnColor: "primary" },
    // btn2: { btnName: "Give Work", btnIcon: "icon", btnColor: "error" },
  };
  return (
    <>
      <ShowcaseOne value={showcase1} />
      <ShowcaseTwo value={showcase2} />
    </>
  );
};
export default About;
