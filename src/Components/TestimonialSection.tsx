import React from 'react';

interface Testimonial {
  name: string;
  position: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Gabby Smith',
    position: 'Customer',
    message:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: '/images/person_1.jpg',
  },
  // Add other testimonials...
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-xl uppercase text-primary">Testimony</h3>
        <h2 className="text-3xl font-bold">Successful Stories</h2>
      </div>
      <div className="container mx-auto">
        <div className="swiper-container">
          {/* Implement Swiper or any carousel */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center p-6">
              <p className="mb-4">{testimonial.message}</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
