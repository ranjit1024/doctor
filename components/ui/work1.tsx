import React from 'react';


const BookAppointmentButton =  ({title,subtitle,order}:{
  title:string,
  subtitle:string,
  order:number
}) => {
  return (
    <button
     
      className={`
        px-7 py-4
        pr-20 
        bg-white 
        text-gray-900 
        font-medium 
        text-sm
        rounded-2xl
        border border-gray-200
        shadow-sm
        hover:shadow-md 
        hover:border-gray-300
        
        transition-all duration-200
     
      
        
      `}
    >
      <div className="flex flex-col items-start relative">
        <span className="font-semibold ">{title}</span>
        <span className="text-xs text-gray-500 mt-2">
          {subtitle}
        </span>
        <span className='absolute -top-5 -right-22   bg-indigo-600 rounded-full w-5 text-white justify-center h-5  flex'>
          
          <p>{order}</p>
          </span>
      </div>
    </button>
  );
};

export default BookAppointmentButton;
