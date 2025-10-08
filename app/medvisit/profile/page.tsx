"use client"
import React, { useState } from 'react';
import { Camera, Mail, Phone, Edit2, Save, X } from 'lucide-react';
import { useSession } from 'next-auth/react';
const ProfilePage = () => {
    const session = useSession()
  const [isEditing, setIsEditing] = useState(false);
 


  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
 

      {/* Main Content */}
      <div className=" mx-auto p-2 ">
        {/* Profile Header Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          {/* Cover Image */}
          <div className="h-32 max-md:h-20 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          
          {/* Profile Info */}
          <div className="px-6 pb-6 ">
            <div className="flex items-end justify-between -mt-16 mb-4 max-md:-mt-12">
              <div className="relative">
                <div className="w-24 h-24 max-md:h-18 max-md:w-18 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-4xl max-md:text-3xl font-semibold text-gray-700">{session.data?.user?.name? String(session.data.user.name).slice(0,1).toLocaleUpperCase():'df'}</span>
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-1">
               
                <h2 className="text-2xl font-semibold text-gray-800">{session.data?.user?.name}</h2>
              
              <p className="text-gray-600">Patient ID: #MV-2024-001</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
               
                <p className="text-gray-800">{session.data?.user?.email}</p>
            
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </label>
            
            </div>

       

         
         
          </div>
        </div>

        {/* Emergency Contact */}
     
      </div>
    </div>
  );
};

export default ProfilePage;
