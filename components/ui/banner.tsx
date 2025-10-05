// AppointmentBanner.jsx
"use client"

import { useRouter } from "next/navigation";

export default function AppointmentBanner() {
  const router = useRouter()
  return (
    <div className="w-full 0 py-5 flex justify-center">
      <div className="bg-gray-100 rounded-xl  py-14 w-full  text-center">
        <h1 className="text-6xl font-medium text-gray-900 mb-5">
          Book Your Appointment Today
        </h1>
        <p className="text-gray-500 text-md mb-8">
          Fast, simple, and secure. Choose your doctor, select a time, and confirm your visit online.
        </p>
        <button onClick={()=>{
          router.push('/auth/signin')
        }} className="bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium  ">
          Schedule Now
        </button>
      </div>
    </div>
  );
}
