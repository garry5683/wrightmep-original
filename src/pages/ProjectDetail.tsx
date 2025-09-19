import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Home, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ProjectService } from '@/services/projectService';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/', { state: sectionId ? { scrollTo: sectionId } : undefined });
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

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


      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-10">
        <div className="absolute inset-0 bg-black/20">
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
        </div>

        <div className="relative container mx-auto px-4">
          
          <div className="max-w-4xl mx-auto">


            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentProject.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-2">
              <span className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-1 ${getTypeColor(currentProject.type)} `}>
                <Building className="w-4 h-4" />
                {currentProject.type}
              </span>
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-4 h-4" />
                <span>{currentProject.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-4 h-4" />
                <span>{currentProject.location}</span>
              </div>
            </div>

            <p className="text-xl text-white/90 leading-relaxed">
              {currentProject.description}
            </p>
          </div>
        </div>

        {/* Project Counter */}
        <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
          {currentIndex + 1} / {projects.length}
        </div>

      </section>


      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Project Image */}
              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
              </div>

              {/* currentProject Details */}
              <div className="space-y-8">
                {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {currentProject.detailedDescription}
                </p>
              
                {/* <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Building className="w-4 h-4" />
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
                </div> */}
              </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2">
                        {currentProject.features.map((spec, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>

              </div>
              
            </div>
            
            {/* Project Images Gallery */}
            {currentProject.images.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 mt-8">Project Gallery</h3>
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
            )}

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
      
    </div>
  );
}