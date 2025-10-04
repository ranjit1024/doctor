import React from 'react';

 export const DoctorAppointmentCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-md:relative">
       <div className='flex justify-end -mb-3 absolute top-0 right-0 md:hidden'>
        <span className="bg-green-100 max-md:text-xs    text-green-800 text-xs font-semibold px-3 py-1 max-md:w-fit rounded">
          ₹10 Booking fee
        </span>
        </div>
      {/* Doctor Info Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full max-md:w-12 max-md:h-12 max-md:rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-semibold">
            S
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Dr. Sarah Johnson</h2>
            <p className="text-gray-600 text-sm">Cardiologist</p>
          </div>
            
        </div>
        
        {/* Booking Fee Badge */}
     
        <span className="bg-green-100 max-md:text-xs max-md:mt-2 max-md:hidden  text-green-800 text-xs font-semibold px-3 py-1 max-md:w-fit rounded-full">
          ₹10 Booking fee
        </span>

      
        
      </div>

      {/* Appointment Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-gray-700">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">City Hospital, Block A, Room 302</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">{new Date().toDateString()}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">10:00 AM - 11:00 AM</span>
        </div>
        
      </div>

      {/* Book Appointment Button */}
      <button className="w-full hover:cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorAppointmentCard;
