import React from 'react';
import Image from 'next/image';
const ServiceCard = () => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md max-w-md">
      {/* Image Container */}
      <div className="flex-shrink-0">
        <Image 
          height={400}
          width={400}
          src="/service.jpg"
          alt="Healthcare professional"
          className="w-24 h-24 rounded-xl object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-6">
        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">24 Hours</h3>
          <p className="text-sm text-gray-500">services</p>
        </div>

        {/* Phone Number */}
        <div>
          <p className="text-sm font-medium text-gray-900">+00 123 456 67890</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
