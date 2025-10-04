"use client"

import {UpcomingDoctorAppointment} from "@/components/ui/booked";


function App() {
  return <div className="m-2 ">
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
        time="2:30 PM"
        consultationType="video"
        note="Annual health checkup consultation"
        status="upcoming"
      />
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
        time="2:30 PM"
        consultationType="video"
        note="Annual health checkup consultation"
        status="upcoming"
      />
    <UpcomingDoctorAppointment
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
        time="2:30 PM"
        consultationType="video"
        note="Annual health checkup consultation"
        status="upcoming"
      />
  </div>
  
}

export default App;
