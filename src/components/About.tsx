import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';

function getYearsSince(startYear) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return years;
}
const startYear = 2018;
const yearsActive = getYearsSince(startYear);


export default function About() {
  const achievements = [
    "NFPA Compliance Expert",
    "Government Approved Vendor",
    "300+ Successful Projects",
    yearsActive + "+ Years Industry Experience",
    "24/7 Support Available"
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: //"To achieve breakthrough results without compromising our core values. We strive hard to provide reliable and cost-effective services to customers with excellence across a range of services, ensuring both cost effectiveness and convenience.",
      "To provide comprehensive fire safety solutions that protect lives and property while ensuring complete regulatory compliance.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: //"To be a well-managed company that strives to create a sustainable business model which can inspire future generations in the true sense through skills transfer, whilst providing reliable and efficient services to our customers and improving their bottom line.",
      "To be the leading fire safety engineering company, setting industry standards for quality, innovation, and customer satisfaction.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Safety first, quality excellence, customer focus, innovation, integrity, and continuous improvement in all our services.",
      color: "from-blue-700 to-blue-800"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Wright MEP Engineering Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in fire safety engineering with over {yearsActive}+ years of experience 
            in protecting lives and property through innovative fire protection solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Leading Fire Safety Experts
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {/* Wright MEP Engineering Solutions has been at the forefront of fire safety engineering, 
              providing comprehensive solutions that combine cutting-edge technology with proven expertise. 
              Our team of certified engineers and technicians ensures that every project meets the highest 
              standards of safety and compliance. */}
              Established in January 2018, WRIGHT MEP Engineering Solution is a leading fire safety engineering 
              company based in Irinjalakuda, Thrissur. We specialize in the supply, installation, testing, and 
              commissioning of advanced fire protection systems. Our certified engineers ensure that every project 
              whether a small residential building or a large commercial complex meets the highest safety standards 
              and complies with fire department regulations.
              {/* Founded in January 2018, WRIGHT MEP Engineering Solution is a trusted leader in fire safety engineering, 
              based in Irinjalakuda, Thrissur. We specialize in the supply, installation, testing, and commissioning of 
              advanced fire protection systems. Our certified engineers ensure that every project whether a residential 
              building or a large commercial complex meets the highest safety standards and complies fully with fire 
              department regulations. */}
              </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {/* From small residential buildings to large commercial complexes, we have successfully 
              implemented fire safety systems that have protected thousands of lives and millions 
              worth of property. Our commitment to excellence and customer satisfaction has made us 
              the preferred choice for fire safety solutions. */}
              Combining advanced technology with deep industry expertise, we have successfully safeguarded countless 
              lives and valuable assets. At WRIGHT MEP, our focus is on delivering reliable, efficient, and sustainable 
              fire safety solutions, backed by expert consultancy and comprehensive documentation support, to ensure 
              the highest standards of safety and compliance.
              {/* With a blend of cutting edge technology and deep industry expertise, we have successfully safeguarded 
              countless lives and valuable assets. At WRIGHT MEP, we are committed to delivering reliable, efficient, 
              and sustainable fire safety solutions, backed by expert consultancy and comprehensive documentation, 
              providing our clients with complete peace of mind. */}
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-blue-600 text-white">1</Badge>
                  <div>
                    <h5 className="font-semibold text-gray-900">Expert Team</h5>
                    <p className="text-sm text-gray-600">Certified fire safety engineers with extensive experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-blue-600 text-white">2</Badge>
                  <div>
                    <h5 className="font-semibold text-gray-900">Quality Assurance</h5>
                    <p className="text-sm text-gray-600">Rigorous testing and quality control processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-blue-600 text-white">3</Badge>
                  <div>
                    <h5 className="font-semibold text-gray-900">Compliance Focus</h5>
                    <p className="text-sm text-gray-600">Complete regulatory compliance and documentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-blue-600 text-white">4</Badge>
                  <div>
                    <h5 className="font-semibold text-gray-900">Customer Support</h5>
                    <p className="text-sm text-gray-600">24/7 support and maintenance services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values - Updated Design */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden group">
                <CardContent className="p-8 relative">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}