import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, Home } from 'lucide-react';
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

export default function AllServices() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);


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

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/', { state: sectionId ? { scrollTo: sectionId } : undefined });
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              {/* <div className="w-30 h-20 rounded-xl flex items-center justify-center group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"> */}
                            <img src="assets/wrightmeplogo.png" alt="Logo" className="h-20 w-30 p-1" />            
            {/* <div>
              <h1 className="text-xl font-bold text-blue-900">Wright MEP</h1>
              <p className="text-xs text-black-600">Engineering Solution</p>
            </div> */}
          {/* </div> */}
          </div>

            {/* Back Button */}
            <Button 
              onClick={() => handleNavigation('/','services')}
              variant="outline"
              className="flex items-center space-x-2 hover:bg-blue-50 border-blue-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full border border-blue-200 mb-4 animate-bounce">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Our Expertise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Explore Our Services
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block">Fire Safety Services</span> */}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive fire protection solutions designed to safeguard lives and property. 
              From detection systems to consulting services, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-16"> */}
              {/* <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {category}
                </span>
              </h2> */}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {services
                  .map((service, index) => {
                    const cardIndex = index;
                    
                    return (
                      <Card 
                        key={index}
                        className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                        onMouseEnter={() => setHoveredCard(cardIndex)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Service Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          {/* <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div> */}
                          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {service.category}
                          </div>
                        </div>

                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <CardDescription className="text-gray-600 leading-relaxed">
                            {service.description}
                          </CardDescription>
                          
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0 animate-pulse"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* <div className="pt-4">
                            <Button 
                              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                              onClick={() => {
                                // Navigate to contact section on home page
                                navigate('/', { state: { scrollTo: 'contact' } });
                              }}
                            >
                              Get Quote
                            </Button>
                          </div> */}
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            {/* </div>
          ))} */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Fire Safety?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts for a free consultation and customized fire safety solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>

            <Button 
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('tel:+919895277526')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-98952-77526
            </Button>
            
            {/* <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => window.open('tel:+919876543210')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-98765-43210
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}