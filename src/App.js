import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Server, Smartphone, Calendar, Award, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const techStacks = {
    backend: ['Node.js', 'NestJS', 'C#', 'ASP.NET MVC', 'RESTful APIs'],
    database: ['MongoDB', 'SQL Server', 'MySQL', 'MinIO'],
    frontend: ['Next.js', 'React.js', 'TypeScript', 'Flutter'],
    tools: ['Git', 'Swagger', 'Insomnia', 'Jira', 'Figma', 'JWT']
  };

  const projects = [
    {
      title: "College Management System",
      type: "Professional Project",
      description: "Designed and developed Contact and Form modules for a university management system during internship at Quoc Bao Company.",
      achievements: [
        "Built high-performance APIs with NestJS meeting complex business requirements",
        "Integrated MinIO for secure file storage with MongoDB optimization",
        "Implemented Swagger documentation, reducing validation time by 25%",
        "Enhanced team collaboration through streamlined testing processes"
      ],
      tech: ["NestJS", "TypeScript", "MongoDB", "MinIO", "Swagger"],
      duration: "Sep 2024 - Dec 2024",
      company: "Quoc Bao Software Company"
    },
    {
      title: "HRM System",
      type: "Full-Stack Application",
      description: "Comprehensive Human Resource Management system with modern tech stack for efficient personnel data management.",
      achievements: [
        "Developed full-stack HR platform with Next.js and TypeScript",
        "Designed RESTful APIs for CRUD operations on employee data",
        "Implemented JWT authentication for secure session management",
        "Optimized MongoDB schemas for efficient data retrieval"
      ],
      tech: ["Next.js", "TypeScript", "MongoDB", "JWT", "RESTful APIs"],
      github: "https://github.com/DuckHau/hrm-system"
    },
    {
      title: "TechShop E-Commerce Platform",
      type: "MERN Stack Application",
      description: "Full-featured e-commerce platform handling product management, user authentication, and order processing.",
      achievements: [
        "Built complete e-commerce solution using MERN stack",
        "Created robust APIs with Express.js for product and order management",
        "Integrated secure user authentication and payment processing",
        "Optimized MongoDB performance for seamless transactions"
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/DuckHau/TechShop"
    },
    {
      title: "TechShop Mobile App",
      type: "Mobile Application",
      description: "Flutter mobile application with Node.js backend for task management and user authentication.",
      achievements: [
        "Developed cross-platform mobile app using Flutter/Dart",
        "Built backend API with Node.js and MongoDB integration",
        "Implemented JWT-based authentication system",
        "Structured efficient data schemas for optimal performance"
      ],
      tech: ["Flutter", "Dart", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/DuckHau/AppTechShop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">DH</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Tieu Trong Duc Hau
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
              Backend Developer
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Software Engineering graduate with hands-on experience building scalable APIs and backend systems. 
              Specialized in NestJS, Node.js, and modern database technologies with a proven track record of 
              optimizing performance and delivering enterprise-level solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/DuckHau" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=phqtquin3@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:0703625820" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Recent Software Engineering graduate from HUFLIT with a strong foundation in backend development 
                  and real-world experience building enterprise-level applications.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  During my internship at Quoc Bao Software Company, I gained valuable experience designing and 
                  developing APIs for a university management system, where I successfully reduced validation time 
                  by 25% through effective implementation of Swagger documentation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm passionate about creating efficient, scalable solutions and continuously learning new 
                  technologies to solve complex problems. My goal is to contribute to impactful projects while 
                  growing as a skilled Backend Developer.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">District 8, Ho Chi Minh City</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-gray-700">TOEIC Score: 620 (2024)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-gray-700">Available for immediate start</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Professional Experience</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Backend Developer Intern</h3>
                  <p className="text-lg text-blue-600 font-semibold">Quoc Bao Software Company</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0">
                  <p className="font-medium">Sep 2024 - Dec 2024</p>
                  <p>Ho Chi Minh City</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-700 mb-4">College Management System Project</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Designed and developed Contact and Form modules for a university management system, leveraging NestJS to build high-performance APIs that met complex business requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Integrated MinIO for secure and efficient file storage, while utilizing MongoDB to manage unstructured data with optimal performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Implemented Swagger for API documentation, streamlining testing processes and <strong>reducing validation time by 25%</strong>, enhancing team collaboration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Optimized API performance through code enhancements and database configurations, improving end-user experience</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {['NestJS', 'TypeScript', 'MongoDB', 'MinIO', 'Swagger', 'RESTful APIs'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Software Engineering</h3>
                  <p className="text-lg text-blue-600 font-semibold">Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT)</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0 text-right">
                  <p className="font-medium">Oct 2021 - Jul 2025</p>
                  <p>Ho Chi Minh City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{project.type}</p>
                      {project.company && (
                        <p className="text-gray-600 text-sm">{project.company}</p>
                      )}
                      {project.duration && (
                        <p className="text-gray-500 text-sm">{project.duration}</p>
                      )}
                    </div>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Server className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-lg font-bold text-gray-800 mb-4">Backend</h3>
                <div className="space-y-2">
                  {techStacks.backend.map(skill => (
                    <div key={skill} className="text-sm text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Database className="mx-auto mb-4 text-green-600" size={48} />
                <h3 className="text-lg font-bold text-gray-800 mb-4">Database</h3>
                <div className="space-y-2">
                  {techStacks.database.map(skill => (
                    <div key={skill} className="text-sm text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Code className="mx-auto mb-4 text-purple-600" size={48} />
                <h3 className="text-lg font-bold text-gray-800 mb-4">Frontend</h3>
                <div className="space-y-2">
                  {techStacks.frontend.map(skill => (
                    <div key={skill} className="text-sm text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Smartphone className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="text-lg font-bold text-gray-800 mb-4">Tools & Others</h3>
                <div className="space-y-2">
                  {techStacks.tools.map(skill => (
                    <div key={skill} className="text-sm text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-12">
              I'm actively seeking backend developer opportunities where I can contribute my skills 
              and continue growing. Let's discuss how I can help your team build amazing products.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=phqtquin3@gmail.com" className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <Mail className="text-blue-600 mb-4" size={40} />
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">phqtquin3@gmail.com</p>
              </a>
              
              <a href="tel:0703625820" className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <Phone className="text-green-600 mb-4" size={40} />
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">0703625820</p>
              </a>
              
              <a href="https://github.com/DuckHau" className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <Github className="text-gray-800 mb-4" size={40} />
                <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
                <p className="text-gray-600">github.com/DuckHau</p>
              </a>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to hire?</h3>
              <p className="text-lg mb-6 opacity-90">
                I'm available for full-time backend developer positions and excited to contribute 
                to your team's success.
              </p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=phqtquin3@gmail.com&subject=Backend%20Developer%20Opportunity"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Tieu Trong Duc Hau. Crafted with passion for backend development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
