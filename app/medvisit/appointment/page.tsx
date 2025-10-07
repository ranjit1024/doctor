"use client";
import { DoctorAppointmentCard } from "@/components/ui/dockappoitmentCard";
import { newUser } from "@/lib/newuser";
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    newUser()
  },[])
  return (
    <div>
      <div className=" bg-gray-50 p-2  flex items-center flex-col gap-5 max-md:mb-15 justify-center">
        <DoctorAppointmentCard />
        <DoctorAppointmentCard />
        <DoctorAppointmentCard />
        <DoctorAppointmentCard />
      </div>
    </div>
  );
}
