
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Target,
  Laptop,
  Server,
  Network,
  TrendingUp,
  Building,
  Settings,
  Wifi,
  Clock,
  DollarSign,
  Briefcase,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Scroll animation
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for reveal animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const services = [
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Complete network design and implementation solutions for businesses of all sizes.",
      features: ["LAN/WAN Setup", "Wireless Networks", "Network Security", "Performance Optimization"]
    },
    {
      icon: Server,
      title: "IT Consulting", 
      description: "Expert guidance for your technology strategy and digital transformation journey.",
      features: ["Technology Assessment", "Strategic Planning", "Digital Solutions", "System Integration"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from digital threats.",
      features: ["Security Audits", "Threat Protection", "Data Encryption", "Compliance Support"]
    },
    {
      icon: Zap,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Management", "Backup Solutions", "Scalability Planning"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const offerings = [
    {
      icon: Clock,
      title: "Save Time",
      description: "We provide the best solutions and services to save your time",
      color: "bg-blue-500"
    },
    {
      icon: DollarSign,
      title: "Save Money",
      description: "We provide the best solutions and services to save your money",
      color: "bg-green-500"
    },
    {
      icon: Briefcase,
      title: "Save Effort",
      description: "We provide the best solutions and services to save your effort",
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Increase Project Revenue",
      description: "We provide the best solutions to increase your project revenue",
      color: "bg-orange-500"
    },
    {
      icon: Target,
      title: "Best Project Results",
      description: "We work on your project to achieve the best results",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <Network className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white gradient-text">
                AL-LINK
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
              <a href="#home" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">About</a>
              <a href="#services" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Services</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 glass-effect">
                Send Message
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a 
                  href="#home" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 glass-effect mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Send Message
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen section-overlay bg-hero-pattern flex items-center relative"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight gradient-text animate-fade-in-up">
              Our Goal
            </h1>
            <div className="text-lg sm:text-xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up stagger-delay-2">
              <div className="animate-typing inline-block">
                Building long-term relationships with our clients
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90 animate-fade-in-up stagger-delay-3">
              And providing the best solutions for their needs
            </p>
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 animate-bounce-in stagger-delay-4 shadow-2xl"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-24 section-overlay reveal" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="glass-effect rounded-xl p-8 hover-lift">
              <img 
                src="/api/placeholder/600/400" 
                alt="Professional meeting" 
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="text-white space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-right gradient-text">
                Who Are We?
              </h2>
              <div className="space-y-4 text-right text-lg leading-relaxed">
                <p className="animate-slide-in-right stagger-delay-1">
                  We are specialists in managing and operating parking systems and vehicle registration systems.
                </p>
                <p className="animate-slide-in-right stagger-delay-2">
                  We wash and maintain vehicles, operate and maintain parking facilities in a scientific and 
                  artificial intelligence manner.
                </p>
                <p className="animate-slide-in-right stagger-delay-3">
                  We are an advanced cloud system that does not require the latest technologies and development.
                </p>
                <p className="animate-slide-in-right stagger-delay-4">
                  We dream that we will be the leaders in this field in the Middle East region and the Kingdom of Saudi Arabia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 section-overlay reveal" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6 text-white text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-16 gradient-text">
            What Do We Offer Our Clients?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            {offerings.map((offering, index) => (
              <div key={index} className="text-center group hover-lift reveal">
                <div className="mb-6 flex justify-center">
                  <div className={`p-6 ${offering.color} rounded-xl shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                    <offering.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-lg sm:text-xl">{offering.title}</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 section-overlay reveal" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6 text-white text-center">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-16 gradient-text">
            Our Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group hover-lift reveal">
              <div className="glass-effect rounded-xl p-6 sm:p-8 mb-6 transform group-hover:scale-105 transition-all duration-500">
                <Building className="h-12 w-12 sm:h-16 sm:w-16 text-amber-400 mx-auto mb-4 sm:mb-6" />
                <h4 className="font-bold mb-4 text-xl sm:text-2xl">Parking Management & Establishment</h4>
                <p className="text-white/80 text-sm sm:text-base">Complete parking facility management solutions</p>
              </div>
            </div>
            <div className="text-center group hover-lift reveal">
              <div className="glass-effect rounded-xl p-6 sm:p-8 mb-6 transform group-hover:scale-105 transition-all duration-500">
                <Server className="h-12 w-12 sm:h-16 sm:w-16 text-amber-400 mx-auto mb-4 sm:mb-6" />
                <h4 className="font-bold mb-4 text-xl sm:text-2xl">Vehicle Fleet Service</h4>
                <p className="text-white/80 text-sm sm:text-base">Professional vehicle fleet management and maintenance</p>
              </div>
            </div>
            <div className="text-center group hover-lift reveal">
              <div className="glass-effect rounded-xl p-6 sm:p-8 mb-6 transform group-hover:scale-105 transition-all duration-500">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-amber-400 mx-auto mb-4 sm:mb-6" />
                <h4 className="font-bold mb-4 text-xl sm:text-2xl">Parking Management & Crowd Control</h4>
                <p className="text-white/80 text-sm sm:text-base">Advanced crowd control and parking optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 section-overlay reveal" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white gradient-text">
              Our Achievements
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Years of excellence in delivering innovative solutions and building lasting partnerships
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover-lift reveal">
                <div className="glass-effect rounded-xl p-8 transform group-hover:scale-105 transition-all duration-500">
                  <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4 animate-bounce-in">
                    {stat.number}
                  </div>
                  <p className="text-white/80 text-lg font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 section-overlay reveal" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center gradient-text">
                Contact Us
              </h2>
              <p className="text-xl mb-12 text-center text-white/90">
                We will contact you at the earliest time
              </p>
              
              <div className="space-y-6 max-w-md mx-auto">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-4 rounded-xl border border-white/30 glass-effect text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="p-4 rounded-xl border border-white/30 glass-effect text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      className="p-4 rounded-xl border border-white/30 glass-effect text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50"
                    />
                  </div>
                </div>
                <div className="group">
                  <textarea 
                    placeholder="Message" 
                    rows={5}
                    className="w-full p-4 rounded-xl border border-white/30 glass-effect text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50 resize-none"
                  ></textarea>
                </div>
                <Button 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Send Message <Mail className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-3xl font-bold mb-12 text-center gradient-text">
                Visit Our Office
              </h3>
              
              <div className="glass-effect rounded-xl p-8 mb-8 hover-lift">
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Office location" 
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-xl"
                />
              </div>

              <div className="space-y-6 text-right">
                <div className="group">
                  <h4 className="font-bold text-2xl text-amber-400 mb-2">Riyadh</h4>
                </div>
                <div className="glass-effect rounded-lg p-4 hover-lift">
                  <div className="flex items-center justify-end space-x-3 mb-2">
                    <span className="font-semibold text-amber-400">Address</span>
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <p className="text-white/90">Kingdom of Saudi Arabia - Al Malqa District KSA</p>
                </div>
                <div className="glass-effect rounded-lg p-4 hover-lift">
                  <div className="flex items-center justify-end space-x-3 mb-2">
                    <span className="font-semibold text-amber-400">Email</span>
                    <Mail className="h-5 w-5 text-amber-400" />
                  </div>
                  <p className="text-white/90">info@al-link.com</p>
                </div>
                <div className="glass-effect rounded-lg p-4 hover-lift">
                  <div className="flex items-center justify-end space-x-3 mb-2">
                    <span className="font-semibold text-amber-400">Unified Communication Center</span>
                    <Phone className="h-5 w-5 text-amber-400" />
                  </div>
                  <p className="text-white/90">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-overlay-brown py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-700/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-white mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Network className="h-10 w-10 text-amber-400" />
                <span className="text-3xl font-bold gradient-text">AL-LINK</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md text-lg leading-relaxed">
                Professional network and IT solutions provider, connecting businesses to the future 
                of technology with reliable, secure, and scalable infrastructure.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="rounded-full glass-effect border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white transition-all duration-300">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="rounded-full glass-effect border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white transition-all duration-300">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="rounded-full glass-effect border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white transition-all duration-300">
                  Twitter
                </Button>
              </div>
            </div>
            <div className="group">
              <h4 className="font-bold mb-6 text-xl text-amber-400">Services</h4>
              <ul className="space-y-3 text-white/80">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">Network Infrastructure</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">IT Consulting</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">Cybersecurity</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">Cloud Solutions</li>
              </ul>
            </div>
            <div className="group">
              <h4 className="font-bold mb-6 text-xl text-amber-400">Contact</h4>
              <ul className="space-y-3 text-white/80">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">+1 (555) 123-4567</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">info@al-link.com</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Al Malqa District</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Riyadh, KSA</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 border-white/20" />
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80">
            <p className="text-lg">
              © 2024 AL-LINK. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-amber-500 hover:bg-amber-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Mail className="h-6 w-6" />
        </Button>
      </div>

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <div className="fixed bottom-8 left-8 z-50">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full w-16 h-16 glass-effect border-white/30 text-white hover:bg-white/10 shadow-2xl hover:scale-110 transition-all duration-300"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ArrowRight className="h-6 w-6 transform -rotate-90" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
