import { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle";


const Features = () => {

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('features.json')
      .then(res => res.json())
      .then(data => setFeatures(data))
  }, [])

  return (
    <div className="mb-10 bg-gradient-to-r from-[#fff] to-[#dfe8fc]">
      <SectionTitle
        heading={'Key Features of HRMS Software'}
        subHeading={'HRMS software is the best solution for managing the human capital of any organisation. Because human resources software has lots of excellent time-saving features, in this section, we will point out those features:'}
      ></SectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {
          features.map(feature => <div key={feature._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={feature.image}
                alt=""
                className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{feature.name}</h2>
            </div>
          </div>)
        }

      </div>
    </div>
  );
};

export default Features;