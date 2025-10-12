"use client";
import React from "react";
import { Clock, MapPin, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { isVerified } from "@/lib/actions/otp";

export const DoctorAppointmentCard = ({
  name,
  address,
  startTime,
  endTime,
  id
}: {
  id: string;
  name: string;
  address: string;
  startTime: string;
  endTime: string;
}) => {
  const router = useRouter();
  return (
    <div className="w-full mx-auto mb-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      {/* Doctor Info - Minimal */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gray-900 rounded-2xl max-md:w-12 max-md:h-12 max-md:rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-light max-md:text-lg ">
            {name[0].toLocaleUpperCase()}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">{name}</h2>
          <p className="text-sm text-gray-500">{}</p>
        </div>
      </div>

      {/* Appointment Details - Clean Layout */}
      <div className="space-y-4 mb-8 pb-8 border-b border-gray-100">
        <div className="flex items-start gap-3">
          <MapPin
            className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
            strokeWidth={1.5}
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            {address}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar
            className="w-5 h-5 text-gray-400 flex-shrink-0"
            strokeWidth={1.5}
          />
          <span className="text-sm text-gray-700">
            {new Date().toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Clock
            className="w-5 h-5 text-gray-400 flex-shrink-0"
            strokeWidth={1.5}
          />
          <span className="text-sm text-gray-700">
            {startTime} - {endTime}
          </span>
        </div>
      </div>

      {/* Footer with Fee and Button */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Booking fee
          </span>
          <span className="text-lg font-semibold text-gray-900">₹10</span>
        </div>

        {/* Minimal Button */}
        <button
          onClick={async () => {
            const response = await isVerified();
            console.log(response);
            if (!response) {
              router.push("/auth/otp");
              return;
            } else {
              router.push(`/medvisit/appointment/book/${id}`);
            }
          }}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 rounded-2xl transition-colors duration-200"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorAppointmentCard;
