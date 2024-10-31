import React from 'react';
import CounterSection from './CounterSection';
import ExperienceSection from './ExperienceSection';
import HeroSection from './HeroSection';
import OfferSection from './OfferSection';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';
import ClassesSection from './ClassesSection';
import GallerySection from './GallerySection';
import TimetableSection from './TimetableSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <OfferSection />
      <ExperienceSection />
      <ClassesSection />
      <TimetableSection />
      <TestimonialSection />
      <CounterSection />
      <BlogSection />
      <GallerySection />
    </div>
  );
};

export default Home;
