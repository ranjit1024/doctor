import React from 'react';

interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  date: string;
  timeIndicator: string;
  note: string;
  status: 'completed' | 'upcoming' | 'cancelled';
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctorName,
  specialty,
  date,
  timeIndicator,
  note,
  status
}) => {
  const statusColors = {
    completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    upcoming: 'bg-blue-50 text-blue-700 border-blue-200',
    cancelled: 'bg-red-50 text-red-700 border-red-200'
  };

  return (
    <div className=" mb-3 w-full bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6">
        {/* Header with avatar - mobile stacks, desktop inline */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md flex-shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate">{doctorName}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{specialty}</p>
            </div>
          </div>

          {/* Status badge - full width on mobile, auto width on desktop */}
          <span className={`w-full sm:w-auto  text-center px-3 py-1.5 sm:py-1 rounded-md my-2 text-xs font-semibold border ${statusColors[status]} flex-shrink-0`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>

        {/* Date and time */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-gray-700">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">{date}</span>
          </div>
          <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-md">
            {timeIndicator}
          </span>
        </div>

        {/* Note section */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Note</p>
          <p className="text-sm text-gray-700 leading-relaxed">{note}</p>
        </div>
      </div>
    </div>
  );
};

// Example usage


export default AppointmentCard;
