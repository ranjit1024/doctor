export const AppointmentCard = ({ appointment, type }:{
    appointment:any,
    type:any
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {appointment.doctorName}
            </h3>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                type === 'upcoming'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {type === 'upcoming' ? 'Upcoming' : 'Completed'}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            Patient: {appointment.patientName}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{appointment.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{appointment.time}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          {type === 'upcoming' && (
            <>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Reschedule
              </button>
              <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                Cancel
              </button>
            </>
          )}
          {type === 'completed' && (
            <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};