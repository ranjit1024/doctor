"use client"

import { DatePickerResponsive } from "@/components/ui/datePicker"
import TimeSelect from "@/components/ui/time"
import { Clock,MapPin,Calendar } from "lucide-react"
export default function Home(){
    return <div className=" p-4 h-[110vh]">
        <div>
              {/* Doctor Info - Minimal */}
      <div className="flex items-center gap-4  ">
        <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
          <span className="text-white text-3xl font-normal">S</span>
        </div>
        <div>
          <h2 className="text-[2.3rem] max-md:text-[2rem] max-sm:text-[1.5rem] font-semibold text-gray-900 mb-1 leading-12 max-md:leading-10">Dr. Sarah Johnson</h2>
          <p className="text-sm text-gray-500">Cardiologist</p>
        </div>
      </div>

      {/* Appointment Details - Clean Layout */}
      <div className="space-y-4   p-2 pt-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
          <span className="text-sm text-gray-700 leading-relaxed">City Hospital, Block A, Room 302</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
          <span className="text-sm text-gray-700">Sat Oct 04 2025</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
          <span className="text-sm text-gray-700">10:00 AM - 11:00 AM</span>
        </div>
      </div>
        </div>
        <div className=" pt-2  ">
        <DatePickerResponsive/>
        </div>
        <div className="pt-2 max-sm:pt-4">
          <TimeSelect/>
        </div>
        <div className="flex justify-center items-center w-[100%]">

        <button
      className="bg-indigo-900 w-[100%] mt-8 hover:bg-indigo-700 hover:cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-101 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Pay ₹10
    </button>
        </div>
    </div>
}