import ShowcaseOne from "./mainComponent/ShowcaseOne";
import test from "../../images/test.png";

const Service = () => {
  const showcase1 = {
    pic: test,
    title: "CodingSick",
    content:
      "provding the best costumer service. This is the plateform where you can develop your dream projects. we are here to do your work.",
    btn1: { btnName: "Start Earning", btnIcon: "icon", btnColor: "primary" },
    btn2: { btnName: "Give Work", btnIcon: "icon", btnColor: "error" },
  };
  return (
    <>
      <ShowcaseOne value={showcase1} />
    </>
  );
};
export default Service;
