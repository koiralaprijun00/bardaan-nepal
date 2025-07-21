import React, { useState, useEffect } from 'react';
import { Leaf, Users, Target, Phone, Mail, MapPin, Globe, TreePine, BookOpen, Award, ChevronUp, ArrowRight } from 'lucide-react';

const BardanOnePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'projects', 'contact'];
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

  const projects = [
    "Review of Marketable NTFPs - UN-FAO",
    "Five Years Strategic Plan for NTFPs - FNCCI/NEHHPA",
    "Market Study of Medicinal Plants - Department of Plant Resources",
    "Vegetation Study for Bagmati River Basin - Asian Development Bank",
    "Training on CITES to Police Personnel - WWF Nepal",
    "PES Mechanism Development - WWF Nepal"
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
              <NavButton section="projects" icon={<Award className="w-4 h-4" />}>Projects</NavButton>
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

      {/* Home Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About BARDAN</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Founded in 2011, BARDAN is an independent, profit-not-distributing company established by natural resource management professionals, development experts, and social activists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To be a leading professional institution delivering standard and quality services in biodiversity conservation and environmental management.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Focus</h3>
              <p className="text-gray-600">
                Contributing to globally important sectors in natural resources, environmental management, and climate change in Nepal.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Approach</h3>
              <p className="text-gray-600">
                Implementing complex pilot projects to showcase success and act as role models in our field of expertise.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Key Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="text-green-100">• Sustainable Forest Management</div>
                <div className="text-green-100">• Species Conservation</div>
                <div className="text-green-100">• Climate Change Adaptation</div>
              </div>
              <div className="space-y-2">
                <div className="text-green-100">• REDD+ Implementation</div>
                <div className="text-green-100">• Sustainable Livelihoods</div>
                <div className="text-green-100">• Conservation Awareness</div>
              </div>
              <div className="space-y-2">
                <div className="text-green-100">• Good Governance</div>
                <div className="text-green-100">• NTFPs Promotion</div>
                <div className="text-green-100">• EIA/IEE Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive professional services in biodiversity conservation, environmental management, and sustainable development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scientific & Academic Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Biological and Environmental Studies</li>
                <li>• Baseline Surveys and Assessments</li>
                <li>• Statistical Analysis and Research</li>
                <li>• Restoration and Management Planning</li>
                <li>• Inventories and Assessments</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Management Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Project Planning and Design</li>
                <li>• Monitoring and Evaluation</li>
                <li>• Training and Technology Transfer</li>
                <li>• EIA/IEE Services</li>
                <li>• Business Plan Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team consists of experienced professionals with expertise in natural resource management and sustainable development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-1">{member.position}</p>
                <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                <p className="text-gray-500 text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Completed Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successfully completed projects showcasing our expertise in biodiversity conservation and sustainable development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.split(' - ')[0]}</h3>
                    <p className="text-green-600 font-medium text-sm">{project.split(' - ')[1]}</p>
                    <div className="mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium inline-block">
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your project or learn more about our services? Contact our team today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Balkhu, Kathmandu MP City-14, P.O. Box: 4555, Nepal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+977-1-4036359 / +977-9841527467</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">bardan.np@mail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Contacts</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900">Bhesh Raj Oli</h4>
                  <p className="text-green-600 font-medium">Managing Director</p>
                  <p className="text-gray-600 text-sm">+977-9841527467 • bheshrajo@yahoo.com</p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900">Dipesh Pyakurel</h4>
                  <p className="text-blue-600 font-medium">Program Director</p>
                  <p className="text-gray-600 text-sm">+977-9751019322 • dipeshpyakurel@gmail.com</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Visit Our Blog</h4>
                  <p className="text-green-100 text-sm mb-2">Stay updated with our latest work and insights</p>
                  <a href="http://www.nepalbardan.wordpress.com" className="text-white underline hover:text-green-100">
                    nepalbardan.wordpress.com
                  </a>
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