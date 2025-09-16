import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Clock } from 'lucide-react';
import SocialMedia from "./socialMedia";

function getYearsSince(startYear) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return years;
}
const startYear = 2018;
const yearsActive = getYearsSince(startYear);

export default function Hero() {
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate projects counter
          let projectCount = 0;
          const projectInterval = setInterval(() => {
            projectCount += 10;
            if (projectCount >= 300) {
              projectCount = 300;
              clearInterval(projectInterval);
            }
            setCounts(prev => ({ ...prev, projects: projectCount }));
          }, 20);

          // Animate years counter
          let yearCount = 0;
          const yearInterval = setInterval(() => {
            yearCount += 1;
            if (yearCount >= yearsActive) {
              yearCount = yearsActive;
              clearInterval(yearInterval);
            }
            setCounts(prev => ({ ...prev, years: yearCount }));
          }, 100);

          // Animate clients counter
          let clientCount = 0;
          const clientInterval = setInterval(() => {
            clientCount += 5;
            if (clientCount >= 200) {
              clientCount = 200;
              clearInterval(clientInterval);
            }
            setCounts(prev => ({ ...prev, clients: clientCount }));
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div>
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Hero Background Image - Changed to firefighters */}
      <div className="absolute inset-0">
        <img 
          src="assets/baseimg.jpg?w=1920&h=1080&fit=crop" 
          alt="Firefighters in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-left duration-1000 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/30 animate-in fade-in delay-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-white">Trusted Fire Safety Experts</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-in slide-in-from-bottom delay-500">
                Your Safety 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 block animate-gradient">Is Our Business</span>
                {/* designing Peace of Mind */}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed animate-in fade-in delay-700 max-w-2xl mx-auto lg:mx-0">
                The inspiration behind Wright MEP was a determination to provide world class fire fighting system services
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom delay-1000 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
              >
                Explore Our Services
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-gray-900 hover:bg-white hover:text-gray-900 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
              >
                Free Consultation
              </Button>
            </div>

            {/* Animated Stats - Single Row */}
            <div 
              id="stats-section"
              className="grid grid-cols-4 gap-2 sm:gap-4 pt-6 animate-in slide-in-from-bottom delay-1200 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110">
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 animate-count">
                  {counts.projects}+
                </div>
                <div className="text-xs text-white/80 font-medium">Projects</div>
              </div>
              <div className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 animate-count">
                  {counts.years}+
                </div>
                <div className="text-xs text-white/80 font-medium">Years</div>
              </div>
              <div className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 animate-count">
                  {counts.clients}+
                </div>
                <div className="text-xs text-white/80 font-medium">Clients</div>
              </div>
              <div className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110">
                  <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-white/80 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Right side content - Hidden on mobile for better layout */}
          <div className="relative animate-in slide-in-from-right duration-1000 delay-500 hidden xl:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-500 border border-white/20">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold mb-6 animate-in fade-in delay-1000">Wright MEP Excellence</h3>
                <div className="space-y-4">
                  {[
                    "Certified fire safety engineers",
                    "End-to-end solutions",
                    "100% regulatory compliance",
                    "Quick turnaround times",
                    "Competitive pricing",
                    "24/7 support Available"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group animate-in slide-in-from-left delay-1200" style={{animationDelay: `${1200 + index * 100}ms`}}>
                      <div className="w-2 h-2 bg-blue-300 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-white/90 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SocialMedia />
    </div>
  );
}