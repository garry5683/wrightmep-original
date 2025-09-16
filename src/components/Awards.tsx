import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Award, Star, Shield, Trophy, Medal, CheckCircle } from 'lucide-react';

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const awards = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      year: "2020",
      description: "International standard for quality management systems",
      category: "Quality Certification",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop"
    },
    {
      icon: Shield,
      title: "NFPA Compliance Expert",
      year: "2019",
      description: "National Fire Protection Association standards compliance",
      category: "Safety Standards",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      icon: Trophy,
      title: "Best Fire Safety Company",
      year: "2022",
      description: "Regional excellence award for outstanding service",
      category: "Industry Recognition",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
    },
    {
      icon: Star,
      title: "Government Approved Vendor",
      year: "2018",
      description: "Authorized vendor for government fire safety projects",
      category: "Government Recognition",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      icon: Medal,
      title: "Safety Excellence Award",
      year: "2021",
      description: "Outstanding contribution to fire safety engineering",
      category: "Excellence Award",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=300&fit=crop"
    },
    {
      icon: CheckCircle,
      title: "Zero Incident Record",
      year: "2023",
      description: "500+ projects completed without safety incidents",
      category: "Safety Achievement",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    }
  ];

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % awards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, awards.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
    setIsAutoPlaying(false);
  };

  const getVisibleAwards = () => {
    if (isMobile) {
      return [currentIndex]; // Only show current award on mobile
    }
    const prev = (currentIndex - 1 + awards.length) % awards.length;
    const next = (currentIndex + 1) % awards.length;
    return [prev, currentIndex, next];
  };

  return (
    <section id="awards" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200 mb-4">
            <Trophy className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Recognition & Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Awards &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block">Certifications</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence recognized through various awards and certifications.
          </p>
        </div>

        {/* Responsive Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 ${
              isMobile ? '-translate-x-2 sm:-translate-x-6' : '-translate-x-6'
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 ${
              isMobile ? 'translate-x-2 sm:translate-x-6' : 'translate-x-6'
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Awards Cards */}
          <div className={`flex justify-center items-center ${
            isMobile ? 'px-6' : 'space-x-6 px-12'
          }`}>
            {getVisibleAwards().map((awardIndex, position) => {
              const award = awards[awardIndex];
              const IconComponent = award.icon;
              const isCenter = isMobile ? true : position === 1;
              
              return (
                <Card 
                  key={awardIndex} 
                  className={`transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 overflow-hidden ${
                    isMobile 
                      ? 'w-full max-w-sm mx-auto scale-100 shadow-xl' 
                      : isCenter 
                        ? 'scale-105 shadow-2xl z-10 w-80' 
                        : 'scale-90 opacity-70 w-72'
                  }`}
                >
                  {/* Award Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={award.image} 
                      alt={award.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {award.year}
                    </div>
                  </div>

                  <CardContent className="p-6 text-center">
                    <div className="space-y-3">
                      <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {award.category}
                      </div>
                      <h4 className={`font-bold text-gray-900 transition-colors ${
                        isCenter ? 'text-xl text-blue-600' : 'text-lg'
                      }`}>
                        {award.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-blue-200 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}