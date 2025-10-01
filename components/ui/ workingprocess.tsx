import React from 'react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const WorkingProcess: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      id: '01',
      title: 'Book Appointment',
      description: 'Schedule online or over a consultation.'
    },
    {
      id: '02',
      title: 'Consult a Doctor',
      description: 'Meet with specialized care via online.'
    },
    {
      id: '03',
      title: 'Diagnosis & Tests',
      description: 'Get accurate reports with advanced tech.'
    },
    {
      id: '04',
      title: 'Treatment & Follow-up',
      description: 'Personalized care and ongoing support.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
        Working Process
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-start space-y-3"
          >
            <span className="text-5xl md:text-6xl font-light text-gray-300">
              {step.id}
            </span>
            <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-tight">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
