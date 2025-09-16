import { useState, useEffect } from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Corporate Office Fire Alarm System",
      location: "Mumbai, Maharashtra",
      date: "2023",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description: "Complete addressable fire alarm system installation for 15-story corporate building with 200+ detection points and integrated emergency response system."
    },
    {
      id: 2,
      title: "Hospital Wet Riser System",
      location: "Delhi, NCR",
      date: "2023",
      type: "Healthcare",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      description: "High-pressure wet riser system for multi-specialty hospital ensuring reliable water supply for emergency response with automated monitoring."
    },
    {
      id: 3,
      title: "Shopping Mall PA System",
      location: "Bangalore, Karnataka",
      date: "2022",
      type: "Retail",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop",
      description: "Comprehensive public address and emergency communication system covering 5 floors with zone-wise control and crystal clear audio quality."
    },
    {
      id: 4,
      title: "Residential Complex Fire Safety",
      location: "Pune, Maharashtra",
      date: "2023",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description: "Complete fire safety solution including conventional fire alarms and extinguisher systems for 200-unit residential complex with 24/7 monitoring."
    },
    {
      id: 5,
      title: "Industrial Fire NOC Project",
      location: "Chennai, Tamil Nadu",
      date: "2022",
      type: "Industrial",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      description: "Fire NOC compliance and documentation for manufacturing facility with specialized fire suppression systems and regulatory approval."
    },
    {
      id: 6,
      title: "Hotel Fire Safety Consulting",
      location: "Goa",
      date: "2023",
      type: "Hospitality",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      description: "Comprehensive fire safety audit and system upgrade recommendations for luxury resort property with guest safety prioritization."
    },
    {
      id: 7,
      title: "Educational Institution Safety",
      location: "Hyderabad, Telangana",
      date: "2022",
      type: "Educational",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
      description: "Campus-wide fire detection and alarm system covering academic blocks, hostels, and administrative buildings with student safety focus."
    },
    {
      id: 8,
      title: "Warehouse Fire Protection",
      location: "Kolkata, West Bengal",
      date: "2023",
      type: "Logistics",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      description: "Large-scale fire protection system for logistics warehouse with automated sprinkler and detection systems for inventory protection."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const currentProject = projects[currentIndex];

  const handleViewProject = () => {
    navigate(`/project/${currentProject.id}`);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full border border-blue-200 mb-4 animate-bounce">
            <Eye className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-in slide-in-from-bottom delay-300">
            Project
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-in fade-in delay-500">
            Explore our portfolio of successful fire safety projects across various industries, 
            showcasing our expertise and commitment to excellence.
          </p>
        </div>

        {/* Auto-changing Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            {/* Main Image */}
            <div className="relative w-full h-full">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* View Project Button - Positioned on the image */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <Button
                  onClick={handleViewProject}
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Project
                </Button> */}
                <Button
                  onClick={handleViewProject}
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Alternative: View Details Button at bottom right of overlay */}
              {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  onClick={handleViewProject}
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div> */}
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white animate-in slide-in-from-bottom duration-1000">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      {currentProject.type}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {currentProject.date}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {currentProject.location}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-in fade-in delay-300">
                    {currentProject.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl animate-in fade-in delay-500">
                    {currentProject.description}
                  </p>
                </div>
              </div>

              {/* Project Counter */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium animate-in fade-in delay-700">
                {currentIndex + 1} / {projects.length}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8 animate-in fade-in delay-1000">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-blue-200 w-2 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          {/* <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-8 animate-in slide-in-from-bottom delay-1200">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 group ${
                  index === currentIndex 
                    ? 'ring-2 ring-blue-600 scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${project.id}`);
                    }}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1"
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
              </button>
            ))}
          </div> */}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-in fade-in delay-1500">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-500">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20 animate-spin-slow"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our growing list of satisfied clients. Let us design and implement 
                a fire safety solution that exceeds your expectations.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}