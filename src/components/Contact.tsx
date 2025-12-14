import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  Building
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your inquiry! We will contact you within 24 hours.');
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     company: '',
  //     service: '',
  //     message: ''
  //   });
  // };

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-3 sm:px-4 py-2 rounded-full border border-blue-200 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-blue-700">Let's Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Ready to Secure
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block">Your Property?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Get professional fire safety consultation and detailed quotations from our certified engineers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {/* Contact Form - Takes 60% on large screens (3/5 columns) */}
            <div className="lg:col-span-5 order-1">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-0 mx-1 sm:mx-0">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Send Your Requirements</h3>
                    <p className="text-sm sm:text-base text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
                  </div>
                </div>
                
                <form className="space-y-4 sm:space-y-6" action="https://formspree.io/f/xnngajok" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium text-sm">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91-XXXXXXXXXX"
                          className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700 font-medium text-sm">Company/Organization</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="pl-10 sm:pl-12 h-10 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-700 font-medium text-sm">Service Required</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-10 sm:h-12 px-3 sm:px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="fire-alarm-conventional">Fire Alarm Conventional System</option>
                      <option value="fire-alarm-addressable">Fire Alarm Addressable System</option>
                      <option value="wet-riser">Wet Riser System</option>
                      <option value="pa-system">PA & Talk Back System</option>
                      <option value="fire-noc">Fire NOC</option>
                      <option value="fire-noc-renewal">Fire NOC Renewal</option>
                      <option value="extinguisher-refilling">Fire Extinguisher Refilling</option>
                      <option value="boq-preparation">Fire System BOQ Preparation</option>
                      <option value="consulting">Fire System Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div> */}

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium text-sm">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project requirements, building type, area, timeline, and any specific needs..."
                      rows={4}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none text-sm sm:text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-4 h-12 sm:h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Send Message & Get Free Consultation
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information & Map - Takes 40% on large screens (2/5 columns) */}
            <div className="lg:col-span-5 order-2 space-y-4 sm:space-y-6 mx-1 sm:mx-0">
              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4">
                {/* Row 1: Call Us and Email Us */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-blue-100">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-sm sm:text-base">
                          Call Us
                        </h4>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm truncate">+91-98952-77526</p>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">+91-97456-95020</p>
                        <p className="text-gray-500 text-xs mt-1">Speak directly with our experts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-blue-100">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-sm sm:text-base">
                          Email Us
                        </h4>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm truncate">wrightmep@gmail.com</p>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">
                          {/* wrightmep@gmail.com */}
                          </p>
                        <p className="text-gray-500 text-xs mt-1">Get detailed responses to your queries</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2: Visit Office and Working Hours */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-blue-100">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-sm sm:text-base">
                          Visit Office
                        </h4>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm">First floor, Marigold rose residency,</p>
                        <p className="text-gray-600 text-xs sm:text-sm">near Metro Health Care, Irinjalakuda, Kerala 680121</p>
                        <p className="text-gray-500 text-xs mt-1">Meet our team in person</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-blue-100">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-sm sm:text-base">
                          Working Hours
                        </h4>
                        <p className="text-gray-800 font-medium text-xs sm:text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 text-xs sm:text-sm">24/7 Support Available</p>
                        <p className="text-gray-500 text-xs mt-1">We're here when you need us</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-blue-100">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <h4 className="font-bold flex items-center text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Our Location
                  </h4>
                </div>
                <div className="h-40 sm:h-48 lg:h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.553423071519!2d76.2073201!3d10.3433503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f7a1b6b51729%3A0x4efbca91c4b78989!2sWRIGHT%20MEP%20ENGINEERING%20SOLUTION!5e0!3m2!1sen!2sin!4v1694692200000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wright MEP Engineering Solutions Office Location"
                  ></iframe>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <strong>Address:</strong> First floor, Marigold rose residency
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <strong>Landmark:</strong> Near Metro Health Care, Irinjalakuda, Kerala 680121
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}