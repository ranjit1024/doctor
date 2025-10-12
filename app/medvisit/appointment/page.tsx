"use client";
import { DoctorAppointmentCard } from "@/components/ui/dockappoitmentCard";
import { newUser } from "@/lib/actions/newuser";
import { useEffect, useState } from "react";
import { doctorList } from "@/lib/actions/doctor";
interface sesionType {
    name: string;
    id: string;
    email: string;
    spaclist: string;
    aderess: string;
    startTime: Date;
    endTime: Date;
}[]
export default function Home() {
  const [docData, setDocData] = useState<sesionType[]|undefined>(undefined);
  useEffect(()=>{
    async function response() {
      const res = await doctorList();
      setDocData(res)
    }
    response()
  },[])
  useEffect(()=>{
    newUser()
  },[])
  return (
    <div>
      <div className=" bg-gray-50 p-2  flex items-center flex-col gap-5 max-md:mb-15 justify-center">

        {docData?.map((item)=>{
          return <DoctorAppointmentCard id={item.id}  name={item.name} address={item.aderess} startTime={item.startTime.toLocaleTimeString()} endTime={item.endTime.toLocaleTimeString()} />
        })}
      </div>
    </div>
  );
}
