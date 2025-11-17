import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import LinkLogo from "@/assets/link logo 33.png";
import riyadhParkLogo from "@/assets/riyadh-park.jpeg";
import laysenValleyLogo from "@/assets/laysen-valley.jpeg";
import arriyadhGateLogo from "@/assets/arriyadh-gate-alt.jpeg";
import majdoulTowerLogo from "@/assets/majdoul-tower.jpeg";
import rixosHotelsLogo from "@/assets/rixos-hotels.jpeg";
import panoramaLogo from "@/assets/panorama.jpeg";
import qiddiyaLogo from "@/assets/qiddiya.jpeg";
import northYardLogo from "@/assets/north-yard.jpeg";
import modonLogo from "@/assets/modon.jpeg";
import oudSquareLogo from "@/assets/oud-square.jpeg";
import oudSquarePngLogo from "@/assets/Oud Square.png";
import riyadhHoldingLogo from "@/assets/riyadh-holding.jpeg";
import developmentAuthSupportLogo from "@/assets/devolopment auth support center.jpeg";
import sikkahLogo from "@/assets/sikkah.png";
import industrialCenterLogo from "@/assets/industrial center.jpeg";
import servcorpLogo from "@/assets/servcorp.jpeg";
import omAliLogo from "@/assets/omali.jpeg";
import saudiEximLogo from "@/assets/saudi exim.jpeg";
import ministryOfEnergyLogo from "@/assets/ministryofenergy.jpeg";
import rematAlRiyadhLogo from "@/assets/remat al-riyadh.jpeg";
import awqadLogo from "@/assets/awtad.jpeg";
import iotLogo from "@/assets/iot.jpeg";
import alBawaniLogo from "@/assets/al-bawani.jpeg";
import alFuttaimLogo from "@/assets/al-futtaim.jpeg";
import tajDhabiLogo from "@/assets/taj-dhabi.jpeg";
import tawabeqLogo from "@/assets/tawabeq.jpeg";
import urbanconLogo from "@/assets/urbancon.jpeg";
import darWardLogo from "@/assets/dar ward.jpeg";
import bydLogo from "@/assets/byd.jpeg";
import alraedahFinanceLogo from "@/assets/alraedah finance.jpeg";
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
  Quote,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    projectLocation: '',
    phone: '',
    email: '',
    requiredServices: '',
    projectType: '',
    projectName: '',
    parentCompany: ''
  });
  
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  // Company logos map for reviews
  const companyLogosMap: { [key: string]: string } = {
    'Arriyadh Gate': arriyadhGateLogo,
    'بوابة الرياض': arriyadhGateLogo,
    'Majdoul Tower': majdoulTowerLogo,
    'برج مجدول': majdoulTowerLogo,
    'Laysen Valley': laysenValleyLogo,
    'ليسن فالي': laysenValleyLogo,
    'Riyadh Park': riyadhParkLogo,
    'الرياض بارك': riyadhParkLogo,
    'Riyadh Park Mall': riyadhParkLogo,
    'رياض بارك مول': riyadhParkLogo,
  };

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

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission - open mailto link
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const email = 'info@link-expert.sa';
    const subject = isRTL 
      ? `طلب خدمة جديد من ${formData.name}`
      : `New Service Request from ${formData.name}`;
    
    const body = isRTL
      ? `الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}
موقع المشروع: ${formData.projectLocation}
نوع المشروع: ${formData.projectType}
اسم المشروع: ${formData.projectName}
اسم الشركة الأم: ${formData.parentCompany}
الخدمات المطلوبة: ${formData.requiredServices}`
      : `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Location: ${formData.projectLocation}
Project Type: ${formData.projectType}
Project Name: ${formData.projectName}
Parent Company: ${formData.parentCompany}
Required Services: ${formData.requiredServices}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
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
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? 'شركاء النجاح' : 'Partners in Success'}
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
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className={`block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium ${isRTL ? 'text-right w-full' : 'text-left'}`}
              >
                {isRTL ? 'شركاء النجاح' : 'Partners in Success'}
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
                ? 'انعم بتفرد المكان.. وتميز الكيان في تجربة إدارة مواقف فائقة الدقة في أنحاء المملكة العربية السعودية'
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

      {/* Partners in Success Section */}
      <section id="partners" className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
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
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              {isRTL ? 'شركاء النجاح' : 'PARTNERS IN SUCCESS'}
            </h2>
            <p className="text-xl text-amber-300 max-w-2xl mx-auto font-medium">
              {isRTL 
                ? 'نفتخر بشراكاتنا الاستراتيجية مع أبرز الشركات والمشاريع الرائدة في المملكة'
                : 'We are proud of our strategic partnerships with leading companies and projects in the Kingdom'
              }
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
              {[
                { name: 'Laysen Valley', image: laysenValleyLogo },
                { name: 'Qiddiya', image: qiddiyaLogo },
                { name: 'Riyadh Park', image: riyadhParkLogo },
                { name: 'Panorama', image: panoramaLogo },
                { name: 'Majdoul Tower', image: majdoulTowerLogo },
                { name: 'Oud Square', image: oudSquarePngLogo },
                { name: 'North Yard', image: northYardLogo },
                { name: 'Arriyadh Gate', image: arriyadhGateLogo },
                { name: 'Rixos Hotels', image: rixosHotelsLogo },
                { name: 'Riyadh Holding', image: riyadhHoldingLogo },
                { name: 'MODON', image: modonLogo },
                { name: 'Al Bawani', image: alBawaniLogo },
                { name: 'UrbanCon', image: urbanconLogo },
                { name: 'Tawabeq', image: tawabeqLogo },
                { name: 'Al Futtaim', image: alFuttaimLogo },
                { name: 'Taj Dhabi', image: tajDhabiLogo },
                { name: 'Development Authorities Support Center', image: developmentAuthSupportLogo },
                { name: 'Sikkah', image: sikkahLogo },
                { name: 'Industrial Center', image: industrialCenterLogo },
                { name: 'SERVcorp', image: servcorpLogo },
                { name: 'Om Ali Oriental Restaurant', image: omAliLogo },
                { name: 'Saudi EXIM', image: saudiEximLogo },
                { name: 'Ministry of Energy', image: ministryOfEnergyLogo },
                { name: 'Remat Al-Riyadh', image: rematAlRiyadhLogo },
                { name: 'Awqad', image: awqadLogo },
                { name: 'iot²', image: iotLogo },
                { name: 'Dar Ward', image: darWardLogo },
                { name: 'BYD Al-Futtaim', image: bydLogo },
                { name: 'Alraedah Finance', image: alraedahFinanceLogo },
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-amber-400 h-full flex items-center justify-center min-h-[120px] group-hover:scale-105 group-hover:bg-white/20">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-14 lg:max-h-18 w-auto h-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                </div>
                </motion.div>
              ))}
              </div>
            </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=80')`, filter: 'brightness(0.3)'}}></div>
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
              {t('reviews.title')}
              </h2>
            <p className="text-xl text-amber-300 font-medium">
              {t('reviews.subtitle')}
              </p>
            </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {(t('reviews.items', { returnObjects: true }) as Array<{company: string, logo: string, review: string}>).map((reviewItem, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-amber-400 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-amber-400" />
          </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-200 text-base lg:text-lg leading-relaxed mb-6 flex-grow">
                      "{reviewItem.review}"
                    </p>
                    
                    {/* Company Logo */}
                    <div className="flex items-center space-x-4 rtl:space-x-reverse pt-4 border-t border-white/20">
                      <div className="bg-white rounded-lg p-3 flex-shrink-0">
                        <img
                          src={companyLogosMap[reviewItem.company] || reviewItem.logo}
                          alt={reviewItem.company}
                          className="h-12 w-auto object-contain max-w-[120px]"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {reviewItem.company}
                        </h4>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                    <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 border border-gray-600 group-hover:border-amber-400 group-hover:shadow-lg group-hover:shadow-amber-400/20 h-full flex items-center min-h-[80px]">
                      <div className="flex items-start space-x-3 rtl:space-x-reverse w-full">
                        <CheckCircle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <p className="text-base text-gray-200 font-medium leading-relaxed">
                                {service}
                              </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Request Service Button */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mt-8 text-center"
            >
              <Button 
                onClick={() => window.open('https://link-expert.sa/external/request-service', '_blank')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-lg font-semibold rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                {isRTL ? 'طلب خدمة' : 'Request a Service'}
              </Button>
            </motion.div>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'الاسم' : 'Name'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'رقم الهاتف' : 'Phone Number'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'موقع المشروع' : 'Project Location'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'نوع المشروع' : 'Project Type'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'اسم المشروع' : 'Project Name'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="parentCompany"
                      value={formData.parentCompany}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'اسم الشركة الأم' : 'Parent Company Name'}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="requiredServices"
                    value={formData.requiredServices}
                    onChange={handleInputChange}
                    placeholder={isRTL ? 'الخدمات المطلوبة' : 'Required Services'}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    required
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
                      onClick={() => window.open('https://linktr.ee/linkexpert', '_blank')}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-none border border-gray-600 hover:border-amber-500 transition-all duration-300"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      {t('office.downloads.brochure')}
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
                  ? 'استمتع بالتفرد والتميز في تجربة إدارة المواقف الفاخرة في أنحاء المملكة العربية السعودية'
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
                    {t('nav.services')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('partners')}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? 'شركاء النجاح' : 'Partners in Success'}
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
              {/* Social Media Links */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-300">
                  {isRTL ? 'تابعنا على' : 'Follow Us'}
                </h5>
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <a
                    href="https://www.linkedin.com/company/link-expert-ksa/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/link_expertt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=562227946&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FQebcXaCc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
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
