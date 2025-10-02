import React from 'react';
import { Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  hasVideo?: boolean;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Anna P.',
      role: 'Teacher',
      image: '/anna.jpg',
      text: 'Booking my appointment online was quick and hassle-free. The staff welcomed me warmly, and the doctor explained everything clearly, which gave me so much confidence in my treatment.'
    },
    {
      id: 2,
      name: 'Sophia K.',
      role: 'Graphic Designer',
      image: '/sophia.jpg',
      text: 'From diagnosis to treatment, the whole process was smooth and professional. The team made sure I was comfortable at every step, and I couldn\'t have asked for better care.'
    },
    {
      id: 3,
      name: 'James L.',
      role: 'Engineer',
      image: '/james.jpg',
      text: 'The clinic has modern facilities, and everything feels so well-organized. I appreciated the transparency about costs and treatment options, which gave me complete peace of mind.'
    },
    {
      id: 4,
      name: 'Mark R.',
      role: 'Business Consultant',
      image: '/mark.jpg',
      text: 'I\'ve been to many clinics before, but this is the first time I felt truly heard. The doctors here take the time to listen and explain, and the personalized care made a real difference for me.'
    },
    {
      id: 5,
      name: '',
      role: '',
      image: '/video-thumbnail.jpg',
      text: '',
      hasVideo: true
    },
    {
      id: 6,
      name: 'Elena M.',
      role: 'Accountant',
      image: '/elena.jpg',
      text: 'Recovering after surgery was easier than I imagined, thanks to the rehabilitation program here. The doctors and physiotherapists were so supportive throughout my journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          What Our Patients Say
        </h1>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                testimonial.hasVideo ? 'row-span-2' : ''
              }`}
            >
              {testimonial.hasVideo ? (
                /* Video Card */
                <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={testimonial.image}
                    alt="Video testimonial"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                      <Play className="w-5 h-5 text-purple-600 fill-purple-600" />
                      <span className="text-purple-600 font-medium">
                        Watch video review
                      </span>
                    </div>
                  </button>
                </div>
              ) : (
                /* Text Testimonial Card */
                <div className="p-6 flex flex-col h-full">
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  
                  {/* Profile Section */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
