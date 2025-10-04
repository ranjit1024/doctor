"use client"

import {UpcomingDoctorAppointment} from "@/components/ui/booked";


function App() {
  return <div className=" max-md:mb-20  max-md:p-2 w-[100%] p-2  ">
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
  
        consultationType="video"
        note="Annual health checkup consultation"
        status="completed"
      />
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"

        consultationType="video"
        note="Annual health checkup consultation"
        status="completed"
      />
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
     
        consultationType="video"
        note="Annual health checkup consultation"
        status="completed"
      />
  </div>
  
}

export default App;
