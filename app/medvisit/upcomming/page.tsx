"use client"

import {UpcomingDoctorAppointment} from "@/components/ui/booked";


function App() {
  return <div className="p-2 mb-2 max-md:m-0 max-md:mb-20 max-md:p-2 w-[100%] ">
     <div className=" mb-1  p-2 gap-1 rounded flex justify-around md:hidden">
      <button className="p-2 text-md font-normal bg-blue-50 rounded-lg w-[100%]">Upcomming</button>
      <button className="p-2 text-md  w-[100%] bg-blue-50 rounded-lg ">Completed</button>
    </div>
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
       
        consultationType="video"
        note="Annual health checkup consultation"
        status="upcoming"
      />
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
     
        consultationType="video"
        note="Annual health checkup consultation"
        status="upcoming"
      />
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
  
        consultationType="video"
        note="Annual health checkup consultation"
        status="upcoming"
      />
  </div>
  
}

export default App;
