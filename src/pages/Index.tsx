import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import LinkLogo from "@/assets/link logo 33.png";
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Network,
  TrendingUp,
  Building,
  Settings,
  Clock,
  Menu,
  X,
  Languages,
  Car,
  ArrowUp,
  Award,
  Globe,
  Download,
  Star,
  Target,
  Briefcase,
  Headphones,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Language switcher
  const toggleLanguage = () => {
    const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: isRTL ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: isRTL ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  useEffect(() => {
    // Set direction and lang on the html element for correct LTR/RTL
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [isRTL, currentLanguage]);

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={currentLanguage}>
      {/* Navigation - static solid background color for visibility */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 bg-opacity-95 shadow-md`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img 
                src={LinkLogo} 
                alt="Link Expert" 
                className="h-10 lg:h-12 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? 'خبير الربط' : 'Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? 'حقق أحلامك' : 'Fulfill Your Dreams'}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? 'استكشف خبير الربط' : 'Discover Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? 'احجز رحلتك اليوم' : 'Reserve Your Journey Today'}
              </button>
              
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 rtl:space-x-reverse text-white hover:text-amber-400 transition-colors duration-200 text-sm"
                >
                  <span>{currentLanguage.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2 rtl:space-x-reverse">
              <button 
                onClick={toggleLanguage}
                className="text-white hover:text-amber-400 transition-colors duration-200 p-2"
              >
                <Languages className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-amber-400 transition-colors duration-200 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium ${isRTL ? 'text-right w-full' : 'text-left'}`}
              >
                {isRTL ? 'خبير الربط' : 'Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium ${isRTL ? 'text-right w-full' : 'text-left'}`}
              >
                {isRTL ? 'حقق أحلامك' : 'Fulfill Your Dreams'}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className={`block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium ${isRTL ? 'text-right w-full' : 'text-left'}`}
              >
                {isRTL ? 'استكشف خبير الربط' : 'Discover Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium ${isRTL ? 'text-right w-full' : 'text-left'}`}
              >
                {isRTL ? 'احجز رحلتك اليوم' : 'Reserve Your Journey Today'}
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Full Screen with Background Image */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/header.jpeg')`,
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={LinkLogo} 
                alt="Link Expert" 
                className="h-16 lg:h-20 w-auto mx-auto mb-6 filter brightness-0 invert"
              />
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-center"
            >
              {isRTL ? 'خبير الربط' : 'Link Expert'}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl lg:text-2xl mb-8 font-light leading-relaxed text-center"
            >
              {isRTL ? 'إرثك.. في ذاكرة المكان' : 'Your Legacy.. In the Memory of Place'}
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 text-center"
            >
              {isRTL 
                ? 'انعم بتفرد المكان.. وتميز الكيان في تجربة إدارة مواقف فائقة الدقة في وسط الرياض الجديد'
                : 'Experience the uniqueness of place.. and excellence in ultra-precise parking management in the heart of new Riyadh'
              }
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-lg font-semibold rounded-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                {isRTL ? 'كن جزءًا من خبير الربط' : 'Be Part of Link Expert'}
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/privacy-policy'}
                className="bg-transparent hover:bg-white/10 text-white border border-white px-10 py-4 text-lg font-semibold rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isRTL ? 'سياسة الاستخدام والاسترجاع' : 'Usage and Refund Policy'}
              </Button>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Gateway to Excellence Section - Split Layout like OUD Reserve */}
      <section className="py-0 bg-gray-900 relative min-h-screen flex items-stretch overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.5)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80"></div>
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Content - Dark Background */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className="bg-gray-900 text-white p-8 lg:p-16 flex items-center"
          >
            <div className="max-w-lg">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-8 text-amber-400 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('about.title')}
              </h2>
              <p className={`text-lg lg:text-xl leading-relaxed mb-8 text-gray-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('about.description')}
              </p>
              <p className={`text-base lg:text-lg leading-relaxed text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('about.description2')}
              </p>
            </div>
          </motion.div>

          {/* Right Image/Map Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            className="relative bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-8 lg:p-16"
          >
            <div className="relative w-full max-w-md">
              {/* Placeholder for map or image */}
              <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
                <MapPin className="h-16 w-16 text-amber-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isRTL ? 'موقعنا' : 'Our Location'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {isRTL ? 'الرياض ، أم الحمام الغربي ، ليسن فالي' : 'Riyadh, um alhammam District, Laysen Valley Office'}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                    <Car className="h-5 w-5 text-amber-600" />
                    <span className="text-sm text-gray-700">
                      {isRTL ? 'إدارة مواقف متطورة' : 'Advanced Parking Management'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                    <Shield className="h-5 w-5 text-amber-600" />
                    <span className="text-sm text-gray-700">
                      {isRTL ? 'أمان وحماية عالية' : 'High Security & Protection'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                    <Network className="h-5 w-5 text-amber-600" />
                    <span className="text-sm text-gray-700">
                      {isRTL ? 'تقنيات ذكية' : 'Smart Technologies'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Projects KSA Section */}
      <section id="gallery" className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.3)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 uppercase tracking-wider">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-amber-300 max-w-2xl mx-auto mb-12 font-medium">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="max-w-7xl mx-auto"
          >
            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  name: t('projects.items.riyadhPark.name'),
                  location: t('projects.items.riyadhPark.location'),
                  arabicName: t('projects.items.riyadhPark.arabicName'),
                  icon: '🏢'
                },
                {
                  name: t('projects.items.laysenValley.name'),
                  location: t('projects.items.laysenValley.location'),
                  arabicName: t('projects.items.laysenValley.arabicName'),
                  icon: '🌿'
                },
                {
                  name: t('projects.items.arriyadhGate.name'),
                  location: t('projects.items.arriyadhGate.location'),
                  arabicName: t('projects.items.arriyadhGate.arabicName'),
                  icon: '🏛️'
                },
                {
                  name: t('projects.items.majdoolTower.name'),
                  location: t('projects.items.majdoolTower.location'),
                  arabicName: t('projects.items.majdoolTower.arabicName'),
                  icon: '🏙️'
                },
                {
                  name: t('projects.items.rixosObhur.name'),
                  location: t('projects.items.rixosObhur.location'),
                  arabicName: t('projects.items.rixosObhur.arabicName'),
                  icon: '🏖️'
                },
                {
                  name: t('projects.items.panoramaMall.name'),
                  location: t('projects.items.panoramaMall.location'),
                  arabicName: t('projects.items.panoramaMall.arabicName'),
                  icon: '🛍️'
                },
                {
                  name: t('projects.items.wphQiddiya.name'),
                  location: t('projects.items.wphQiddiya.location'),
                  arabicName: t('projects.items.wphQiddiya.arabicName'),
                  icon: '🎡'
                },
                {
                  name: t('projects.items.northYard.name'),
                  location: t('projects.items.northYard.location'),
                  arabicName: t('projects.items.northYard.arabicName'),
                  icon: '🏢'
                },
                {
                  name: t('projects.items.smartTown.name'),
                  location: t('projects.items.smartTown.location'),
                  arabicName: t('projects.items.smartTown.arabicName'),
                  icon: '⚙️'
                },
                {
                  name: t('projects.items.oudSquare.name'),
                  location: t('projects.items.oudSquare.location'),
                  arabicName: t('projects.items.oudSquare.arabicName'),
                  icon: '🏛️'
                },
                {
                  name: t('projects.items.sabqon.name'),
                  location: t('projects.items.sabqon.location'),
                  arabicName: t('projects.items.sabqon.arabicName'),
                  icon: '🏢'
                }
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20 group-hover:border-amber-400 group-hover:shadow-amber-400/20">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      {/* Project Icon */}
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-full p-3 w-12 h-12 flex items-center justify-center text-white text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      
                      {/* Project Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm lg:text-base font-bold text-white leading-tight mb-1 group-hover:text-amber-300 transition-colors duration-300">
                          {project.name}
                        </h3>
                        {project.arabicName && (
                          <p className="text-xs lg:text-sm text-amber-300 leading-tight mb-0.5 font-medium">
                            {project.arabicName}
                          </p>
                        )}
                        <p className="text-xs text-gray-300 font-medium">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhance Your Business Section */}
      <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.5)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/80"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-400 uppercase tracking-wider">
                {t('businessEnhancement.title')}
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {t('businessEnhancement.description')}
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <Users className="h-16 w-16 mx-auto text-white" />
                  <h3 className="text-2xl font-bold text-white">
                    {isRTL ? 'عضويات حصرية' : 'Exclusive Memberships'}
                  </h3>
                  <p className="text-amber-100">
                    {isRTL ? 'استمتع بالخدمات المميزة' : 'Enjoy premium services'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Our Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.3)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              {t('services.title')}
            </h2>
            <p className="text-xl text-amber-300 font-medium">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {(t('services.items', { returnObjects: true }) as string[]).map((service: string, index: number) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="group"
                  >
                    <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 border border-gray-600 group-hover:border-amber-400 group-hover:shadow-lg group-hover:shadow-amber-400/20 h-full flex items-center">
                      <div className="flex items-start space-x-3 rtl:space-x-reverse w-full">
                        <CheckCircle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <p className="text-base text-gray-200 font-medium">
                          {service}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.5)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 uppercase tracking-wider">
              {isRTL ? 'أسعار الخدمات' : 'SERVICE PRICING'}
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-12">
              {isRTL ? 'أسعار شفافة ومتاحة لجميع خدمات صف السيارات' : 'Transparent pricing for all valet parking services'}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">
                  {isRTL ? 'أسعار خدمات صف السيارات' : 'Valet Parking Service Prices'}
                </h3>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className={`px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'المشروع' : 'Project'}
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'نوع الخدمة' : 'Service Type'}
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'السعر (ريال سعودي)' : 'Price (SAR)'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Riyadh Park Mall */}
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className={`px-6 py-4 text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'الرياض بارك مول' : 'Riyadh Park Mall'}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'خدمة صف السيارات (عادية)' : 'Valet Parking Service (Normal)'}
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold text-amber-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        45 ريال
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className={`px-6 py-4 text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'الرياض بارك مول' : 'Riyadh Park Mall'}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'خدمة صف السيارات (VIP)' : 'Valet Parking Service (VIP)'}
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold text-amber-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        85 ريال
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className={`px-6 py-4 text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'الرياض بارك مول' : 'Riyadh Park Mall'}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'خدمة صف السيارات (Exclusive)' : 'Valet Parking Service (Exclusive)'}
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold text-amber-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        120 ريال
                      </td>
                    </tr>
                    
                    {/* Riyadh Gate */}
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className={`px-6 py-4 text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'بوابة الرياض' : 'Riyadh Gate'}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'خدمة صف السيارات (عادية)' : 'Valet Parking Service (Normal)'}
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold text-amber-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        35 ريال
                      </td>
                    </tr>
                    
                    {/* North Yard */}
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className={`px-6 py-4 text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'نورث يارد' : 'North Yard'}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'خدمة صف السيارات (عادية)' : 'Valet Parking Service (Normal)'}
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold text-amber-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        35 ريال
                      </td>
                    </tr>
                    
                    {/* Oud Square */}
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className={`px-6 py-4 text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'عود سكوير' : 'Oud Square'}
                      </td>
                      <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'خدمة مواقف' : 'Parking Service'}
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold text-amber-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        10 ريال
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="bg-gray-50 p-6 border-t">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Shield className="h-5 w-5 text-amber-600" />
                    <span className="text-sm text-gray-600">
                      {isRTL ? 'جميع الأسعار شاملة الضريبة' : 'All prices include VAT'}
                    </span>
                  </div>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                  >
                    {isRTL ? 'احجز الآن' : 'Book Now'}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Pricing Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Car className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  {isRTL ? 'خدمة عادية' : 'Normal Service'}
                </h4>
                <p className="text-gray-200 text-sm">
                  {isRTL ? 'خدمة صف سيارات أساسية مع ضمان الأمان' : 'Basic valet service with security guarantee'}
                </p>
              </div>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Star className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  {isRTL ? 'خدمة VIP' : 'VIP Service'}
                </h4>
                <p className="text-gray-200 text-sm">
                  {isRTL ? 'خدمة متميزة مع رعاية خاصة' : 'Premium service with special care'}
                </p>
              </div>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  {isRTL ? 'خدمة حصرية' : 'Exclusive Service'}
                </h4>
                <p className="text-gray-200 text-sm">
                  {isRTL ? 'أعلى مستوى من الخدمة والرعاية' : 'Highest level of service and care'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discover Link Expert - Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.5)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/80"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 uppercase tracking-wider">
              {isRTL ? 'استكشف خبير الربط' : 'DISCOVER LINK EXPERT'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-white">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 text-amber-400 uppercase tracking-wider">
                {isRTL ? 'إلى عالم التميز' : 'TO THE REALM OF EXCELLENCE'}
              </h3>
              <p className="text-lg mb-8 text-gray-300">
                {isRTL 
                  ? 'إذا كنت تعتقد أن هذا هو المكان المناسب لك، يرجى إدخال معلوماتك'
                  : 'If you believe this is the suitable place for you, kindly submit your information'
                }
              </p>

              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder={isRTL ? 'الاسم' : 'Name'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={isRTL ? 'البلد' : 'Country'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={isRTL ? 'رقم الهاتف' : 'Phone Number'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder={isRTL ? 'الرسالة' : 'Message'}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                >
                  {isRTL ? 'إرسال' : 'Submit'}
                </Button>
              </form>
            </motion.div>

            {/* Right Office Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-amber-400 uppercase tracking-wider">
                  {isRTL ? 'زر مكاتبنا' : 'VISIT OUR OFFICES'}
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-white">
                      {isRTL ? 'الرياض' : 'RIYADH'}
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <MapPin className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold mb-2 text-gray-300">
                            {isRTL ? 'العنوان' : 'Address'}
                          </h5>
                          <p className="text-gray-400">
                            {t('office.address.value')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <Mail className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold mb-2 text-gray-300">
                            {isRTL ? 'البريد الإلكتروني' : 'Email'}
                          </h5>
                          <p className="text-gray-400">info@link-expert.sa</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <Phone className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold mb-2 text-gray-300">
                            {isRTL ? 'مركز الاتصال الموحد' : 'Centralized Contact Center'}
                          </h5>
                          <p className="text-gray-400 ltr" dir="ltr">{t('office.phone.value')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="space-y-4">
                    {/* <Button 
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-none border border-gray-600 hover:border-amber-500 transition-all duration-300"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      {isRTL ? 'تحميل الملف الإعلامي' : 'Download the Media File'}
                    </Button> */}
                    <Button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/src/assets/Link Expert_FACILITY_Company_Profile _2025.pdf';
                        link.download = 'Link Expert_FACILITY_Company_Profile_2025.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-none border border-gray-600 hover:border-amber-500 transition-all duration-300"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      {isRTL ? 'تحميل البروشور' : 'Download the Brochure'}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Company Info */}
            <div className="space-y-4">
              <img 
                src={LinkLogo} 
                alt="Link Expert" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold text-amber-400">
                {isRTL ? 'خبير الربط' : 'Link Expert'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isRTL ? 'مكان لإرثك' : 'A Place for Your Legacy'}
              </p>
              <p className="text-gray-400 text-sm">
                {isRTL 
                  ? 'استمتع بالتفرد والتميز في تجربة إدارة المواقف الفاخرة في وسط الرياض الجديد'
                  : 'Enjoy the uniqueness and excellence in luxury parking management experience in the new Riyadh downtown'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                {isRTL ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? 'خبير الربط' : 'Link Expert'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? 'حقق أحلامك' : 'Fulfill Your Dreams'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? 'استكشف خبير الربط' : 'Discover Link Expert'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? 'احجز رحلتك اليوم' : 'Reserve Your Journey Today'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                {isRTL ? 'معلومات التواصل' : 'Contact Information'}
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <p className="text-sm">
                    {t('office.address.value')}
                  </p>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <p className="text-sm ltr" dir="ltr">{t('office.phone.value')}</p>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <p className="text-sm">info@link-expert.sa</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                {isRTL ? 'معلومات إضافية' : 'Additional Information'}
              </h4>
              <p className="text-gray-400 text-sm">
                {isRTL 
                  ? 'وجهة فائقة التطور من شركة خبير الربط'
                  : 'Ultra-advanced destination by Link Expert Company'
                }
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {/* <Button 
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
                >
                  <Download className="h-4 w-4 mr-1" />
                  {isRTL ? 'بروشور' : 'Brochure'}
                </Button> */}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="mb-4">
              <a href="/privacy-policy" className="text-amber-400 hover:text-amber-300 text-sm transition-colors">
                {isRTL ? 'سياسة الاستخدام والاسترجاع' : 'Usage and Refund Policy'}
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {isRTL 
                ? 'جميع الحقوق محفوظة لخبير الربط @2025'
                : 'All rights reserved for Link Expert @2024'
              }
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
