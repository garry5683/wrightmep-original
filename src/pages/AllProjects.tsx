import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, Home, MapPin, Calendar, ArrowRight, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectService } from '@/services/projectService';

export default function AllProjects() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = ProjectService.getAllProjects();

  const getTypeColor = (type: string) => {
    const colors = {
      Commercial: 'bg-blue-100 text-blue-800',
      Healthcare: 'bg-green-100 text-green-800',
      Retail: 'bg-purple-100 text-purple-800',
      Residential: 'bg-orange-100 text-orange-800',
      Industrial: 'bg-red-100 text-red-800',
      Hospitality: 'bg-pink-100 text-pink-800',
      Educational: 'bg-indigo-100 text-indigo-800',
      Logistics: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/', { state: sectionId ? { scrollTo: sectionId } : undefined });
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 cursor-pointer group">
                <img src="assets/wrightmeplogo.png" alt="Logo" className="h-20 w-30 p-1" />            
            </div>

            {/* Back Button */}
            <Button 
              onClick={() => handleNavigation('/','gallery')}
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
              <span className="text-sm font-medium text-blue-700">Our Work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              A Glimpse of Our Creations
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block">Fire Safety Services</span> */}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Through every project, we bring together technology, expertise, and commitment to deliver safer environments, with tailored fire protection solutions built with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getTypeColor(project.type)}`}>
                        <Building className="w-4 h-4" />
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {project.title}
                    </h3>

                        {/* <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{project.location}</span>
                        </span>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{project.date}</span>
                        </span>
                        </div> */}

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* View Project Button */}
                      {/* <div className="mt-auto"> */}
                    <Button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    {/* </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
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