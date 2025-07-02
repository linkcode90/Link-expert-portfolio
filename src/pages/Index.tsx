
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
  Wifi
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      icon: Laptop,
      title: "Network Design",
      description: "Custom network solutions designed to meet your specific business requirements and growth projections."
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration of new technologies with your existing infrastructure for optimal performance."
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Advanced wireless networking solutions for reliable connectivity across your entire organization."
    },
    {
      icon: Building,
      title: "Enterprise Support",
      description: "Comprehensive enterprise-level support and maintenance services for mission-critical systems."
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "International networking solutions to connect your business operations worldwide."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Network className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">
                AL-LINK
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Send Message
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen section-overlay bg-hero-pattern flex items-center">
        <div className="container mx-auto px-6 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Goal
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Building long-term relationships with our clients and providing the best solutions for their needs
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 section-overlay" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <img 
                src="/api/placeholder/600/400" 
                alt="Professional meeting" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-right">
                Who Are We?
              </h2>
              <p className="text-lg leading-relaxed text-right">
                We are specialists in managing and operating parking systems and vehicle registration systems. 
                We wash and maintain vehicles, operate and maintain parking facilities in a scientific and 
                artificial intelligence manner. We are an advanced cloud system that does not require the 
                latest technologies and development. We dream that we will be the leaders in this field in 
                the Middle East region and the Kingdom of Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 section-overlay" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            What Do We Offer Our Clients?
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8 mb-16">
            {offerings.map((offering, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 border-2 border-amber-400 rounded-lg">
                    <offering.icon className="h-8 w-8 text-amber-400" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{offering.title}</h3>
                <p className="text-sm text-white/80">{offering.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-12">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <Building className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Parking Management & Crowd Control</h4>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <Server className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Vehicle Fleet Service</h4>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <Settings className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Parking Management & Establishment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-overlay" style={{backgroundImage: "url('/api/placeholder/1920/800')"}}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Contact Us
              </h2>
              <p className="text-lg mb-8 text-center">
                We will contact you at the earliest time
              </p>
              
              <div className="space-y-4 max-w-md mx-auto">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="p-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="p-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                  />
                </div>
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full p-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                ></textarea>
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Visit Our Office
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Office location" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>

              <div className="space-y-4 text-right">
                <div>
                  <h4 className="font-semibold text-amber-400">Riyadh</h4>
                </div>
                <div>
                  <h5 className="font-semibold">Address</h5>
                  <p>Kingdom of Saudi Arabia - Al Malqa District KSA</p>
                </div>
                <div>
                  <h5 className="font-semibold">Email</h5>
                  <p>info@al-link.com</p>
                </div>
                <div>
                  <h5 className="font-semibold">Unified Communication Center</h5>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-overlay-brown py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Network className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">AL-LINK</span>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Professional network and IT solutions provider, connecting businesses to the future 
                of technology with reliable, secure, and scalable infrastructure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Network Infrastructure</li>
                <li>IT Consulting</li>
                <li>Cybersecurity</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li>+1 (555) 123-4567</li>
                <li>info@al-link.com</li>
                <li>Al Malqa District</li>
                <li>Riyadh, KSA</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 border-white/20" />
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80">
            <p>
              © 2024 AL-LINK. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
