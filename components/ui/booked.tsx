import React from 'react';
import { Calendar, Clock, Video, User } from 'lucide-react';

interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  consultationType: 'video' | 'in-person';
  note: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  avatarUrl?: string;
}

export const UpcomingDoctorAppointment: React.FC<AppointmentCardProps> = ({
  doctorName,
  specialty,
  date,
  time,
  consultationType,
  note,
  status,
  avatarUrl
}) => {
  const statusStyles = {
    upcoming: 'bg-amber-50 text-amber-700 border-amber-200',
    completed: 'bg-green-50 text-green-700 border-green-200',
    cancelled: 'bg-red-50 text-red-700 border-red-200'
  };

  return (
    <div className={`relative bg-white  rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition-shadow duration-300 mb-1`} >
      {/* Status Badge */}
      <div className="absolute top-6 right-6">
        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${statusStyles[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Doctor Info */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={doctorName}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <User className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {doctorName}
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            {specialty}
          </p>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="space-y-3 mb-5">
        <div className="flex items-center gap-3 text-gray-700">
          <Calendar className="w-5 h-5 text-blue-600" strokeWidth={2} />
          <span className="text-sm font-medium">
            {date}
            <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-semibold">
              in 1 day
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Clock className="w-5 h-5 text-blue-600" strokeWidth={2} />
          <span className="text-sm font-medium">{time}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Video className="w-5 h-5 text-blue-600" strokeWidth={2} />
          <span className="text-sm font-medium">
            {consultationType === 'video' ? 'Video Consultation' : 'In-Person Consultation'}
          </span>
        </div>
      </div>

      {/* Note Section */}
      {note && (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Note:
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {note}
          </p>
        </div>
      )}
    </div>
  );
};
