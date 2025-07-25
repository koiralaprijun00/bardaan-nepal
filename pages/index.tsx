import React, { useState, useEffect } from 'react';
import { Leaf, Users, Target, Phone, Mail, MapPin, Globe, TreePine, BookOpen, Award, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react';

const BardanOnePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavButton = ({ section, children, icon }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === section
          ? 'bg-green-600 text-white shadow-lg'
          : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
      }`}
    >
      {icon}
      {children}
    </button>
  );

  const services = [
    { icon: <BookOpen className="w-6 h-6" />, title: "Scientific Research", desc: "Biological, environmental, and agricultural research services" },
    { icon: <Target className="w-6 h-6" />, title: "Project Management", desc: "Planning, monitoring, evaluation, and implementation" },
    { icon: <TreePine className="w-6 h-6" />, title: "Conservation Services", desc: "Biodiversity and ecosystem conservation strategies" },
    { icon: <Globe className="w-6 h-6" />, title: "Climate Change", desc: "Mitigation, adaptation, and REDD+ services" },
    { icon: <Users className="w-6 h-6" />, title: "Capacity Building", desc: "Training, technology transfer, and institutional development" },
    { icon: <Award className="w-6 h-6" />, title: "Knowledge Management", desc: "Database management and information dissemination" }
  ];

  const boardMembers = [
    {
      name: "Dr. Suresh Kumar Ghimire",
      position: "Chairperson",
      title: "Plant Scientist",
      experience: "16+ years in Plant Science research"
    },
    {
      name: "Dr. Surendra Bahadur Thapa",
      position: "Deputy Chairperson", 
      title: "Agro-socio-economist",
      experience: "18+ years in community development"
    },
    {
      name: "Mr. Bhesh Raj Oli",
      position: "Managing Director",
      title: "Plant Biologist",
      experience: "10+ years in environmental management"
    },
    {
      name: "Mr. Dipesh Pyakurel",
      position: "Program Director",
      title: "Botanist",
      experience: "11+ years in biodiversity survey"
    }
  ];



  const stats = [
    { number: "13+", label: "Years of Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100+", label: "Clients Served" },
    { number: "25+", label: "Research Publications" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BARDAN</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Biodiversity Associates for Research, Development and Action-Nepal</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              <NavButton section="home" icon={<Leaf className="w-4 h-4" />}>Home</NavButton>
              <NavButton section="about" icon={<Users className="w-4 h-4" />}>About</NavButton>
              <NavButton section="services" icon={<Target className="w-4 h-4" />}>Services</NavButton>
              <NavButton section="team" icon={<Users className="w-4 h-4" />}>Team</NavButton>
              <NavButton section="contact" icon={<Phone className="w-4 h-4" />}>Contact</NavButton>
            </nav>
            <button
              onClick={() => scrollToSection('contact')}
              className="md:hidden px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Home Section - KEEP AS BANNER */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Leaf className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leading the Future of <span className="text-green-600">Biodiversity Conservation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Professional services in biodiversity conservation, natural resource management, climate change, and sustainable development in Nepal since 2011
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - SPLIT LAYOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About BARDAN</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2011, BARDAN is an independent, profit-not-distributing company established by natural resource management professionals, development experts, and social activists.
              </p>
              <p className="text-gray-600 mb-8">
                We are dedicated to being a leading professional institution delivering standard and quality services in biodiversity conservation, environmental management, and contributing to globally important sectors in natural resources and climate change in Nepal.
              </p>
              
              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Excellence</h3>
                    <p className="text-gray-600 text-sm">Delivering standard and quality services in biodiversity conservation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Impact</h3>
                    <p className="text-gray-600 text-sm">Contributing to globally important environmental sectors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation Leadership</h3>
                    <p className="text-gray-600 text-sm">Implementing complex pilot projects as role models</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-green-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Focus Areas - HORIZONTAL SCROLL */}
          <div className="bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Focus Areas</h3>
            <div className="flex overflow-x-auto gap-6 pb-4">
              {[
                { icon: TreePine, title: "Forest Management", bgColor: "bg-green-500" },
                { icon: Leaf, title: "Species Conservation", bgColor: "bg-blue-500" },
                { icon: Globe, title: "Climate Adaptation", bgColor: "bg-purple-500" },
                { icon: Target, title: "REDD+ Programs", bgColor: "bg-emerald-500" },
                { icon: Users, title: "Sustainable Livelihoods", bgColor: "bg-orange-500" },
                { icon: BookOpen, title: "Conservation Awareness", bgColor: "bg-pink-500" },
                { icon: Award, title: "Good Governance", bgColor: "bg-indigo-500" },
                { icon: TreePine, title: "NTFPs Promotion", bgColor: "bg-teal-500" },
                { icon: Target, title: "EIA/IEE Services", bgColor: "bg-cyan-500" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex-shrink-0 w-40 text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - FEATURE + GRID COMBO */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive professional services in biodiversity conservation, environmental management, and sustainable development
            </p>
          </div>

          {/* Clean Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
                  <div className="text-green-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - CLEAN PROFILE LAYOUT */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving excellence in natural resource management and sustainable development
            </p>
          </div>

          {/* Clean Team Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-xl mx-auto mb-6">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-1">{member.title}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section - SPLIT SCREEN LAYOUT */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your project or learn more about our services? We'd love to hear from you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-600">Balkhu, Kathmandu MP City-14<br />P.O. Box: 4555, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                      <p className="text-gray-600">+977-1-4036359<br />+977-9841527467</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">bardan.np@mail.com</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Key Contacts Side */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Personnel</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6 py-4">
                  <h4 className="text-xl font-bold text-gray-900">Bhesh Raj Oli</h4>
                  <p className="text-green-600 font-semibold mb-2">Managing Director</p>
                  <div className="space-y-1 text-gray-600">
                    <p>📞 +977-9841527467</p>
                    <p>✉️ bheshrajo@yahoo.com</p>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 py-4">
                  <h4 className="text-xl font-bold text-gray-900">Dipesh Pyakurel</h4>
                  <p className="text-blue-600 font-semibold mb-2">Program Director</p>
                  <div className="space-y-1 text-gray-600">
                    <p>📞 +977-9751019322</p>
                    <p>✉️ dipeshpyakurel@gmail.com</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">BARDAN</h3>
                <p className="text-gray-400 text-sm">Biodiversity Associates for Research, Development and Action-Nepal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading professional institution in biodiversity conservation and sustainable development since 2011
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">&copy; 2024 BARDAN Nepal. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BardanOnePage;