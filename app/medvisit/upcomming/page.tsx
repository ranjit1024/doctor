"use client"

import {UpcomingDoctorAppointment} from "@/components/ui/booked";


function App() {
  return <div className="p-2 mb-2 max-md:m-0 max-md:mb-20 max-md:p-2 w-[100%] ">
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
