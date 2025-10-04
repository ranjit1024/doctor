"use client";
import { useState } from "react";
export default function Home() {
   const [activeTab, setActiveTab] = useState('upcoming');
  return <div className="w-[100%] p-5">
     <div className=" border-gray-200 mb-4 ">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Appointments
        </h1>
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'upcoming'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming ({1})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'completed'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Completed ({1})
            </button>
          </nav>
        </div>
  </div>;
}
