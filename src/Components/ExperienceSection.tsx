import React from 'react';
import { FaSpa } from 'react-icons/fa';

interface Experience {
  title: string;
  description: string;
}

const experiencesLeft: Experience[] = [
  {
    title: 'Balance Body & Mind',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Healthy Daily Life',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Improves your flexibility',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Protects your spine',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
];

const experiencesRight: Experience[] = [
  {
    title: 'Betters your bone health',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Increases your blood flow',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Keep a practice journal',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Builds muscle strength',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Experience of Yoga</h2>
        </div>
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full md:w-1/3 px-4">
            {experiencesLeft.map((exp, index) => (
              <div key={index} className="flex mb-8">
                <div className="mr-4 text-primary">
                  <FaSpa size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Image */}
          <div className="w-full md:w-1/3 px-4">
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/services.jpg')" }}
            ></div>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/3 px-4">
            {experiencesRight.map((exp, index) => (
              <div key={index} className="flex mb-8">
                <div className="mr-4 text-primary">
                  <FaSpa size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
