"use client"
import {  Shield, Stethoscope, Calendar, Lock } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function DoctorAppointmentLogin() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Medical Illustration Side */}
      <div className="hidden lg:flex lg:w-[55%] bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 items-center justify-center p-12 relative">
        <div className="text-white text-center z-10">
          <div className="bg-white/10 rounded-full p-8 mb-8 mx-auto w-fit backdrop-blur-sm">
            <Stethoscope className="w-24 h-24 mx-auto text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Your Health, Our Priority</h2>
          <p className="text-xl opacity-90 mb-4">Book and manage your doctor appointments</p>
          <div className="flex items-center justify-center gap-2 text-sm opacity-75">
            <Shield className="w-4 h-4" />
            <span>HIPAA Compliant & Secure</span>
          </div>
        </div>
        
        {/* Subtle medical pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 28.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6-6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm12 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Login Form Side */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Medical Facility Branding */}
          <div className="text-center mb-8">
            <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">MedVisit</h1>
            <p className="text-gray-600">Secure access to your medical appointments</p>
          </div>

          {/* Patient Quick Access Options */}
      

          {/* Login Form */}
           <button
              onClick={async()=>{
                signIn("google", {callbackUrl:"/medvisit/appointment"})
              }}
              type="submit"
             
              className="w-full bg-gray-100 hover:bg-indigo-400 hover:cursor-pointer hover:text-white text-gray-800 disabled:bg-blue-300 bold py-4 rounded-lg hover:shadow-lg disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
              
               
            
                <span className="flex items-center justify-center gap-2 font-medium">
                  <Image width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                  Login With google
                </span>
              
            </button>

          {/* New Patient Registration */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-3">
              New patient or need to create an account?
            </p>
            <button 
              
              className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 "
            >
              <Calendar className="w-4 h-4" />
              Schedule Your First Appointment
            </button>
          </div>

          {/* Healthcare Compliance Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span>256-bit Encryption</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              Your medical information is protected and secure
            </p>
          </div>

          {/* Patient Support Link */}
     
        </div>
      </div>
    </div>
  );
}
