import React, { useEffect, useState } from 'react';

interface Counter {
  end: number;
  label: string;
}

const counters: Counter[] = [
  { end: 2560, label: 'Happy Customers' },
  { end: 60, label: 'Yoga Classes' },
  { end: 50, label: 'Years of Experience' },
  { end: 100, label: 'Yoga Conducted' },
];

const CounterSection: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    counters.forEach((counter, index) => {
      let start = 0;
      const end = counter.end;
      const duration = 2000;
      const incrementTime = (duration / end) * 2;

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);
    });
  }, []);

  return (
    <section
      className="py-12 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/bg_3.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {counters.map((counter, index) => (
              <div key={index} className="w-1/2 md:w-1/4 text-center mb-6">
                <h3 className="text-5xl font-bold">{counts[index]}</h3>
                <p className="text-xl">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

