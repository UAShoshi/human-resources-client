import Bannar from "./Bannar";
import FAQ from "./FAQ";
import Features from "./Features";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Human Resource | Home</title>
      </Helmet>
      <Bannar></Bannar>
      <Services></Services>
      <Testimonials></Testimonials>
      <Features></Features>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;