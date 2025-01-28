import React from 'react';
import MainHero from '../components/ui/MainHero';
import SectionPreview from '../components/ui/SectionPreview';

const MainPage = ({ isDark, toggleDark, setLanguage }) => {
  const sections = [
    {
      title: "Luxurious Accommodations",
      description: "Discover our collection of meticulously designed rooms and suites, where every detail has been carefully curated to provide an unparalleled experience of comfort and elegance. Each space is a perfect blend of modern luxury and timeless sophistication.",
      image: "/api/placeholder/800/600",
      href: "/places"
    },
    {
      title: "Premium Services",
      description: "Indulge in our world-class amenities, from rejuvenating spa treatments to exquisite dining experiences. Our dedicated staff ensures every moment of your stay exceeds expectations, offering personalized service that anticipates your every need.",
      image: "/api/placeholder/800/600",
      href: "/services"
    },
    {
      title: "Captivating Moments",
      description: "Step into a world of visual elegance through our carefully curated gallery. Experience the beauty of our spaces, the warmth of our hospitality, and the attention to detail that makes every stay memorable. Let our images inspire your next luxury getaway.",
      image: "/api/placeholder/800/600",
      href: "/gallery"
    },
    {
      title: "Personalized Attention",
      description: "Our concierge team is available 24/7 to ensure your stay is nothing short of exceptional. From arranging private transportation to securing exclusive reservations, we're here to transform your wishes into unforgettable experiences.",
      image: "/api/placeholder/800/600",
      href: "/contact"
    }
  ];

  return (
    <div className="w-full bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
      <MainHero 
        isDark={isDark} 
        toggleDark={toggleDark}
        setLanguage={setLanguage}
      />
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <SectionPreview 
            key={section.title}
            section={section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;