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
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <img 
                src={LinkLogo} 
                alt="Link Expert" 
                className="h-8 lg:h-10 w-auto"
              />
              <span className="text-lg lg:text-xl font-bold text-gray-900 hidden sm:block">
                {isRTL ? 'خبير الربط' : 'Link Expert'}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'الرئيسية' : 'Home'}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'خدماتنا' : 'Our Services'}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'من نحن' : 'About Us'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </button>
              
              {/* Language Switcher */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 rtl:space-x-reverse text-gray-700 hover:text-amber-600 transition-colors duration-200"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {currentLanguage === 'ar' ? 'EN' : 'عربي'}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2 rtl:space-x-reverse">
              <button 
                onClick={toggleLanguage}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 p-2"
              >
                <Languages className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 p-2"
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
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'الرئيسية' : 'Home'}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'خدماتنا' : 'Our Services'}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'من نحن' : 'About Us'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={LinkLogo} 
                alt="Link Expert" 
                className="h-20 lg:h-24 w-auto mx-auto mb-4"
              />
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6"
            >
              {isRTL ? 'خبير الربط' : 'Link Expert'}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-700 mb-8 font-medium"
            >
              {isRTL ? 'إرثك.. في ذاكرة المكان' : 'Your Legacy.. In the Memory of Place'}
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {isRTL 
                ? 'انعم بتفرد المكان.. وتميز الكيان في تجربة إدارة مواقف فائقة الدقة في المملكة العربية السعودية'
                : 'Experience the uniqueness of place.. and excellence in ultra-precise parking management solutions in Saudi Arabia'
              }
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isRTL ? 'كن جزءًا من خبير الربط' : 'Be Part of Link Expert'}
                <ArrowRight className={`ml-2 h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </motion.div>

            {/* Bottom Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12"
            >
              <Badge 
                variant="secondary" 
                className="bg-white/80 text-gray-700 px-6 py-2 text-sm font-medium rounded-full shadow-md"
              >
                {isRTL ? 'وجهة متخصصة في حلول إدارة المواقف' : 'Specialized Destination for Parking Management Solutions'}
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                {isRTL ? 'خبير الربط' : 'Link Expert'}
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                {isRTL 
                  ? 'شركة متخصصة في أنظمة إدارة المواقف الذكية وحلول الأسطول المتقدمة في المملكة العربية السعودية، حيث صُممت لتقديم تجربة إدارة مواقف عصرية بمعايير عالمية ومزايا رفيعة المستوى.. اختيرت بعناية مُطلقة.'
                  : 'A specialized company in smart parking management systems and advanced fleet solutions in Saudi Arabia, designed to provide a modern parking management experience with international standards and high-level features.. chosen with absolute care.'
                }
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {isRTL ? 'أنظمة إدارة مواقف ذكية' : 'Smart Parking Management Systems'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {isRTL ? 'حلول أسطول متقدمة' : 'Advanced Fleet Solutions'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {isRTL ? 'تقنيات مبتكرة' : 'Innovative Technologies'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Car className="h-8 w-8 text-amber-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {isRTL ? 'إدارة المواقف' : 'Parking Management'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isRTL ? 'حلول متقدمة' : 'Advanced Solutions'}
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Shield className="h-8 w-8 text-amber-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {isRTL ? 'الأمن والحماية' : 'Security & Protection'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isRTL ? 'أنظمة موثوقة' : 'Reliable Systems'}
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Network className="h-8 w-8 text-amber-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {isRTL ? 'التكنولوجيا الذكية' : 'Smart Technology'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isRTL ? 'حلول مبتكرة' : 'Innovative Solutions'}
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Users className="h-8 w-8 text-amber-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {isRTL ? 'خدمة العملاء' : 'Customer Service'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isRTL ? 'دعم متميز' : 'Excellence Support'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {isRTL ? 'بوابتك لعالمك الاستثنائي' : 'Your Gateway to Your Exceptional World'}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL 
                ? 'أهلاً بك في خبير الربط.. الشركة المتخصصة في حلول إدارة المواقف، حيث صُممت لتقديم تجربة إدارة وتشغيل المواقف بمعايير عالمية ومزايا رفيعة المستوى..'
                : 'Welcome to Link Expert.. The specialized company in parking management solutions, designed to provide a parking management and operation experience with international standards and high-level features..'
              }
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Feature Cards */}
            {[
              {
                icon: Car,
                title: isRTL ? 'أنظمة مواقف ذكية' : 'Smart Parking Systems',
                description: isRTL ? 'تقنيات حديثة لإدارة المواقف' : 'Modern Technologies for Parking Management'
              },
              {
                icon: Shield,
                title: isRTL ? 'أمن وحماية' : 'Security & Protection',
                description: isRTL ? 'أنظمة أمنية متقدمة' : 'Advanced Security Systems'
              },
              {
                icon: Network,
                title: isRTL ? 'تكنولوجيا متطورة' : 'Advanced Technology',
                description: isRTL ? 'حلول تقنية مبتكرة' : 'Innovative Technical Solutions'
              },
              {
                icon: Users,
                title: isRTL ? 'خدمة العملاء' : 'Customer Service',
                description: isRTL ? 'دعم فني متميز' : 'Excellent Technical Support'
              },
              {
                icon: Settings,
                title: isRTL ? 'صيانة وتشغيل' : 'Maintenance & Operation',
                description: isRTL ? 'خدمات صيانة شاملة' : 'Comprehensive Maintenance Services'
              },
              {
                icon: TrendingUp,
                title: isRTL ? 'تحليلات متقدمة' : 'Advanced Analytics',
                description: isRTL ? 'تقارير وإحصائيات مفصلة' : 'Detailed Reports and Statistics'
              },
              {
                icon: Clock,
                title: isRTL ? 'خدمة 24/7' : '24/7 Service',
                description: isRTL ? 'دعم فني مستمر' : 'Continuous Technical Support'
              },
              {
                icon: Award,
                title: isRTL ? 'جودة عالية' : 'High Quality',
                description: isRTL ? 'معايير جودة عالمية' : 'International Quality Standards'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="h-full bg-white hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {isRTL ? 'الخدمات الخاصة' : 'Special Services'}
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Building,
                title: isRTL ? 'إدارة المرافق' : 'Facility Management',
                description: isRTL ? 'إدارة شاملة للمرافق والخدمات' : 'Comprehensive facility and service management'
              },
              {
                icon: Car,
                title: isRTL ? 'خدمة صف السيارات' : 'Valet Parking Service',
                description: isRTL ? 'خدمة صف السيارات الاحترافية' : 'Professional valet parking service'
              },
              {
                icon: Clock,
                title: isRTL ? 'الحجز المسبق' : 'Pre-Booking',
                description: isRTL ? 'نظام حجز مواقف مسبق' : 'Pre-parking booking system'
              },
              {
                icon: Users,
                title: isRTL ? 'مدير العلاقة الخاصة' : 'Relationship Manager',
                description: isRTL ? 'مدير علاقات مخصص للعملاء' : 'Dedicated customer relationship manager'
              },
              {
                icon: Zap,
                title: isRTL ? 'تقنيات الذكاء الاصطناعي' : 'AI Technologies',
                description: isRTL ? 'حلول ذكية مدعومة بالذكاء الاصطناعي' : 'Smart solutions powered by artificial intelligence'
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-white hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                {isRTL ? 'احجز رحلتك الآن' : 'Book Your Journey Now'}
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8">
                {isRTL ? 'إلى حيث التميز' : 'To Where Excellence Lies'}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {isRTL 
                  ? 'إذا شعرت بأن هذا هو مكانك المناسب، دوّن بياناتك'
                  : 'If you feel this is the right place for you, write down your details'
                }
              </p>

              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder={isRTL ? 'الاسم' : 'Name'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={isRTL ? 'البلد' : 'Country'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={isRTL ? 'رقم الهاتف' : 'Phone Number'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder={isRTL ? 'الرسالة' : 'Message'}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isRTL ? 'إرسال' : 'Send'}
                </Button>
              </form>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div className="relative">
                <img 
                  src={LinkLogo} 
                  alt="Link Expert" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {isRTL ? 'تفضل بزيارة مكاتبنا' : 'Visit Our Offices'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Office Details */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                {isRTL ? 'الرياض' : 'Riyadh'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {isRTL ? 'العنوان' : 'Address'}
                    </h4>
                    <p className="text-gray-600">
                      {isRTL 
                        ? 'الرياض، المملكة العربية السعودية'
                        : 'Riyadh, Saudi Arabia'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <p className="text-gray-600">info@link-expert.sa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {isRTL ? 'مركز الاتصال الموحد' : 'Unified Call Center'}
                    </h4>
                    <p className="text-gray-600">+966 XX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div className="relative">
                <img 
                  src={LinkLogo} 
                  alt="Link Expert Office" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              {isRTL 
                ? 'جميع الحقوق محفوظة لخبير الربط @2025'
                : 'All rights reserved to Link Expert @2024'
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
