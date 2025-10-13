"use client";
import { DoctorAppointmentCard } from "@/components/ui/dockappoitmentCard";
import { newUser } from "@/lib/actions/newuser";
import { useEffect, useState } from "react";
import { doctorList } from "@/lib/actions/doctor";
import DoctorAppointmentCardSkeleton from "@/components/ui/skeltonLoader";
interface sesionType {
  name: string;
  id: string 
  email: string;
  spaclist: string;
  aderess: string;
  startTime: Date;
  endTime: Date;
}
[];
export default function Home() {
  const [docData, setDocData] = useState<sesionType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function response() {
      setLoading(true);
      const res = await doctorList();
      setDocData(res);
      setLoading(false)
    }
    response();
  }, []);
  useEffect(() => {
    newUser();
  }, []);

  return (
    <div>
      <div className=" bg-gray-50 p-2  flex items-center flex-col gap-5 max-md:mb-15 justify-center">
       {
        loading?
        <div className="min-h-screen bg-gray-50 p-4 space-y-4">
        <DoctorAppointmentCardSkeleton/>
        <DoctorAppointmentCardSkeleton/>
        <DoctorAppointmentCardSkeleton/>
        <DoctorAppointmentCardSkeleton/>
        </div>:null
       }
        {docData?.map((item) => 
           {
            return (<DoctorAppointmentCard
              email={item.email}
              key={item.id} // Use item.id instead of index for better performance
              id={item.id}
              name={item.name}
              address={item.aderess}
              startTime={item.startTime.toLocaleTimeString()}
              endTime={item.endTime.toLocaleTimeString()}
            />)
           }
           )
           
        }
      </div>
    </div>
  );
}
