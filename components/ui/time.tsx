import React, { useState } from 'react';

interface TimeSlot {
  id: string;
  label: string;
  value: string;
}

const timeSlots: TimeSlot[] = [
  { id: '1', label: '09:00 AM - 11:00 AM', value: '10:00' },
  { id: '2', label: '5:00 PM - 08:00 PM', value: '10:30' },
 
];

interface TimeSelectProps {
  onTimeSelect?: (time: string) => void;
  defaultValue?: string;
}

const TimeSelect: React.FC<TimeSelectProps> = ({ 
  onTimeSelect,
  defaultValue = '12:00'
}) => {
  const [selectedTime, setSelectedTime] = useState<string>(defaultValue);

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
    onTimeSelect?.(value);
  };

  return (
    <div className="w-full  mx-auto">
      <h3 className="text-gray-900 dark:text-white text-base font-medium mb-3 text-start mt-4">
        Pick a time
      </h3>
      <ul className="grid w-full grid-cols-[50%_50%] gap-2">
        {timeSlots.map((slot) => (
          <li key={slot.id}>
            <input
              type="radio"
              id={slot.id}
              name="timetable"
              value={slot.value}
              checked={selectedTime === slot.value}
              onChange={() => handleTimeChange(slot.value)}
              className="hidden peer"
            />
            <label
              htmlFor={slot.id}
              className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white dark:peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500"
            >
              {slot.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSelect;
