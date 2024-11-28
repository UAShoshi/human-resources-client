// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import '@smastrom/react-rating/style.css'
import 'swiper/css/navigation';
import SectionTitle from '../../component/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';


const Testimonials = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://human-resources-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div>
 <section>
        <SectionTitle
          subHeading={'What Our Clients Say'}
          heading={'testimonials'}
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            reviews.map(review => <SwiperSlide key={review._id}><div className="flex flex-col items-center mx-24 my-16">
              <h3 className="text-3xl capitalize text-[#FF902F] font-bold py-5">{review.name}</h3>
              <Rating
      style={{ maxWidth: 120 }}
      value={3}
      readOnly
    />
                <p className="py-8">{review.details}</p>
              </div></SwiperSlide>)
          }
      </Swiper>
      </section>      
    </div>
  );
};

export default Testimonials;