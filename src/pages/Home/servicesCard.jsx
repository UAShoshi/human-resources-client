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

export default ServicesCard;