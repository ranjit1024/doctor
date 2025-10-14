// AppointmentSkeleton.tsx
import React from "react";

export default function AppointmentSkeleton() {
  return (
    <div role="status" aria-label="Loading appointment page" aria-busy="true" className="animate-pulse">
      {/* Header: avatar + name + specialty + email */}
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-lg bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="h-6 w-40 rounded bg-gray-200" />
          <div className="h-3 w-24 rounded bg-gray-200" />
          <div className="h-3 w-56 rounded bg-gray-200" />
        </div>
      </div>

      {/* Info rows: address, date, hours */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded bg-gray-200" />
          <div className="h-3 w-80 rounded bg-gray-200" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded bg-gray-200" />
          <div className="h-3 w-48 rounded bg-gray-200" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded bg-gray-200" />
          <div className="h-3 w-44 rounded bg-gray-200" />
        </div>
      </div>

      {/* Section title */}
      <div className="mt-8 h-4 w-56 rounded bg-gray-200" />

      {/* Date input skeleton */}
      <div className="mt-3 h-11 w-full rounded-md border border-gray-200 bg-gray-100" />

      {/* Section title */}
      <div className="mt-8 h-4 w-40 rounded bg-gray-200" />

      {/* Time slot pill */}
      <div className="mt-3 h-12 w-full rounded-md bg-gray-200" />

      {/* Selected text */}
      <div className="mt-4 h-3 w-32 rounded bg-gray-200" />

      {/* Book button */}
      <div className="mt-6 h-12 w-full rounded-md bg-gray-300" />

      <span className="sr-only">Loading</span>
    </div>
  );
}
