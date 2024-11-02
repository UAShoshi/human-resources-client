import Bannar from "./Bannar";
import FAQ from "./FAQ";
import Features from "./Features";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Services></Services>
      <Testimonials></Testimonials>
      <Features></Features>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;