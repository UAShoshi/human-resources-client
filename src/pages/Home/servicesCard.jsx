import React from 'react';

const ServicesCard = ({service}) => {
  const {serviceImage, serviceName, serviceDescription, servicePrice} = service;

  return (
    <div className='rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800'>
      <p className='absolute px-4 bg-black text-white rounded-lg'>{servicePrice}</p>
      <img className='w-96 rounded-md' src={serviceImage} />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{serviceName}</h2>
			<p className="dark:text-gray-800">{serviceDescription}</p>
		</div>
    <button className="btn w-full p-3 hover:bg-[#F9531D] text-white bg-[#FF902F] border-none">View Detail</button>
	</div>
    </div>
  );
};

// https://ibb.co.com/tZXvfW3
// https://ibb.co.com/MBRyQMz
// https://ibb.co.com/XYcmhqQ
// https://ibb.co.com/Fn1qpK2
// https://ibb.co.com/h2Q1msh
// https://ibb.co.com/PzR8VGv

// https://ibb.co.com/QHWV7GM
// https://ibb.co.com/thLTqpY
// https://ibb.co.com/B3HwBBk
// https://ibb.co.com/XZh3RPt
// https://ibb.co.com/y5cScmN
// https://ibb.co.com/6DmsL0X
// https://ibb.co.com/5rYRPqD
// https://ibb.co.com/GJX5MPw
// https://ibb.co.com/brjkDWF
// https://ibb.co.com/RS5tnkQ
// https://ibb.co.com/nfZ2YF1
// https://ibb.co.com/27Hy3C5

export default ServicesCard;