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
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'خبير الربط' : 'Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'حقق أحلامك' : 'Fulfill Your Dreams'}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {isRTL ? 'استكشف خبير الربط' : 'Discover Link Expert'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-amber-400 uppercase tracking-wider">
                {isRTL ? 'بوابتك للتميز' : 'YOUR GATEWAY TO EXCELLENCE'}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-200">
                {isRTL 
                  ? 'أهلاً بك في خبير الربط – الوجهة فائقة التطور من شركة خبير الربط، مُصممة لتقديم تجربة إدارة مواقف وأسلوب حياة عصري متميز بمعايير عالمية ومرافق استثنائية، مُختارة بعناية فائقة.'
                  : 'Welcome to Link Expert – the ultra-advanced destination from Link Expert Company, crafted to offer a premier parking management experience and modern lifestyle with international standards and exceptional facilities, meticulously chosen.'
                }
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-300">
                {isRTL 
                  ? 'نحن نقدم حلول إدارة المواقف الذكية والمتطورة، مع التركيز على الابتكار والتكنولوجيا المتقدمة لضمان تجربة مريحة وآمنة لعملائنا.'
                  : 'We provide smart and advanced parking management solutions, focusing on innovation and cutting-edge technology to ensure a comfortable and secure experience for our clients.'
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

      {/* Inspiring Vistas Section - Features Grid */}
      <section id="gallery" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.5)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 uppercase tracking-wider">
              {isRTL ? 'إطلالات ساحرة تلهم الإبداع' : 'INSPIRING VISTAS THAT ELEVATE CREATIVITY'}
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-12">
              {isRTL ? 'من هنا تبدأ رحلتك نحو التميز' : 'Your journey to excellence begins here'}
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
                title: isRTL ? 'مكاتب فاخرة' : 'Office Mansions',
                description: isRTL ? 'مساحات عمل راقية' : 'Elegant workspaces'
              },
              {
                icon: Star,
                title: isRTL ? 'خدمات فندقية' : 'Boutique Hotel',
                description: isRTL ? 'إقامة فاخرة' : 'Luxury accommodation'
              },
              {
                icon: Users,
                title: isRTL ? 'نادي العضويات الخاصة' : 'Link Exclusive Memberships Club',
                description: isRTL ? 'عضويات مميزة' : 'Premium memberships'
              },
              {
                icon: Shield,
                title: isRTL ? 'مناطق خاصة آمنة' : 'Private Secure Areas',
                description: isRTL ? 'حماية فائقة' : 'Ultra security'
              },
              {
                icon: Globe,
                title: isRTL ? 'متاجر العلامات المرموقة' : 'Prestigious Brand Shops',
                description: isRTL ? 'تسوق راقي' : 'Luxury shopping'
              },
              {
                icon: Award,
                title: isRTL ? 'مطاعم فاخرة' : 'Fine Dining Restaurants',
                description: isRTL ? 'تجارب طعام مميزة' : 'Exceptional dining'
              },
              {
                icon: Network,
                title: isRTL ? 'منطقة أيقونية' : 'Iconic Area',
                description: isRTL ? 'موقع متميز' : 'Prime location'
              },
              {
                icon: Car,
                title: isRTL ? 'مواقف ذكية' : 'Boutique Parking',
                description: isRTL ? 'حلول متطورة' : 'Advanced solutions'
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
                  <h3 className="text-sm lg:text-base font-semibold text-gray-900 leading-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
                {isRTL ? 'عزز أعمالك مع نادي خبير الربط' : 'ENHANCE YOUR BUSINESS WITH LINK EXPERT CLUB'}
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {isRTL 
                  ? 'انضم إلى نادي خبير الربط الخاص واستمتع بمزايا حصرية تعزز من تجربتك المهنية وتوفر لك بيئة عمل استثنائية مع أحدث التقنيات والخدمات المتطورة.'
                  : 'Join the exclusive Link Expert Club and enjoy premium benefits that enhance your professional experience and provide you with an exceptional work environment with the latest technologies and advanced services.'
                }
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

      {/* Boutique Offices Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.5)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <Building className="h-16 w-16 mx-auto text-amber-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {isRTL ? 'مكاتب فاخرة' : 'Premium Offices'}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL ? 'مساحات عمل راقية ومتطورة' : 'Elegant and advanced workspaces'}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white uppercase tracking-wider">
                {isRTL ? 'مكاتب فاخرة للنخبة' : 'BOUTIQUE OFFICES FOR THE ELITE'}
              </h2>
              <p className="text-lg lg:text-xl text-white leading-relaxed">
                {isRTL 
                  ? 'تجربة عمل لا مثيل لها حيث تندمج المساحات المصممة بعناية فائقة مع أجواء الفخامة والتميز، لتوفر لك بيئة عمل استثنائية تحفز الإبداع والإنتاجية.'
                  : 'An unparalleled work experience where meticulously designed spaces merge with an atmosphere of luxury and distinction, providing you with an exceptional work environment that stimulates creativity and productivity.'
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exclusive Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.5)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              {isRTL ? 'الخدمات الحصرية' : 'EXCLUSIVE SERVICES'}
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
                description: isRTL ? 'تفعيل وإدارة الوجهات بطريقة احترافية ومتطورة' : 'Professional and advanced destination activation and management'
              },
              {
                icon: Car,
                title: isRTL ? 'خدمة صف السيارات' : 'Link Expert Valet',
                description: isRTL ? 'خدمة صف السيارات الفاخرة والاحترافية' : 'Premium and professional valet parking service'
              },
              {
                icon: Clock,
                title: isRTL ? 'الحجز المسبق' : 'Advanced Reservation',
                description: isRTL ? 'نظام حجز مواقف مسبق ومتطور للغاية' : 'Highly advanced pre-parking booking system'
              },
              {
                icon: Headphones,
                title: isRTL ? 'مدير العلاقات' : 'Relationship Manager',
                description: isRTL ? 'مدير علاقات مخصص ومتفرغ لخدمتك' : 'Dedicated relationship manager for your service'
              },
              {
                icon: Zap,
                title: isRTL ? 'خبير الربط الآن' : 'Link Expert Now',
                description: isRTL ? 'خدمات فورية ومتطورة على مدار الساعة' : 'Instant and advanced services around the clock'
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
                            {isRTL 
                              ? 'الرياض، طريق الأمير تركي بن عبدالعزيز الأول، حي الملقا، الساحة الشمالية لشركة خبير الربط'
                              : 'Riyadh, Prince Turki bin Abdulaziz Al Awwal Street, Al Malqa District, North Yard by Link Expert'
                            }
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
                          <p className="text-gray-400">+966 920 0204 24</p>
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
                      {isRTL ? 'تحميل الملف الإعلامي' : 'Download the Media File'}
                    </Button>
                    <Button 
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
                    {isRTL ? 'الرياض، حي الملقا' : 'Riyadh, Al Malqa'}
                  </p>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <p className="text-sm">+966 920 0204 24</p>
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
                <Button 
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
                >
                  <Download className="h-4 w-4 mr-1" />
                  {isRTL ? 'بروشور' : 'Brochure'}
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
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
