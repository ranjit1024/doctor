"use client"
import AppointmentCard from "@/components/ui/booked";
import { usePathname, useRouter } from "next/navigation";
function App() {
  const path = usePathname();
  const router = useRouter();
  return <div className=" max-md:mb-20  max-md:p-2 w-[100%] p-2  ">
    <div className=" mb-1  p-2 gap-1 rounded flex justify-around md:hidden">
       <button onClick={()=>{
        router.push('/medvisit/upcomming')
      }} className={`${path.includes('upcomming')?'p-2 text-md font-medium bg-blue-50 rounded-lg w-[100%]':'p-2 text-md font-normal bg-white rounded-lg w-[100%]'}`}>Upcomming</button>
      <button onClick={()=>{
        router.push('/medvisit/completed')
      }} className={`${path.includes('completed')?'p-2 text-md font- bg-blue-50 rounded-lg w-[100%]':'p-2 text-md font-normal bg-white rounded-lg w-[100%]'}`}>Completed</button>
    </div>

      <AppointmentCard
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
        timeIndicator="in 1 day"
        note="Annual health checkup consultation"
        status="completed"
      />
      <AppointmentCard
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
        timeIndicator="in 1 day"
        note="Annual health checkup consultation"
        status="completed"
      />
      <AppointmentCard
        doctorName="Dr. Michael Chen"
        specialty="General Physician"
        date="Mon, Oct 6"
        timeIndicator="in 1 day"
        note="Annual health checkup consultation"
        status="completed"
      />
  </div>
  
}

export default App;
