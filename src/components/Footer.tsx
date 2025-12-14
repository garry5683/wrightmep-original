import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  function getYearsSince(startYear) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return years;
}
const startYear = 2018;
const yearsActive = getYearsSince(startYear);

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-48 translate-x-48"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 " >
              <div className="w-44 h-18 bg-gradient-to-r from-white to-white rounded-xl flex items-center justify-center shadow-lg">
              <img src="assets/wrightmeplogo.png" alt="Logo" className="h-18 w-42 p-1"  />            
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">Wright MEP</h3>
                <p className="text-sm text-slate-400">Engineering Solution</p>
              </div> */}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Professional fire safety engineering solutions with over {yearsActive}+ years of experience 
              in protecting lives and property through innovative fire protection systems and comprehensive compliance services.
            </p>
            <div className="flex space-x-4">
              <div 
                onClick={() => window.open('https://www.facebook.com/share/1CPyHrjMdM/', '_blank')}
                className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors cursor-pointer">
                <span className="text-blue-400 text-sm font-bold">f</span>
              </div>
              {/* <div 
                onClick={() => window.open('https://www.linkedin.com/company/wright-mep-engineering-solutions/', '_blank')}
                className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors cursor-pointer">
                <span className="text-blue-400 text-sm font-bold">in</span>
              </div> */}
              <div 
                onClick={() => window.open('https://www.instagram.com/wright_mep?utm_source=qr&igsh=dmNja3pjaTMybXZ6', '_blank')}
                className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors cursor-pointer">
                <span className="text-blue-400 text-sm font-bold">@</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                >
                  Project Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('awards')}
                  className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                >
                  Awards
                </button>
              </li>
              <li>
                  <button 
                  onClick={() => scrollToSection('team')}
                  className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="hover:text-white transition-colors cursor-pointer">Fire Hydrant Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fire Sprinkler System</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fire Alarm Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fire NOC Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fire Extinguisher Refilling</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fire System BOQ Preparation / Consulting</li>
              <li className="hover:text-white transition-colors cursor-pointer">Wet Riser Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">PA & Talk Back Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Annual Maintenance Contract</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-blue-600/30 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm text-slate-300">
                  <p className="hover:text-white transition-colors cursor-pointer">+91-98952-77526</p>
                  <p className="hover:text-white transition-colors cursor-pointer">+91-97456-95020</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm text-slate-300">
                  <p className="hover:text-white transition-colors cursor-pointer">wrightmep@gmail.com</p>
                  {/* <p className="hover:text-white transition-colors cursor-pointer">wrightmep@gmail.com</p> */}
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-blue-600/30 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm text-slate-300">
                  {/* <p className="hover:text-white transition-colors">WRIGHT MEP ENGINEERING SOLUTION,</p> */}
                  <p className="hover:text-white transition-colors">First floor, Marigold rose residency,</p>
                  <p className="hover:text-white transition-colors">near Metro Health Care,</p>
                  <p className="hover:text-white transition-colors">Irinjalakuda, Kerala 680121</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-blue-600/30 transition-colors">
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm text-slate-300">
                  <p className="hover:text-white transition-colors">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="hover:text-white transition-colors">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {currentYear} Wright MEP Engineering Solution. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}