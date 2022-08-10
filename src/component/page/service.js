import ShowcaseOne from "./mainComponent/ShowcaseOne";
import test from "../../images/test.png";

const Service = () => {
  return (
    <>
      <ShowcaseOne
        pic={test}
        title="sunil"
        content="Websites, Applications, Ui/Ux designs, Logos, Banners,College Projects etc. at Affordable Prices."
        btn1="Start Earning"
        btn2="Give Work"
      />
    </>
  );
};
export default Service;
