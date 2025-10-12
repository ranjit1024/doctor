"use client";
import { DoctorAppointmentCard } from "@/components/ui/dockappoitmentCard";
import { newUser } from "@/lib/actions/newuser";
import { useEffect, useState } from "react";
import { doctorList } from "@/lib/actions/doctor";
export default function Home() {
  const [docData, setDocDate] = useState()
  useEffect(()=>{
    async function response() {
      const res = await doctorList();
      console.log(res)
    }
    response()
  },[])
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
