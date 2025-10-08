"use client"
import React, { useEffect, useRef, useState } from 'react';
import { CircleUserIcon, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
const ProfileIcon = () => {
  const profileRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  useEffect(()=>{
    const hide = (e:MouseEvent) =>{
      if(profileRef.current && !profileRef.current.contains(e.target as Node)){
        setIsOpen(false)
      }
    }
    document.addEventListener("click", hide);
    return () => {document.removeEventListener('click', hide)}
  },[])
  return (
    <div className="relative">
      {/* Profile Icon Button */}
      <button
        ref={profileRef}
        onClick={() => setIsOpen(!isOpen)}
        className=" rounded-full hover:cursor-pointer  bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-white font-medium hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:ring-indigo-500 hover:ring-2 "
        aria-label="User profile"
      >
        <CircleUserIcon className='size-[1.6rem] ring-3  rounded-2xl'/>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 p-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100">
          <div className="py-1">
            <button
              onClick={()=>{router.push('/medvisit/profile')}}
              className="flex w-full hover:cursor-pointer mb-2 items-center px-4 py-3 text-sm rounded-xl text-gray-700 hover:bg-purple-50 transition-colors gap-2"
            >
             <User className='text-purple-500'/>
              My Profile
            </button>
            <button
              onClick={()=>{router.push('/medvisit/upcomming')}}
              className="flex mb-2 hover:cursor-pointer items-center rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 transition-colors"
            >
              <svg
                className="w-7 h-7  mr-3 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 30 30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className='text-start'>Your Appointments</p>
            </button>
          
            <div className="border-t border-gray-100"></div>
            <button
              className="flex mt-2 hover:cursor-pointer rounded-xl items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
              onClick={() => signOut()}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
