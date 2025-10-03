
export default function MobileAppointmentBanner() {
  return (
    <div className="w-full 0  flex justify-center p-1">
      <div
      className="bg-green-50 grid grid-cols-[100%] rounded-xl w-[100%] p-10   text-center">
           
        <div>
        <h1 className="text-3xl w-[100%] font-medium text-start text-gray-900 ">
          Book Your 
        </h1>
        <h1 className="text-3xl  w-[100%] font-medium text-start text-gray-900 mb-5">
          Appointment Today
        </h1>
        <p className="text-gray-500 text-md mb-8 text-start">
          Fast, simple, and secure. Choose your doctor, select a time, and confirm your visit online.
        </p>
        <div className="text-start">
        <button className="bg-indigo-600  hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium  ">
          Schedule Now
        </button>
        </div>
        </div>
        <div className="flex justify-center items-center w-[100%] ">
            
        </div>
      </div>
    </div>
  );
}
