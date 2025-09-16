import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  Radio, 
  Droplets, 
  Volume2, 
  FileText, 
  RotateCcw, 
  Zap, 
  Calculator,
  Users
} from 'lucide-react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card focused
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // const services = [
  //   {
  //     icon: AlertTriangle,
  //     title: "Fire Alarm Conventional System",
  //     description: "Traditional fire detection systems with zone-based monitoring for smaller buildings and facilities.",
  //     features: ["Zone-based detection", "Cost-effective solution", "Easy maintenance", "Reliable performance"],
  //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: Radio,
  //     title: "Fire Alarm Addressable System",
  //     description: "Advanced fire detection with individual device addressing for precise location identification.",
  //     features: ["Individual device addressing", "Precise location detection", "Advanced diagnostics", "Scalable solution"],
  //     image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: Droplets,
  //     title: "Wet Riser System",
  //     description: "Vertical water supply systems for firefighting in high-rise buildings and commercial complexes.",
  //     features: ["High-rise compatibility", "Reliable water supply", "Code compliant", "Regular testing"],
  //     image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: Volume2,
  //     title: "PA & Talk Back System",
  //     description: "Public address and two-way communication systems for emergency announcements and coordination.",
  //     features: ["Clear audio quality", "Two-way communication", "Emergency broadcasting", "Zone control"],
  //     image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: FileText,
  //     title: "Fire NOC",
  //     description: "Fire No Objection Certificate services for new constructions and building approvals.",
  //     features: ["Documentation support", "Authority liaison", "Compliance verification", "Quick processing"],
  //     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: RotateCcw,
  //     title: "Fire NOC Renewal",
  //     description: "Renewal services for existing Fire NOC certificates to maintain compliance.",
  //     features: ["Renewal documentation", "Compliance updates", "Authority coordination", "Timely processing"],
  //     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: Zap,
  //     title: "Fire Extinguisher Refilling",
  //     description: "Professional refilling and maintenance services for all types of fire extinguishers.",
  //     features: ["All extinguisher types", "Quality chemicals", "Pressure testing", "Certification provided"],
  //     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: Calculator,
  //     title: "Fire System BOQ Preparation",
  //     description: "Detailed Bill of Quantities preparation for fire safety system installations.",
  //     features: ["Accurate estimates", "Material specifications", "Cost optimization", "Technical documentation"],
  //     image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=300&fit=crop"
  //   },
  //   {
  //     icon: Users,
  //     title: "Fire System Consulting",
  //     description: "Expert consulting services for fire safety planning, design, and compliance strategies.",
  //     features: ["Expert consultation", "System design", "Compliance guidance", "Risk assessment"],
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  //   }
  // ];

  // Check if mobile screen
 
  
const services = [
  {
    title: "Fire Hydrant System",
    description: "A fire hydrant system is an active fire protection measure that provides a reliable and pressurized source of water to help firefighters extinguish fires.",
    features: [
      "Reliable water supply",
      "Easy accessibility for firefighters",
      "Complies with safety regulations",
      "Suitable for large buildings"
    ],
    image: "assets/hs.jpg",
    category: "Fire Suppression Systems"
  },
  {
    title: "Fire Sprinkler System",
    description: "A sprinkler fire system is an automatic water-based fire protection system that includes a water supply and sprinkler heads that discharge water when a fire is detected by heat.",
    features: [
      "Automatic fire suppression",
      "Heat-sensitive activation",
      "Wide area coverage",
      "Complies with fire safety codes"
    ],
    image: "assets/ss.png",
    category: "Fire Suppression Systems"
  },
  {
    title: "Fire Alarm System",
    description: "A fire alarm system is a building system designed to detect, alert occupants, and notify emergency forces of the presence of fire, smoke, carbon monoxide, or other fire-related emergencies.",
    features: [
      "Early fire detection",
      "Audible & visual alerts",
      "Emergency force notification",
      "Integration with building systems"
    ],
    image: "assets/fas.jpg",
    category: "Detection Systems"
  },
  {
    title: "Fire NOC Services",
    description: "Comprehensive fire NOC services covering Site NOC, Final NOC, and Annual NOC Renewal to ensure your building complies with all fire safety standards as per regulations.",
    features: [
      "Site NOC: Issued before construction certifying compliance for building permit",
      "Final NOC: Issued after installation inspection certifying compliance as per NBC",
      "Annual NOC Renewal: Yearly inspection certifying ongoing compliance as per NBC"
    ],
    image: "assets/noc.png",
    category: "Certifications"
  },
  {
    title: "Fire Extinguisher Refilling",
    description: "The essential process of inspecting, maintaining, and replenishing the extinguishing agent and pressure in a fire extinguisher after its use or as part of regular maintenance.",
    features: [
      "Ensures extinguisher readiness",
      "Regular inspection and refilling",
      "Maintains pressure levels",
      "Compliance with safety standards"
    ],
    image: "assets/fer.jpg",
    category: "Maintenance Services"
  },
  {
    title: "Fire System BOQ Preparation / Consulting",
    description: "To prepare a Bill of Quantities (BOQ) for a fire system, you must understand the project scope, break down the system into its components, quantify materials and labor from project drawings and specifications, and calculate the total costs.",
    features: [
      "Detailed project analysis",
      "Precise material quantification",
      "Labor cost estimation",
      "Professional consulting"
    ],
    image: "assets/boq.jpg",
    category: "Consulting Services"
  },
  {
    title: "Annual Maintenance Contract",
    description: "Annual maintenance is a set of scheduled and routine services performed on equipment, systems, or facilities over a one-year period to ensure optimal functioning, safety, and longevity.",
    features: [
      "Regular system checks",
      "Timely repairs & replacements",
      "Ensures safety compliance",
      "Extends system lifespan"
    ],
    image: "assets/amc.jpg",
    category: "Maintenance Services"
  },
  {
    "icon": "Activity",
    "title": "Wet Riser Systems",
    "description": "A wet riser system is a crucial firefighting installation consisting of a series of permanent water-filled pipes and landing valves used to supply water to higher floors of a building in an emergency.",
    "features": [
      "Immediate water supply",
      "Manual fire suppression control",
      "Essential for high-rise buildings",
      "Always pressurized for readiness"
    ],
    "image": "assets/wrs.jpg",
    "category": "Fire Suppression Systems"
  },
  {
    "icon": "Volume2",
    "title": "PA & Talk Back Systems",
    "description": "Public Address (PA) and Talk Back systems are emergency communication systems that allow for clear, real-time announcements and two-way communication during a fire or other emergency evacuation.",
    "features": [
      "Emergency evacuation instructions",
      "Real-time announcements",
      "Two-way communication for rescue teams",
      "Integration with fire alarm systems"
    ],
    "image": "assets/pats.jpg",
    "category": "Emergency Communication Systems"
  }
];
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
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const getVisibleServices = () => {
    if (isMobile) {
      return [currentIndex]; // Only show current service on mobile
    }
    const prev = (currentIndex - 1 + services.length) % services.length;
    const next = (currentIndex + 1) % services.length;
    return [prev, currentIndex, next];
  };

  return (
    <section id="services" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in duration-1000">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full border border-blue-200 mb-4 animate-bounce">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-in slide-in-from-bottom delay-300">
            Fire & Safety
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-in fade-in delay-500">
            Professional fire protection solutions tailored to meet your specific requirements 
            and ensure complete safety compliance.
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

          {/* Services Cards */}
          <div className={`flex justify-center items-center ${
            isMobile ? 'px-6' : 'space-x-6 px-12'
          }`}>
            {getVisibleServices().map((serviceIndex, position) => {
              const service = services[serviceIndex];
              const isCenter = isMobile ? true : position === 1;
              
              return (
                <Card 
                  key={serviceIndex} 
                  className={`transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden ${
                    isMobile 
                      ? 'w-full max-w-sm mx-auto scale-100 shadow-xl' 
                      : isCenter 
                        ? 'scale-105 shadow-2xl z-10 w-80' 
                        : 'scale-90 opacity-70 w-72'
                  }`}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </div>
                    {/* <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"> */}
                      {/* <IconComponent className="w-6 h-6 text-blue-600" /> */}
                    {/* </div> */}
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className={`text-gray-900 transition-colors duration-300 ${
                      isCenter ? 'text-xl text-blue-600' : 'text-lg'
                    }`}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    {/* {(isCenter || isMobile) && (
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0 animate-pulse"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )} */}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {services.map((_, index) => (
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

        {/* View All Services Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            onClick={() => navigate('/services')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
          >
            View All Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}