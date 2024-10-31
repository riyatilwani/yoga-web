import React from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ScheduleItem {
  hasClass: boolean;
  image?: string;
  title?: string;
  time?: string;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const scheduleData: ScheduleItem[][] = [
  [
    { hasClass: false },
    {
      hasClass: true,
      image: '/images/classes-1.jpg',
      title: 'Yoga Training',
      time: '7 am - 6 pm',
    },
    { hasClass: false },
    {
      hasClass: true,
      image: '/images/classes-2.jpg',
      title: 'Yoga Training',
      time: '7 am - 6 pm',
    },
    { hasClass: false },
    {
      hasClass: true,
      image: '/images/classes-3.jpg',
      title: 'Yoga Training',
      time: '7 am - 6 pm',
    },
    { hasClass: false },
  ],
  [
    {
      hasClass: true,
      image: '/images/classes-4.jpg',
      title: 'Yoga Training',
      time: '7 am - 6 pm',
    },
    { hasClass: false },
    {
      hasClass: true,
      image: '/images/classes-5.jpg',
      title: 'Yoga Training',
      time: '7 am - 6 pm',
    },
    { hasClass: false },
    {
      hasClass: true,
      image: '/images/classes-6.jpg',
      title: 'Yoga Training',
      time: '7 am - 6 pm',
    },
    { hasClass: false },
    {
      hasClass: true,
      image: '/images/classes-7.jpg',
      title: 'Yoga Training',
      time: '7 am - 6 pm',
    },
  ],
  // Add additional rows as per the initial HTML content
];

const TimetableSection: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="timetable-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Class Time Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-primary text-white">
                {daysOfWeek.map((day, index) => (
                  <th key={index} className="py-3 px-4 border text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((item, colIndex) => (
                    <td key={colIndex} className="py-4 px-2 border text-center">
                      {item.hasClass ? (
                        <div className="flex flex-col items-center">
                          <div
                            className="w-16 h-16 bg-cover bg-center rounded-full mb-2"
                            style={{ backgroundImage: `url('${item.image}')` }}
                          ></div>
                          <a href="#" className="font-bold hover:underline">
                            {item.title}
                          </a>
                          <span className="text-sm text-gray-600">{item.time}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-2xl">
                          <FaTimes />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-2 px-4 border text-center">
                  <a href="#" className="flex items-center justify-center text-primary hover:underline">
                    <FaArrowLeft className="mr-2" /> September
                  </a>
                </td>
                <td colSpan={5}></td>
                <td className="py-2 px-4 border text-center">
                  <a href="#" className="flex items-center justify-center text-primary hover:underline">
                    November <FaArrowRight className="ml-2" />
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TimetableSection;
