import { useState, useEffect } from 'react';
import map from '../assets/map.png?url';
import hero from '../assets/hero.jpg?url';
import hero1 from '../assets/hero1.jpg?url';
import hero2 from '../assets/hero2.png?url';
import hero3 from '../assets/hero3.png?url';
import hero4 from '../assets/hero4.png?url';
import hero5 from '../assets/hero5.png?url';
import hero6 from '../assets/hero6.png?url';
import daycare from '../assets/daycare.jpg?url';
import kindergarten from '../assets/kgsession.png?url';
import elementary from '../assets/elementary.jpg?url';
import highschool from '../assets/highschool.jpg?url';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

  // Array of images for carousel
  const carouselImages = [hero, hero1, hero2, hero3, hero4, hero5,hero6];

  // School levels data
  const schoolLevels = [
    {
      title: 'Daycare',
      image: daycare,
      description: 'Nurturing care and early development for children ages 6 months to 3 years.',
      ageRange: '6 months - 3 years'
    },
    {
      title: 'Kindergarten',
      image: kindergarten,
      description: 'Building foundations through play-based learning and social development.',
      ageRange: '3 - 5 years'
    },
    {
      title: 'Elementary School',
      image: elementary,
      description: 'Developing core academic skills and fostering curiosity in young learners.',
      ageRange: '5 - 11 years'
    },
    {
      title: 'Junior High School',
      image: highschool,
      description: 'Preparing students for advanced academics with critical thinking and character development.',
      ageRange: '11 - 14 years'
    },
    {
      title: 'Senior High School',
      image: highschool,
      description: 'Empowering students for higher education and future success with comprehensive curriculum.',
      ageRange: '14 - 18 years'
    }
  ];

  useEffect(() => {
    if (carouselImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [carouselImages.length]);

  useEffect(() => {
    if (schoolLevels.length > 1) {
      const interval = setInterval(() => {
        setCurrentLevelIndex((prevIndex) =>
          prevIndex === schoolLevels.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change level every 4 seconds

      return () => clearInterval(interval);
    }
  }, [schoolLevels.length]);

  const nextLevel = () => {
    setCurrentLevelIndex((prevIndex) =>
      prevIndex === schoolLevels.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevLevel = () => {
    setCurrentLevelIndex((prevIndex) =>
      prevIndex === 0 ? schoolLevels.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1 space-y-6 px-4 sm:px-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2456] leading-tight">
                Welcome to Gbonkolenken International Academy
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Seat of Wisdom - Nurturing excellence and character in the heart of Makeni, Sierra Leone
              </p>
              <p className="text-base md:text-lg text-gray-600">
                At GIA, we are committed to providing quality education that empowers students
                to become global citizens, critical thinkers, and compassionate leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <button className="bg-white text-[#1a2456] px-8 py-3 rounded-lg font-semibold border-2 border-[#1a2456] hover:bg-[#1a2456] hover:text-white transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Right Side - Map with Carousel */}
            <div className="order-1 lg:order-2 relative -mt-6">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Carousel Images - Masked to map shape */}
                <div className="absolute inset-0">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        WebkitMaskImage: `url(${map})`,
                        maskImage: `url(${map})`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                      }}
                    >
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Indicators */}
                {carouselImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-[#00c853] w-8'
                            : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Levels Carousel Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2456] mb-4">
              Our Educational Programs
            </h2>
            <div className="w-24 h-1 bg-[#00c853] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From early childhood through senior high school, we provide comprehensive education at every stage
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              {schoolLevels.map((level, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ${
                    index === currentLevelIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white">
                    {/* Image Side */}
                    <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                      <img
                        src={level.image}
                        alt={level.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#00c853] text-white px-4 py-2 rounded-full font-semibold text-sm">
                        {level.ageRange}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#1a2456] to-[#2a3566]">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {level.title}
                      </h3>
                      <p className="text-lg text-gray-200 leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevLevel}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a2456] p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Previous level"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextLevel}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a2456] p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Next level"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
