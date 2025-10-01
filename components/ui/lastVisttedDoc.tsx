import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const LatestVisitedDoctor = () => {
  const doctors = [
    { id: 1, image: '/doc1.jpg', alt: 'Doctor 1' },
    { id: 2, image: '/doc2.jpg', alt: 'Doctor 2' },
    { id: 3, image: '/doc1.jpg', alt: 'Doctor 3' },
    { id: 4, image: '/doc2.jpg', alt: 'Doctor 4' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-80">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Latest Visited<br />Doctor
        </h2>
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <ArrowUpRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Doctor Images */}
      <div className="flex items-center -space-x-3 mb-4">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className="relative"
            style={{ zIndex: doctors.length - index }}
          >
            <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-500">
        More than 4k doctors at your services
      </p>
    </div>
  );
};

export default LatestVisitedDoctor;
