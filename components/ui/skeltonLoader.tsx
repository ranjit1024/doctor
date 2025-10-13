// components/DoctorAppointmentCardSkeleton.tsx
export default function DoctorAppointmentCardSkeleton() {
  return (
    <div className=" bg-gray-50 w-[79vw] max-md:w-[100vw]  overflow-y-auto">
      <div className="min-h-screen p-4 space-y-4">
        {/* Skeleton Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
          {/* Avatar and Name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-14 w-14 bg-gray-200 rounded-xl" />
            <div className="h-5 w-24 bg-gray-200 rounded" />
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 mb-3">
            <div className="h-4 w-4 bg-gray-200 rounded mt-1" />
            <div className="h-4 w-60 bg-gray-200 rounded" />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>

          {/* Time */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>

          {/* Booking Fee */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-6 w-12 bg-gray-200 rounded" />
          </div>

          {/* Button */}
          <div className="h-12 w-full bg-gray-200 rounded-lg" />
        </div>

        {/* Duplicate cards for better visual */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-14 w-14 bg-gray-200 rounded-xl" />
            <div className="h-5 w-24 bg-gray-200 rounded" />
          </div>
          <div className="flex items-start gap-2 mb-3">
            <div className="h-4 w-4 bg-gray-200 rounded mt-1" />
            <div className="h-4 w-60 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-6 w-12 bg-gray-200 rounded" />
          </div>
          <div className="h-12 w-full bg-gray-200 rounded-lg" />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-14 w-14 bg-gray-200 rounded-xl" />
            <div className="h-5 w-24 bg-gray-200 rounded" />
          </div>
          <div className="flex items-start gap-2 mb-3">
            <div className="h-4 w-4 bg-gray-200 rounded mt-1" />
            <div className="h-4 w-60 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-6 w-12 bg-gray-200 rounded" />
          </div>
          <div className="h-12 w-full bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
