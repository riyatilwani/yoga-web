import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <Swiper spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 5000 }}>
        {/* First Slide */}
        <SwiperSlide>
          <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-4">Discover Your Inner Sanctuary</h1>
              <h3 className="text-2xl mb-6">
                Everyday We Bring Hope and Smile to the Patient We Serve
              </h3>
              <a href="#" className="btn btn-outline-white px-4 py-3 mt-3">
                View our works
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* Second Slide */}
        <SwiperSlide>
          <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg_2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-4">Lighting Your Heart &amp; Mind</h1>
              <h3 className="text-2xl mb-6">
                Your Health is Our Top Priority with Comprehensive, Affordable medical.
              </h3>
              <a href="#" className="btn btn-outline-white px-4 py-3 mt-3">
                View our works
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
