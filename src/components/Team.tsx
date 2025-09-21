import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Team() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Xavier Antony",
      position: "Co-Founder & Director",
      // experience: "20+ Years",
      specialization: "Fire Safety Engineering",
      image: "assets/profile/team1.png?w=400&h=400&fit=crop&crop=face",
      description: "Leading fire safety expert with extensive experience in industrial and commercial fire protection systems.",
      qualifications: ["BE Mechanical Engineering"],
      // email: "rajesh@wrightmep.com",
      phone: "+91-98952-77526"
    },
    {
      name: "Rohith k Ravi",
      position: "Co-Founder & Director",
      // experience: "18+ Years",
      specialization: "Fire Safety Engineering",
      image: "assets/profile/team2.png?w=400&h=400&fit=crop&crop=face",
      description: "Expert in fire alarm systems design and implementation with focus on smart building integration.",
      qualifications: ["BE Mechanical Engineering"],
      // email: "priya@wrightmep.com",
      phone: "+91-97456-95020"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Leadership Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced leadership team brings decades of expertise in fire safety engineering, 
            ensuring the highest standards of service and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white overflow-hidden">
              {/* Member Photo */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Experience Badge */}
                {/* <Badge className="absolute top-4 right-4 bg-blue-600 text-white border-0 shadow-lg">
                  {member.experience}
                </Badge> */}

                {/* Contact Icons - Show on Hover */}
                {/* <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div> */}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                    <p className="text-sm text-gray-500">{member.specialization}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {member.description}
                  </p>
                  
                  {/* Qualifications */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Qualifications</p>
                    <div className="flex flex-wrap gap-1">
                      {member.qualifications.map((qual, qualIndex) => (
                        <Badge key={qualIndex} variant="outline" className="text-xs border-blue-200 text-blue-700 bg-blue-50">
                          {qual}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-3 border-t border-gray-100 space-y-1">
                    {/* <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <Mail className="w-3 h-3" />
                      <span>{member.email}</span>
                    </div> */}
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <Phone className="w-3 h-3" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Work with Our Expert Team?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get in touch with our experienced professionals for personalized fire safety solutions 
                tailored to your specific requirements.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}