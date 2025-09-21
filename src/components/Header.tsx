import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
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
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm border-b border-blue-200 z-50 shadow-sm">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/','home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/','services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Our Services
            </button>
            <button 
              onClick={() => handleNavigation('/','gallery')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Project Gallery
            </button>
            <button 
              onClick={() => handleNavigation('/','awards')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Awards
            </button>
            <button 
              onClick={() => handleNavigation('/','team')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => handleNavigation('/','about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('/','contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91-98952-77526</span>
            </div>
            <Button 
              onClick={() => handleNavigation('/','contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/','home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/','services')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/','gallery')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Project Gallery
              </button>
              <button 
                onClick={() => handleNavigation('/','awards')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Awards
              </button>
              <button 
                onClick={() => handleNavigation('/','team')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Team
              </button>
              <button 
                onClick={() => handleNavigation('/','about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/','contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-blue-200">
                <Button 
                  onClick={() => handleNavigation('/','contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  Free Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}