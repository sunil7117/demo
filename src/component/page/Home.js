import ShowcaseOne from "./mainComponent/ShowcaseOne";
import ShowcaseTwo from "./mainComponent/ShowcaseTwo";
import About1 from "../../images/about1.png";
import About2 from "../../images/about2.png";
const Home = () => {
  return (
    <>
      <ShowcaseOne
        pic={About1}
        title="sunil"
        content="Websites, Applications, Ui/Ux designs, Logos, Banners,College Projects etc. at Affordable Prices."
        btn1="Start Earning"
        btn2="Give Work"
      />
      <ShowcaseTwo
        pic={About2}
        title="sunil"
        content="Websites, Applications, Ui/Ux designs, Logos, Banners,College Projects etc. at Affordable Prices."
        btn1="Start Earning"
        btn2="Give Work"
      />
    </>
  );
};
export default Home;
