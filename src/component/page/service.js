import ShowcaseOne from "./mainComponent/ShowcaseOne";
import service from "../../images/serviceindex.png";
import ServiceBox from "./serviceComponent/ServiceBox";
// images
import andriod1 from "../../images/and1.png";
const Service = () => {
  const showcase1 = {
    pic: service,
    title: "CodingSick",
    content:
      "provding the best costumer service. This is the plateform where you can develop your dream projects. we are here to do your work.",
    btn1: { btnName: "Start Earning", btnIcon: "icon", btnColor: "primary" },
    btn2: { btnName: "Give Work", btnIcon: "icon", btnColor: "error" },
  };
  const servicepacks = [
    {
      pic: andriod1,
      title1: "App",
      title2: " Development",
      content:
        "We can create any kind of application according to your requirement.",
    },
  ];
  return (
    <>
      <ShowcaseOne value={showcase1} />

      {servicepacks.map((servicepack) => {
        return (
          <>
            <ServiceBox data={servicepack} />
          </>
        );
      })}
    </>
  );
};
export default Service;
