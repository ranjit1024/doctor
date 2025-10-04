import React from 'react';

const OurMission = () => {
  const values = [
    {
      title: "24/7 Access",
      description: "Available anytime",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Quality Care",
      description: "Trusted professionals",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Fast Booking",
      description: "Skip the wait",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    }
  ];

  const stats = [
    { label: "Patients Served", value: "50,000+", color: "text-purple-600", bgColor: "bg-purple-500", width: "w-4/5" },
    { label: "Available Doctors", value: "200+", color: "text-blue-600", bgColor: "bg-blue-500", width: "w-3/4" },
    { label: "Satisfaction Rate", value: "98%", color: "text-green-600", bgColor: "bg-green-500", width: "w-full" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 leading-relaxed">
              To make quality healthcare accessible to everyone, everywhere, at any time
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe healthcare should be convenient, transparent, and patient-centered. Our platform eliminates the barriers between patients and quality medical care by providing seamless online booking, 24/7 availability, and direct access to trusted healthcare professionals.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Through innovative technology and compassionate service, we're transforming how people access healthcare—making it simpler, faster, and more personalized than ever before.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 ${value.iconColor}`}>
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-purple-100 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-100 rounded-full opacity-60"></div>
              
              <div className="relative z-10 space-y-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`${stat.bgColor} h-2 rounded-full ${stat.width} transition-all duration-500`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
