"use client";

import { DatePickerResponsive } from "@/components/ui/datePicker";

import { doctorData, doctorTime } from "@/lib/actions/doctor";
import { Clock, MapPin, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AppointmentSkeleton from "@/components/ui/loaderDoc";

interface TimeSlot {
  id: string;
  email: string;
  startTime: Date;
  endTime: Date;
  limit: number;
  patient: number;
}

interface sesionType {
  name: string;
  id: string;
  email: string;
  spaclist: string;
  aderess: string;
  startTime: Date;
  endTime: Date;
}
export default function Home() {
  const [data, setData] = useState<sesionType | null>(null);
  const [timeSlots, settimeSlot] = useState<TimeSlot[] | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const path = usePathname();
  useEffect(() => {
    async function response() {
      const res = await doctorData(path.split("/")[4]);
      setData(res);
    }
    response();
  }, [path]);

  useEffect(() => {
    async function response() {
      const res = await doctorTime(data?.email || "");
      console.log(res);
      settimeSlot(res);
    }
    response();
  }, [data]);

  if (data == null || timeSlots == null) {
    return (
      <div className=" p-4">
        <AppointmentSkeleton />
      </div>
    );
  }
  return (
    <div className=" p-4 h-[110vh]">
      <div>
        {/* Doctor Info - Minimal */}
        <div className="flex items-center gap-4  ">
          <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
            <span className="text-white text-3xl font-normal">
              {data?.name[0].toLocaleUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-[2.3rem] max-md:text-[2rem] max-sm:text-[1.5rem] font-semibold text-gray-900 mb-1 leading-12 max-md:leading-10">
              {data?.name}
            </h2>
            <p className="text-sm text-gray-500">{data?.spaclist}</p>
          </div>
        </div>

        {/* Appointment Details - Clean Layout */}
        <div className="space-y-4   p-2 pt-5">
          <div className="flex items-start gap-3">
            <MapPin
              className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
              strokeWidth={1.5}
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              {data?.aderess}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={1.5}
            />
            <span className="text-sm text-gray-700">
              {new Date().toDateString()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Clock
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              strokeWidth={1.5}
            />
            <span className="text-sm text-gray-700">
              {data?.startTime.toLocaleTimeString()} -{" "}
              {data?.endTime.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
      <div className=" pt-2  ">
        <DatePickerResponsive />
      </div>
      <div className="pt-4 max-sm:pt-4">
        <div className=" mx-auto  mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time Slot
          </label>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots?.map((slot) => (
              <button
                key={slot.id}
                onClick={() =>
                  setSelectedSlot(slot.startTime.toLocaleTimeString())
                }
                className={`
              px-4 py-3 rounded-lg border text-sm font-medium 
              ${
                selectedSlot === slot.startTime.toLocaleTimeString()
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
              }
            `}
              >
                {slot.startTime.toLocaleTimeString()} -{" "}
                {slot.endTime.toLocaleTimeString()}
              </button>
            ))}
          </div>
          {selectedSlot && (
            <p className="mt-4 text-sm text-gray-600">
              Selected: <span className="font-semibold">{selectedSlot}</span>
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <button
          onClick={() => {}}
          className="bg-indigo-900 w-[100%] mt-8 hover:bg-indigo-700 hover:cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-101 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
