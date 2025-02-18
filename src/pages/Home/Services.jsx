import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import SectionTitle from "../../component/SectionTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://human-resources-server.vercel.app/hrServices')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <SectionTitle
      heading={"Services Section"} subHeading={"The HR Services section showcases our key offerings designed to enhance and support human resource functions within your organization."}>
      </SectionTitle>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          services.map(service => <ServicesCard
            key={service._id}
            service={service}
          ></ServicesCard>)
        }
      </div>
    </div>
  );
};
// https://ibb.co.com/TrDzn38
// https://ibb.co.com/BfSpPnj
// https://ibb.co.com/tL4bkv3
// https://ibb.co.com/sbTW8t3
// https://ibb.co.com/FJCk0j9
// https://ibb.co.com/nj08t2t
export default Services;