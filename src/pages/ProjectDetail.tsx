import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Building, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Corporate Office Fire Alarm System",
      location: "Mumbai, Maharashtra",
      date: "2023",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description: "Complete addressable fire alarm system installation for 15-story corporate building with 200+ detection points and integrated emergency response system.",
      detailedDescription: "This comprehensive project involved the installation of a state-of-the-art addressable fire alarm system across a 15-story corporate building in Mumbai. The system features over 200 detection points strategically placed throughout the building, including smoke detectors, heat detectors, and manual call points. The project also included the integration of an emergency response system with automated notifications to local fire departments and building management.",
      features: [
        "200+ addressable detection points",
        "Integrated emergency response system",
        "24/7 monitoring capabilities",
        "Automated fire department notifications",
        "Zone-wise control and monitoring",
        "Backup power systems"
      ],
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Hospital Wet Riser System",
      location: "Delhi, NCR",
      date: "2023",
      type: "Healthcare",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      description: "High-pressure wet riser system for multi-specialty hospital ensuring reliable water supply for emergency response with automated monitoring.",
      detailedDescription: "A critical fire safety installation for a multi-specialty hospital in Delhi NCR, featuring a high-pressure wet riser system designed to ensure reliable water supply during emergency situations. The system includes automated monitoring capabilities and is designed to meet the specific requirements of healthcare facilities.",
      features: [
        "High-pressure water delivery system",
        "Automated monitoring and alerts",
        "Hospital-grade safety standards",
        "Emergency backup systems",
        "24/7 operational capability",
        "Compliance with healthcare regulations"
      ],
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Shopping Mall PA System",
      location: "Bangalore, Karnataka",
      date: "2022",
      type: "Retail",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop",
      description: "Comprehensive public address and emergency communication system covering 5 floors with zone-wise control and crystal clear audio quality.",
      detailedDescription: "A sophisticated public address and emergency communication system installed across a 5-floor shopping mall in Bangalore. The system provides zone-wise control capabilities and delivers crystal clear audio quality for both routine announcements and emergency communications.",
      features: [
        "5-floor coverage with zone control",
        "Crystal clear audio quality",
        "Emergency communication capabilities",
        "Centralized control system",
        "Background music integration",
        "Fire alarm integration"
      ],
      images: [
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Residential Complex Fire Safety",
      location: "Pune, Maharashtra",
      date: "2023",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description: "Complete fire safety solution including conventional fire alarms and extinguisher systems for 200-unit residential complex with 24/7 monitoring.",
      detailedDescription: "A comprehensive fire safety solution designed for a 200-unit residential complex in Pune. The project includes conventional fire alarm systems, strategically placed fire extinguishers, and a 24/7 monitoring system to ensure resident safety.",
      features: [
        "200-unit residential coverage",
        "Conventional fire alarm systems",
        "Strategic fire extinguisher placement",
        "24/7 monitoring system",
        "Resident safety protocols",
        "Emergency evacuation planning"
      ],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Industrial Fire NOC Project",
      location: "Chennai, Tamil Nadu",
      date: "2022",
      type: "Industrial",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      description: "Fire NOC compliance and documentation for manufacturing facility with specialized fire suppression systems and regulatory approval.",
      detailedDescription: "A comprehensive Fire NOC compliance project for a manufacturing facility in Chennai, including specialized fire suppression systems and complete regulatory documentation to ensure compliance with industrial fire safety standards.",
      features: [
        "Fire NOC compliance documentation",
        "Specialized fire suppression systems",
        "Regulatory approval assistance",
        "Industrial safety standards compliance",
        "Manufacturing facility protection",
        "Ongoing compliance monitoring"
      ],
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Hotel Fire Safety Consulting",
      location: "Goa",
      date: "2023",
      type: "Hospitality",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      description: "Comprehensive fire safety audit and system upgrade recommendations for luxury resort property with guest safety prioritization.",
      detailedDescription: "A detailed fire safety consulting project for a luxury resort in Goa, including comprehensive safety audits, system upgrade recommendations, and implementation of guest safety protocols to ensure the highest standards of fire safety in the hospitality sector.",
      features: [
        "Comprehensive fire safety audit",
        "System upgrade recommendations",
        "Guest safety prioritization",
        "Luxury resort standards compliance",
        "Emergency evacuation planning",
        "Staff training programs"
      ],
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 7,
      title: "Educational Institution Safety",
      location: "Hyderabad, Telangana",
      date: "2022",
      type: "Educational",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
      description: "Campus-wide fire detection and alarm system covering academic blocks, hostels, and administrative buildings with student safety focus.",
      detailedDescription: "A campus-wide fire safety implementation for an educational institution in Hyderabad, covering academic blocks, student hostels, and administrative buildings. The project prioritizes student safety with comprehensive detection and alarm systems.",
      features: [
        "Campus-wide coverage",
        "Academic block protection",
        "Hostel fire safety systems",
        "Administrative building coverage",
        "Student safety focus",
        "Educational compliance standards"
      ],
      images: [
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 8,
      title: "Warehouse Fire Protection",
      location: "Kolkata, West Bengal",
      date: "2023",
      type: "Logistics",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      description: "Large-scale fire protection system for logistics warehouse with automated sprinkler and detection systems for inventory protection.",
      detailedDescription: "A large-scale fire protection system designed for a logistics warehouse in Kolkata, featuring automated sprinkler systems and advanced detection technology to protect valuable inventory and ensure operational continuity.",
      features: [
        "Large-scale warehouse coverage",
        "Automated sprinkler systems",
        "Advanced detection technology",
        "Inventory protection focus",
        "Logistics operation continuity",
        "Automated response systems"
      ],
      images: [
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ]
    }
  ];

  const currentProject = projects.find(p => p.id === parseInt(id || '1'));
  const currentIndex = projects.findIndex(p => p.id === parseInt(id || '1'));

  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    navigate(`/project/${projects[nextIndex].id}`);
  };

  const prevProject = () => {
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    navigate(`/project/${projects[prevIndex].id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg"> */}
              <img src="assets/wrightmeplogo.png" alt="Logo" className="h-16 w-30 p-1" />            
              {/* </div> */}
              {/* <div>
                <h1 className="text-xl font-bold text-gray-900">Wright MEP</h1>
                <p className="text-xs text-blue-600">Engineering Solutions</p>
              </div> */}
            </div>

            {/* Back Button */}
            <Button 
              onClick={() => navigate('/')}
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
      <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <img 
          src={currentProject.image} 
          alt={currentProject.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Navigation Buttons */}
        <div className="absolute top-6 left-6 flex gap-2">
          {/* <Button
            onClick={() => navigate('/')}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button> */}
          {/* <Button
            onClick={() => navigate('/#gallery')}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Button> */}
        </div>

        {/* Project Navigation */}
        <div className="absolute top-6 right-6 flex gap-2">
          <Button
            onClick={prevProject}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={nextProject}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
          <div className="max-w-4xl">
            {/* <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {currentProject.type}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {currentProject.date}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {currentProject.location}
              </span>
            </div> */}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {currentProject.title}
            </h1>
            
            {/* <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              {currentProject.description}
            </p> */}
          </div>
        </div>

        {/* Project Counter */}
        <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
          {currentIndex + 1} / {projects.length}
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button at the top of content */}
            {/* <div className="mb-8">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="flex items-center gap-2 hover:bg-blue-50"
              >
                <Home className="w-4 h-4" />
                Back to Main Page
              </Button>
            </div> */}

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Detailed Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {currentProject.detailedDescription}
                </p>
                
                {/* <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>{currentProject.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{currentProject.date}</span>
                  </div>
                </div> */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-blue-600 px-3 py-1 text-white rounded-full text-sm font-medium">
                    {currentProject.type}
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {currentProject.date}
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {currentProject.location}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project Images Gallery */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProject.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                    <img 
                      src={image} 
                      alt={`${currentProject.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation to Next/Previous Projects */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
              <Button
                onClick={prevProject}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {/* Previous Project */}
              </Button>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  Project {currentIndex + 1} of {projects.length}
                </span>
                {/* <Button
                  onClick={() => navigate('/')}
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Main Page
                </Button> */}
              </div>
              
              <Button
                onClick={nextProject}
                variant="outline"
                className="flex items-center gap-2"
              >
                {/* Next Project */}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}