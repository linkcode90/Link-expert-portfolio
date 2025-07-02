
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
  X,
  Languages,
  Car,
  Battery,
  Wrench
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Set initial direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
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
  }, [isRTL]);

  const services = [
    {
      icon: Building,
      title: t('services.parkingManagement'),
      description: "Complete parking facility management and establishment solutions",
      features: ["Parking System Design", "Smart Parking Technology", "Access Control", "Payment Solutions"],
      iconImage: "https://link-expert.sa/images/L6_1.webp"
    },
    {
      icon: Car,
      title: t('services.vehicleFleet'),
      description: "Professional vehicle fleet management and maintenance",
      features: ["Car Washing Services", "Fleet Maintenance", "Vehicle Registration", "Service Management"],
      iconImage: "https://link-expert.sa/images/L7_1.webp"
    },
    {
      icon: Users,
      title: t('services.crowdControl'),
      description: "Advanced crowd control and parking area management solutions",
      features: ["Traffic Management", "Crowd Flow Control", "Security Systems", "Monitoring Solutions"],
      iconImage: "https://link-expert.sa/images/L8_1.webp"
    },
    {
      icon: Settings,
      title: t('services.membershipManagement'),
      description: "Professional membership management solutions",
      features: ["Member Registration", "Access Management", "Billing Systems", "Customer Support"],
      iconImage: "https://link-expert.sa/images/L9_1.webp"
    },
    {
      icon: Server,
      title: t('services.busGolfCar'),
      description: "Bus and golf car transportation services",
      features: ["Transportation Solutions", "Vehicle Maintenance", "Route Planning", "Safety Management"],
      iconImage: "https://link-expert.sa/images/L10_1.webp"
    },
    {
      icon: Battery,
      title: t('services.energyCharging'),
      description: "Energy and electric charging solutions",
      features: ["Charging Stations", "Energy Management", "Electric Vehicle Support", "Sustainable Solutions"],
      iconImage: "https://link-expert.sa/images/L10_1.webp"
    },
    {
      icon: Wrench,
      title: t('services.maintenance'),
      description: "Comprehensive parking maintenance and cleaning services",
      features: ["Regular Maintenance", "Cleaning Services", "Equipment Repair", "Facility Management"],
      iconImage: "https://link-expert.sa/images/L10_1.webp"
    }
  ];

  const stats = [
    { number: "500+", label: t('stats.projectsCompleted') },
    { number: "10+", label: t('stats.yearsExperience') },
    { number: "200+", label: t('stats.happyClients') },
    { number: "99.9%", label: t('stats.uptimeGuarantee') }
  ];

  const offerings = [
    {
      icon: Clock,
      title: t('offerings.saveTime.title'),
      description: t('offerings.saveTime.description'),
      color: "bg-blue-500",
      iconImage: "https://oudreserve.sa/images/Artboard-15.webp"
    },
    {
      icon: DollarSign,
      title: t('offerings.saveMoney.title'),
      description: t('offerings.saveMoney.description'),
      color: "bg-green-500",
      iconImage: "https://oudreserve.sa/images/Artboard-14.webp"
    },
    {
      icon: Briefcase,
      title: t('offerings.saveEffort.title'),
      description: t('offerings.saveEffort.description'),
      color: "bg-purple-500",
      iconImage: "https://oudreserve.sa/images/Artboard-13.webp"
    },
    {
      icon: TrendingUp,
      title: t('offerings.increaseRevenue.title'),
      description: t('offerings.increaseRevenue.description'),
      color: "bg-orange-500",
      iconImage: "https://oudreserve.sa/images/Artboard-16.webp"
    },
    {
      icon: Target,
      title: t('offerings.bestResults.title'),
      description: t('offerings.bestResults.description'),
      color: "bg-red-500",
      iconImage: "https://oudreserve.sa/images/Artboard-17.webp"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <img 
                src="http://link-expert.sa/images/brand-logo.png" 
                alt="AL-LINK Expert Logo"
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-white gradient-text">
                {t('hero.title')}
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
              <a href="#home" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">{t('nav.home')}</a>
              <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">{t('nav.about')}</a>
              <a href="#services" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">{t('nav.services')}</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">{t('nav.contact')}</a>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleLanguage}
                className="text-white hover:bg-white/10 transition-all duration-300"
                title="Toggle Language"
              >
                <Languages className="h-5 w-5" />
                <span className="ml-1 text-sm">{currentLanguage === 'en' ? 'عربي' : 'EN'}</span>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 glass-effect">
                {t('hero.cta')}
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
                  {t('nav.home')}
                </a>
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.about')}
                </a>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.services')}
                </a>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.contact')}
                </a>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:bg-white/10 transition-all duration-300 justify-start"
                >
                  <Languages className="h-5 w-5 mr-2" />
                  {currentLanguage === 'en' ? 'عربي' : 'English'}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 glass-effect mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen bg-hero-pattern flex items-center relative"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: "url('https://oudreserve.sa/images/OudImage_1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight gradient-text animate-fade-in-up">
              {t('hero.title')}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 text-white animate-fade-in-up stagger-delay-1">
              {t('hero.subtitle')}
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up stagger-delay-2">
              <div className="animate-typing inline-block">
                {t('hero.description')}
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 animate-bounce-in stagger-delay-4 shadow-2xl"
            >
              {t('hero.cta')} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
      <section id="about" className="py-24 reveal bg-white">
        <div className="container mx-auto px-6">
          {/* Section Image */}
          <div className="mb-16">
            <img 
              src="https://oudreserve.sa/images/imageV2_1.webp" 
              alt="About section background" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
          
          {/* Section Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-xl p-8 hover-lift shadow-lg">
              <img 
                src="https://al-link.com/wp-content/uploads/2024/06/amer-center-meeting-1024x944.jpeg" 
                alt="AL-LINK parking management solutions" 
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="text-gray-800 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-600" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                {t('about.title')}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                {t('about.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 reveal bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Image */}
          <div className="mb-16">
            <img 
              src="https://oudreserve.sa/images/l10_2.webp" 
              alt="Offerings section background" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
          
          {/* Section Content */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-16 text-amber-600">
              {t('offerings.title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
              {offerings.map((offering, index) => (
                <div key={index} className="text-center group hover-lift reveal">
                  <div className="mb-6 flex justify-center">
                    <div className="p-6 bg-amber-100 rounded-xl shadow-xl transform group-hover:scale-110 transition-all duration-300">
                      <img 
                        src={offering.iconImage} 
                        alt={offering.title}
                        className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold mb-3 text-lg sm:text-xl text-gray-800">{offering.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-24 reveal bg-white">
        <div className="container mx-auto px-6">
          {/* Section Image */}
          <div className="mb-16">
            <img 
              src="https://oudreserve.sa/images/imageV2_1.webp" 
              alt="Goal section background" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
          
          {/* Section Content */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-amber-600">
              {t('goal.title')}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-16 text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('goal.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 reveal bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Image */}
          <div className="mb-16">
            <img 
              src="https://oudreserve.sa/images/l10_2.webp" 
              alt="Services section background" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
          
          {/* Section Content */}
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-16 text-amber-600">
              {t('services.title')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {services.map((service, index) => (
                <div key={index} className="text-center group hover-lift reveal">
                  <div className="bg-white rounded-xl p-6 sm:p-8 mb-6 transform group-hover:scale-105 transition-all duration-500 shadow-lg">
                    <div className="mb-4 sm:mb-6 flex justify-center">
                      <service.icon className="h-16 w-16 sm:h-20 sm:w-20 text-amber-500" />
                    </div>
                    <h4 className="font-bold mb-4 text-xl sm:text-2xl text-gray-800">{service.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-amber-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 reveal bg-white">
        <div className="container mx-auto px-6">
          {/* Section Image */}
          <div className="mb-16">
            <img 
              src="https://oudreserve.sa/images/imageV2_1.webp" 
              alt="Stats section background" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
          
          {/* Section Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-amber-600">
              {t('stats.achievements')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('stats.achievementsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover-lift reveal">
                <div className="bg-amber-50 rounded-xl p-8 transform group-hover:scale-105 transition-all duration-500 shadow-lg">
                  <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-4 animate-bounce-in">
                    {stat.number}
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 reveal bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Image */}
          <div className="mb-16">
            <img 
              src="https://oudreserve.sa/images/l10_2.webp" 
              alt="Contact section background" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
          
          {/* Section Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-gray-800">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-amber-600">
                {t('contact.title')}
              </h2>
              <p className="text-xl mb-12 text-center text-gray-600">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-6 max-w-md mx-auto">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder={t('contact.form.name')} 
                    className="w-full p-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <input 
                      type="email" 
                      placeholder={t('contact.form.email')} 
                      className="p-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="tel" 
                      placeholder={t('contact.form.phone')} 
                      className="p-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50"
                    />
                  </div>
                </div>
                <div className="group">
                  <textarea 
                    placeholder={t('contact.form.message')} 
                    rows={5}
                    className="w-full p-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 group-hover:border-amber-400/50 resize-none"
                  ></textarea>
                </div>
                <Button 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {t('contact.form.send')} <Mail className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="text-gray-800">
              <h3 className="text-3xl font-bold mb-12 text-center text-amber-600">
                {t('contact.visitOffice')}
              </h3>
              
              <div className="bg-white rounded-xl p-8 mb-8 hover-lift shadow-lg">
                <img 
                  src="https://oudreserve.sa/images/Image.jpg" 
                  alt="Office location" 
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-xl"
                />
              </div>

              <div className="space-y-6 text-right">
                <div className="group">
                  <h4 className="font-bold text-2xl text-amber-500 mb-2">Riyadh</h4>
                </div>
                <div className="bg-white rounded-lg p-4 hover-lift shadow-lg">
                  <div className="flex items-center justify-end space-x-3 mb-2">
                    <span className="font-semibold text-amber-500">{t('contact.address')}</span>
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <p className="text-gray-700">{t('contact.info.address')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 hover-lift shadow-lg">
                  <div className="flex items-center justify-end space-x-3 mb-2">
                    <span className="font-semibold text-amber-500">Email</span>
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <p className="text-gray-700">{t('contact.info.email')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 hover-lift shadow-lg">
                  <div className="flex items-center justify-end space-x-3 mb-2">
                    <span className="font-semibold text-amber-500">Phone</span>
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <p className="text-gray-700">{t('contact.info.phone')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto">
          {/* Footer Image */}
          {/* <div className="mb-12">
            <img 
              src="https://oudreserve.sa/images/imageV2_1.webp" 
              alt="Footer background" 
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-2xl"
            />
          </div> */}
          
          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 text-gray-800 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="http://link-expert.sa/images/brand-logo.png" 
                  alt="AL-LINK Expert Logo"
                  className="h-10 w-10"
                />
                <span className="text-3xl font-bold text-amber-600">{t('hero.title')}</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md text-lg leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300">
                  Twitter
                </Button>
              </div>
            </div>
            <div className="group">
              <h4 className="font-bold mb-6 text-xl text-amber-600">{t('footer.services')}</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">{t('services.parkingManagement')}</li>
                <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">{t('services.vehicleFleet')}</li>
                <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">{t('services.crowdControl')}</li>
                <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">{t('services.energyCharging')}</li>
              </ul>
            </div>
            <div className="group">
              <h4 className="font-bold mb-6 text-xl text-amber-600">{t('footer.contact')}</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer">{t('contact.info.phone')}</li>
                <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer">{t('contact.info.email')}</li>
                <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer">{t('contact.info.address')}</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 border-gray-300" />
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
            <p className="text-lg">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-600 transition-colors duration-300 hover:scale-105 transform">Privacy Policy</a>
              <a href="#" className="hover:text-amber-600 transition-colors duration-300 hover:scale-105 transform">Terms of Service</a>
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
