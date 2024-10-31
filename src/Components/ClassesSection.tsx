import React from 'react';

interface ClassItem {
  title: string;
  image: string;
  dateTime: string;
}

const classesData: ClassItem[] = [
  {
    title: 'Private & Group Lessons',
    image: '/images/classes-1.jpg',
    dateTime: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
  },
  {
    title: 'Yoga for Pregnant',
    image: '/images/classes-2.jpg',
    dateTime: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
  },
  {
    title: 'Yoga for Beginners',
    image: '/images/classes-3.jpg',
    dateTime: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
  },
  {
    title: 'Yoga Barre',
    image: '/images/classes-4.jpg',
    dateTime: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
  },
  {
    title: 'Yoga Core',
    image: '/images/classes-5.jpg',
    dateTime: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
  },
  {
    title: 'Yoga Restore',
    image: '/images/classes-6.jpg',
    dateTime: 'Sept. 30, 2019 - 01:00pm - 03:00pm',
  },
];

const ClassesSection: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="classes-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Classes</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {classesData.map((classItem, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg">
                <a href="#" className="block overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                  />
                </a>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    <a href="#">{classItem.title}</a>
                  </h3>
                  <p className="text-gray-600">{classItem.dateTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
