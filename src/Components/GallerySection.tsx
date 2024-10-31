import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="gallery-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">See the Latest Photos</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="relative group">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <FaInstagram className="text-white text-3xl" />
                </div>
                <a
                  href={image}
                  className="absolute inset-0"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
