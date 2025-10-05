"use client"
import {  Shield, Stethoscope, Calendar, Lock } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function DoctorAppointmentLogin() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validatePhone = (value: string) => {
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/
    return phoneRegex.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    
    if (value && !validatePhone(value)) {
      setError('Please match format: +91 1234568764');
    } else {
      setError('');
    }
  };
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
          <div className='w-[100%] flex justify-center items-center'>
           <div className="w-95 flex flex-col justify-">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Enter Mobile Number
      </label>
      <input
        type="tel"
        value={phone}
        onChange={handleChange}
        maxLength={16}
        placeholder="e.g., +1 123-456-7890"
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    <Button className=' mt-2 bg-indigo-600 hover:bg-indigo-500'>Submit</Button>
    </div>
    </div>
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
