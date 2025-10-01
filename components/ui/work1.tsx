import React from 'react';


const BookAppointmentButton =  () => {
  return (
    <button
     
      className={`
        px-7 py-4
        pr-30 
        bg-white 
        text-gray-900 
        font-medium 
        text-sm
        rounded-md 
        border border-gray-200
        shadow-sm
        hover:shadow-md 
        hover:border-gray-300
        
        transition-all duration-200
     
      
        
      `}
    >
      <div className="flex flex-col items-start">
        <span className="font-semibold">Book Appointment</span>
        <span className="text-xs text-gray-500 mt-0.5">
          Schedule online in 2 minutes
        </span>
      </div>
    </button>
  );
};

export default BookAppointmentButton;
