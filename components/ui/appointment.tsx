import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Stethoscope, FileText, HeartPulse } from 'lucide-react';
import BookAppointmentButton from './work1';

const AppointmentJourney = () => {
  const steps = [
    {
      id: 1,
      title: "Book Appointment",
      subtitle: "schedule online in minutes",
      icon: Calendar,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 2,
      title: "Consult a Doctor",
      subtitle: "Meet with specialists doctor in local",
      icon: Stethoscope,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "Diagnosis & Tests",
      subtitle: "Get accurate reports",
      icon: FileText,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 4,
      title: "Treatment & Follow-up",
      subtitle: "Follow-up care and support",
      icon: HeartPulse,
      gradient: "from-rose-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b  ">
      {/* Header */}
    

      {/* Timeline Container */}
      <div className="relative max-w-lg mx-auto">
        {/* Connecting Path */}
            <div className=' absolute h-[100%] w-[100%] flex justify-center'>
                <div className='border-1 bg-gray-600 h-[100%] w-[1]'></div>
            </div>
       

        {/* Steps */}
        <div className="relative space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} mt-15`}
              >
                {/* Card */}
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className={`relative w-[100%]  ${
                    isLeft ? 'mr-auto' : 'ml-auto'
                  }`}
                >

                     <BookAppointmentButton
              title="Treatment & Follow-up"
              subtitle="Follw-up care and support "
              order={4}
            />
                  {/* Badge Number */}
              

                  {/* Content */}
                

                  {/* Decorative element */}
                 
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentJourney;
