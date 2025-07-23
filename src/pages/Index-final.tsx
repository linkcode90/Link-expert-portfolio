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

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
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
                {isRTL ? 'حقق أحلامك' : 'Achieve Your Dreams'}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? 'استكشف خبير الربط' : 'Explore Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? 'احجز رحلتك الآن' : 'Book Your Journey Now'}
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
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'خبير الربط' : 'Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'حقق أحلامك' : 'Achieve Your Dreams'}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'استكشف خبير الربط' : 'Explore Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'احجز رحلتك الآن' : 'Book Your Journey Now'}
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
            backgroundImage: `url('/placeholder.svg')`,
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
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
              className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              {isRTL ? 'خبير الربط' : 'Link Expert'}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl lg:text-2xl mb-8 font-light leading-relaxed"
            >
              {isRTL ? 'إرثك.. في ذاكرة المكان' : 'Your Legacy.. In the Memory of Place'}
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
            >
              {isRTL 
                ? 'انعم بتفرد المكان.. وتميز الكيان في تجربة إدارة مواقف فائقة الدقة في وسط الرياض الجديد'
                : 'Experience the uniqueness of place.. and excellence in ultra-precise parking management in the heart of new Riyadh'
              }
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-lg font-semibold rounded-none shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                {isRTL ? 'كن جزءًا من خبير الربط' : 'Be Part of Link Expert'}
              </Button>
            </motion.div>

            {/* Bottom Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16"
            >
              <div className="text-center">
                <p className="text-sm font-light opacity-80 mb-2">
                  {isRTL ? 'وجهة فائقة الفخامة من خبير الربط' : 'Ultra-luxury destination by Link Expert'}
                </p>
                <p className="text-xs opacity-60">
                  {isRTL ? 'Ultra-luxury destination by Link Expert' : 'وجهة فائقة الفخامة من خبير الربط'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Split Layout like OUD Reserve */}
      <section className="py-0 bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Content - Dark Background */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className="bg-gray-900 text-white p-8 lg:p-16 flex items-center"
          >
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-amber-400 uppercase tracking-wider">
                {isRTL ? 'خبير الربط' : 'LINK EXPERT'}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-200">
                {isRTL 
                  ? 'وجهة حصرية ومتطورة لإدارة المواقف والخدمات التجارية في وسط الرياض الجديد، تقع في حي الملقا، تقدم خبير الربط مجموعة حصرية من الحلول المتقدمة الأولى من نوعها، بالإضافة إلى خدمات إدارة الأسطول ونادي خبير الربط للعضويات الخاصة، ونخبة من التقنيات والحلول المبتكرة.'
                  : 'An exclusive and ultra-advanced parking management and commercial services destination in the heart of new Riyadh, located in Al Malqa neighborhood, Link Expert offers a unique collection of premier advanced solutions, the first of its kind in the Kingdom of Saudi Arabia. Additionally, it features fleet management services, Link Expert Private Membership Club, and a selection of innovative technologies and solutions.'
                }
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-300">
                {isRTL 
                  ? 'جميع هذه المكونات تتخذ إطلالتها الخاصة على منطقة أيقونية في وسط خبير الربط. وكل ذلك يبدأ لحظة عبورك للبوابة الاستثنائية التي تأخذك في رحلة إلى عالم التقنية والإبداع.'
                  : 'All these elements overlook an iconic area at the heart of Link Expert. And it all begins the moment you pass through the exceptional gate that takes you on a journey into a world of technology and innovation.'
                }
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
                  {isRTL ? 'الرياض - حي الملقا' : 'Riyadh - Al Malqa'}
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

      {/* Features Grid Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8">
              {isRTL ? 'إطلالات ساحرة تلهمك وتعزز إبداعك' : 'Inspiring Views That Enhance Your Creativity'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              {isRTL ? 'من هنا تبدأ رفاهيتك' : 'This is where your luxury begins'}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {/* Feature Cards */}
            {[
              {
                icon: Building,
                title: isRTL ? 'إدارة مرافق متطورة' : 'Advanced Facility Management',
              },
              {
                icon: Car,
                title: isRTL ? 'مواقف ذكية' : 'Smart Parking',
              },
              {
                icon: Users,
                title: isRTL ? 'نادي العضويات الخاصة' : 'Private Membership Club',
              },
              {
                icon: Shield,
                title: isRTL ? 'مناطق خاصة آمنة' : 'Secure Private Areas',
              },
              {
                icon: Globe,
                title: isRTL ? 'تقنيات عالمية' : 'Global Technologies',
              },
              {
                icon: Star,
                title: isRTL ? 'خدمات متميزة' : 'Premium Services',
              },
              {
                icon: Network,
                title: isRTL ? 'شبكة ذكية' : 'Smart Network',
              },
              {
                icon: Award,
                title: isRTL ? 'معايير عالية' : 'High Standards',
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group-hover:border-amber-200">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-sm lg:text-base font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                </div>
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
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8">
              {isRTL ? 'الخدمات الخاصة' : 'Special Services'}
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          >
            {[
              {
                icon: Target,
                title: isRTL ? 'تفعيل الوجهات' : 'Destination Activation',
                description: isRTL ? 'تفعيل وإدارة الوجهات بطريقة احترافية' : 'Professional destination activation and management'
              },
              {
                icon: Car,
                title: isRTL ? 'خدمة صف السيارات' : 'Valet Parking Service',
                description: isRTL ? 'خدمة صف السيارات الاحترافية' : 'Professional valet parking service'
              },
              {
                icon: Clock,
                title: isRTL ? 'الحجز المسبق' : 'Pre-Booking',
                description: isRTL ? 'نظام حجز مواقف مسبق ومتطور' : 'Advanced pre-parking booking system'
              },
              {
                icon: Headphones,
                title: isRTL ? 'مدير العلاقة الخاصة' : 'Dedicated Relationship Manager',
                description: isRTL ? 'مدير علاقات مخصص ومتفرغ' : 'Dedicated and exclusive relationship manager'
              },
              {
                icon: Zap,
                title: isRTL ? 'خبير الربط الآن' : 'Link Expert Now',
                description: isRTL ? 'خدمات فورية ومتطورة' : 'Instant and advanced services'
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                <Card className="h-full bg-white hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 shadow-lg group">
                  <CardContent className="p-6 lg:p-8">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-white">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                {isRTL ? 'احجز رحلتك الآن' : 'Book Your Journey Now'}
              </h2>
              <h3 className="text-2xl lg:text-3xl font-light mb-8 text-amber-400">
                {isRTL ? 'إلى حيث التميز' : 'To Where Excellence Lies'}
              </h3>
              <p className="text-lg mb-8 text-gray-300">
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
                  {isRTL ? 'إرسال' : 'Send'}
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
                <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                  {isRTL ? 'تفضل بزيارة مكاتبنا' : 'Visit Our Offices'}
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-amber-400">
                      {isRTL ? 'الرياض' : 'Riyadh'}
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <MapPin className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold mb-2">
                            {isRTL ? 'العنوان' : 'Address'}
                          </h5>
                          <p className="text-gray-300">
                            {isRTL 
                              ? 'الرياض، طريق الأمير تركي بن عبدالعزيز الأول، حي الملقا'
                              : 'Riyadh, Prince Turki bin Abdulaziz Al Awwal Road, Al Malqa'
                            }
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <Mail className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold mb-2">
                            {isRTL ? 'البريد الإلكتروني' : 'Email'}
                          </h5>
                          <p className="text-gray-300">info@link-expert.sa</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <Phone className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold mb-2">
                            {isRTL ? 'مركز الاتصال الموحد' : 'Unified Call Center'}
                          </h5>
                          <p className="text-gray-300">+966 920 0204 24</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-none border border-gray-600 hover:border-amber-500 transition-all duration-300"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      {isRTL ? 'حمل الملف الإعلامي' : 'Download Media File'}
                    </Button>
                    <Button 
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-none border border-gray-600 hover:border-amber-500 transition-all duration-300"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      {isRTL ? 'حمل البروشور' : 'Download Brochure'}
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
          <div className="text-center">
            <p className="text-gray-400 text-sm">
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
