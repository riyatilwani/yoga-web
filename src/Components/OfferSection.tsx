import React from 'react';

interface Offer {
  title: string;
  description: string;
  image: string;
}

const offers: Offer[] = [
  {
    title: 'Power Yoga',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: '/images/classes-6.jpg',
  },
  {
    title: 'Community Class',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: '/images/classes-1.jpg',
  },
  {
    title: 'Foundation Yoga',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: '/images/classes-7.jpg',
  },
  {
    title: 'Prenatal Yoga',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: '/images/classes-2.jpg',
  },
];

const OfferSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white shadow-lg">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${offer.image}')` }}
              ></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{offer.title}</h3>
                <p className="mb-5">{offer.description}</p>
                <a href="#" className="text-primary hover:underline">
                  Learn more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
