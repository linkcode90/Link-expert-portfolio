import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import LinkLogo from "@/assets/link logo 33.png";
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
  Wrench,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUp,
  Star,
  Award,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === "ar";

  const toggleLanguage = useCallback(() => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  }, [currentLanguage, i18n]);

  // Enhanced scroll handling with performance optimization
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // Update active section based on scroll position
    const sections = ["home", "about", "services", "contact"];
    const currentSection =
      sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || "home";

    setActiveSection(currentSection);
  }, []);

  // Mouse move tracking for parallax effects
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    });
  }, []);

  useEffect(() => {
    setIsVisible(true);

    // Set initial direction based on language
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // Enhanced scroll event listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Enhanced Intersection Observer for reveal animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll(".stagger-child");
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("active");
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    // Observe all elements with reveal classes
    const observeElements = () => {
      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
        .forEach((el) => {
          observerRef.current?.observe(el);
        });
    };

    // Use setTimeout to ensure DOM is ready
    setTimeout(observeElements, 100);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("mousemove", handleMouseMove);
      observerRef.current?.disconnect();
    };
  }, [isRTL, handleScroll, handleMouseMove]);

  const services = [
    {
      icon: Building,
      title: t("services.parkingManagement"),
      description: t("services.parkingManagementDesc"),
      features: [
        t("services.features.parkingSystemDesign"),
        t("services.features.smartParkingTechnology"),
        t("services.features.accessControl"),
        t("services.features.paymentSolutions"),
      ],
      iconImage: "https://link-expert.sa/images/L6_1.webp",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Car,
      title: t("services.vehicleFleet"),
      description: t("services.vehicleFleetDesc"),
      features: [
        t("services.features.carWashingServices"),
        t("services.features.fleetMaintenance"),
        t("services.features.vehicleRegistration"),
        t("services.features.serviceManagement"),
      ],
      iconImage: "https://link-expert.sa/images/L7_1.webp",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: t("services.crowdControl"),
      description: t("services.crowdControlDesc"),
      features: [
        t("services.features.trafficManagement"),
        t("services.features.crowdFlowControl"),
        t("services.features.securitySystems"),
        t("services.features.monitoringSolutions"),
      ],
      iconImage: "https://link-expert.sa/images/L8_1.webp",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Settings,
      title: t("services.membershipManagement"),
      description: t("services.membershipManagementDesc"),
      features: [
        t("services.features.memberRegistration"),
        t("services.features.accessManagement"),
        t("services.features.billingSystems"),
        t("services.features.customerSupport"),
      ],
      iconImage: "https://link-expert.sa/images/L9_1.webp",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Server,
      title: t("services.busGolfCar"),
      description: t("services.busGolfCarDesc"),
      features: [
        t("services.features.transportationSolutions"),
        t("services.features.vehicleMaintenance"),
        t("services.features.routePlanning"),
        t("services.features.safetyManagement"),
      ],
      iconImage: "https://link-expert.sa/images/L10_1.webp",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Battery,
      title: t("services.energyCharging"),
      description: t("services.energyChargingDesc"),
      features: [
        t("services.features.chargingStations"),
        t("services.features.energyManagement"),
        t("services.features.electricVehicleSupport"),
        t("services.features.sustainableSolutions"),
      ],
      iconImage: "https://link-expert.sa/images/L10_1.webp",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Wrench,
      title: t("services.maintenance"),
      description: t("services.maintenanceDesc"),
      features: [
        t("services.features.regularMaintenance"),
        t("services.features.cleaningServices"),
        t("services.features.equipmentRepair"),
        t("services.features.facilityManagement"),
      ],
      iconImage: "https://link-expert.sa/images/L10_1.webp",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: t("stats.projectsCompleted"),
      icon: Award,
      color: "text-blue-600",
    },
    {
      number: "10+",
      label: t("stats.yearsExperience"),
      icon: Star,
      color: "text-green-600",
    },
    {
      number: "200+",
      label: t("stats.happyClients"),
      icon: Users,
      color: "text-purple-600",
    },
    {
      number: "99.9%",
      label: t("stats.uptimeGuarantee"),
      icon: Sparkles,
      color: "text-orange-600",
    },
  ];

  const offerings = [
    {
      icon: Clock,
      title: t("offerings.saveTime.title"),
      description: t("offerings.saveTime.description"),
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconImage: "https://oudreserve.sa/images/Artboard-15.webp",
    },
    {
      icon: DollarSign,
      title: t("offerings.saveMoney.title"),
      description: t("offerings.saveMoney.description"),
      color: "bg-gradient-to-br from-green-500 to-green-600",
      iconImage: "https://oudreserve.sa/images/Artboard-14.webp",
    },
    {
      icon: Briefcase,
      title: t("offerings.saveEffort.title"),
      description: t("offerings.saveEffort.description"),
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconImage: "https://oudreserve.sa/images/Artboard-13.webp",
    },
    {
      icon: TrendingUp,
      title: t("offerings.increaseRevenue.title"),
      description: t("offerings.increaseRevenue.description"),
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      iconImage: "https://oudreserve.sa/images/Artboard-16.webp",
    },
    {
      icon: Target,
      title: t("offerings.bestResults.title"),
      description: t("offerings.bestResults.description"),
      color: "bg-gradient-to-br from-red-500 to-red-600",
      iconImage: "https://oudreserve.sa/images/Artboard-17.webp",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-warm-neutral custom-scrollbar">
      {/* Enhanced Header with Glass Effect */}
      <header
        className={`fixed top-0 w-full glass-effect-dark shadow-warm-lg border-b border-amber-500/20 z-70 transition-all duration-500 ${
          scrollY > 50
            ? "backdrop-blur-xl bg-amber-500/90"
            : "backdrop-blur-lg bg-amber-500/80"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-3 animate-slide-in-left gpu-acceleration ${
                isRTL ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div className="relative group">
                <img
                  src={LinkLogo}
                  alt={t("common.logoAlt")}
                  className="h-12 w-12 rounded-full transition-all duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 blur-md animate-pulse-gentle pointer-events-none" /> */}
              </div>
              <span className="text-2xl font-bold text-white gradient-text text-shadow-warm">
                {t("hero.title")}
              </span>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-down">
              {[
                { id: "home", label: t("nav.home") },
                { id: "about", label: t("nav.about") },
                { id: "services", label: t("nav.services") },
                { id: "contact", label: t("nav.contact") },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium focus-visible ${
                    activeSection === item.id ? "text-white" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full animate-scale-in"></div>
                  )}
                </button>
              ))}

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-md bg-white/5"
                title={t("common.toggleLanguage")}
              >
                <Languages className="h-5 w-5 text-white" />
                <span className="ml-2 text-sm font-medium text-white">
                  {currentLanguage === "en" ? "عربي" : "EN"}
                </span>
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-white/30 text-white hover:bg-white/15 hover-scale transition-all duration-300 glass-effect font-medium shadow-warm"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden text-white hover:bg-white/15 hover-scale transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </div>
            </Button>
          </nav>

          {/* Enhanced Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 ease-bounce-in ${
              isMenuOpen
                ? "max-h-96 opacity-100 mt-4 pb-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="border-t border-white/20 pt-4">
              <div className="flex flex-col space-y-4">
                {[
                  { id: "home", label: t("nav.home") },
                  { id: "about", label: t("nav.about") },
                  { id: "services", label: t("nav.services") },
                  { id: "contact", label: t("nav.contact") },
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white/90 hover:text-white transition-all duration-300 py-2 text-left hover-scale stagger-child ${
                      activeSection === item.id
                        ? "text-white font-semibold"
                        : ""
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:bg-white/15 transition-all duration-300 justify-start hover-scale stagger-child"
                >
                  <Languages className="h-5 w-5 mr-2" />
                  {currentLanguage === "en" ? "عربي" : "English"}
                </Button>

                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/15 glass-effect mt-2 hover-scale stagger-child"
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section with Advanced Parallax */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
      >
        {/* Dynamic Background with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(${
              1 + scrollY * 0.0002
            })`,
            backgroundImage:
              "url('https://oudreserve.sa/images/OudImage_1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.7) contrast(1.1)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-amber-800/50 to-amber-600/70 z-10" />

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center text-white z-20 relative">
          <div
            className={`transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transform: `translateY(${mousePosition.y * 10}px) translateX(${
                mousePosition.x * 5
              }px)`,
            }}
          >
            {/* Main Title with Enhanced Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight gradient-text text-shadow-warm animate-fade-in-up gpu-acceleration">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white mb-8"
              >
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
                  {t("hero.title")}
                </span>
              </motion.h1>
            </h1>

            {/* Subtitle with Staggered Animation */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white/95 animate-fade-in-up stagger-delay-1 text-shadow-warm">
              {t("hero.subtitle")}
            </h2>

            {/* Description with Typewriter Effect */}
            <div className="text-lg sm:text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up stagger-delay-2">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 shadow-warm-lg">
                {t("hero.description")}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-delay-3">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 text-lg rounded-2xl hover-lift transition-all duration-500 shadow-warm-xl font-semibold group"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="border-white/30 text-white hover:bg-white/15 px-8 py-4 text-lg rounded-2xl glass-effect hover-scale transition-all duration-500 font-semibold"
              >
                {t("nav.about")}
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-4 w-4 text-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-24 reveal bg-gradient-section relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section with Enhanced Effects */}
            <div className="reveal-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative neo-morphism rounded-3xl p-2 overflow-hidden">
                  <img
                    src="https://Link.com/wp-content/uploads/2024/06/amer-center-meeting-1024x944.jpeg"
                    alt={t("about.meetingImageAlt")}
                    className="w-full h-80 object-cover rounded-2xl shadow-warm-xl hover-scale transition-all duration-700"
                  />
                  <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-amber-900/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-warm-black space-y-8 reveal-right">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 px-4 py-2 text-sm font-medium rounded-full">
                  {t("about.badge", "About Us")}
                </Badge>
                <h2
                  className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent leading-tight"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {t("about.title")}
                </h2>
              </div>

              <div className="space-y-6">
                <p
                  className="text-lg md:text-xl leading-relaxed text-warm-gray"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {t("about.description")}
                </p>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      icon: Award,
                      text: t("about.experience", "Years of Experience"),
                    },
                    { icon: Users, text: t("about.clients", "Happy Clients") },
                    {
                      icon: Target,
                      text: t("about.projects", "Successful Projects"),
                    },
                    { icon: Star, text: t("about.quality", "Quality Service") },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 stagger-child"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        flexDirection: isRTL ? "row-reverse" : "row",
                        textAlign: isRTL ? "right" : "left",
                      }}
                    >
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <item.icon className="h-5 w-5 text-amber-600" />
                      </div>
                      <span className="text-warm-gray font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Offerings Section */}
      <section className="py-24 reveal bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 reveal-scale">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 text-sm font-semibold rounded-full mb-6">
              {t("offerings.badge", "What We Offer")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {t("offerings.title")}
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              {t(
                "offerings.subtitle",
                "Discover how our solutions can transform your business"
              )}
            </p>
          </div>

          {/* Offerings Grid with Enhanced Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="group reveal stagger-child"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="h-full neo-morphism hover-lift transition-all duration-500 border-0 overflow-hidden group-hover:shadow-warm-lg">
                  <CardContent className="p-8 text-center relative">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 ${offering.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon Container */}
                    <div className="relative mb-6 flex justify-center">
                      <div
                        className={`p-6 rounded-2xl ${offering.color} shadow-warm transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <offering.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold mb-4 text-xl text-warm-black group-hover:text-amber-700 transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed text-sm group-hover:text-warm-black transition-colors duration-300">
                      {offering.description}
                    </p>

                    {/* Hover Effect Arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="h-4 w-4 text-amber-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Goal Section */}
      <section className="py-24 reveal bg-gradient-to-br from-amber-600 to-amber-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 reveal-scale">
              <Target className="h-16 w-16 mx-auto mb-6 text-white/90 animate-pulse-gentle" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-shadow-warm">
              {t("goal.title")}
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-12 leading-relaxed text-white/95 max-w-4xl mx-auto">
              {t("goal.description")}
            </p>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="border-white/30 text-white hover:bg-white/15 px-8 py-4 text-lg rounded-2xl glass-effect hover-scale transition-all duration-500 font-semibold"
            >
              {t("goal.cta", "Explore Our Services")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid Section */}
      <section
        id="services"
        className="py-24 reveal bg-gradient-section relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm20 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 reveal-scale">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 text-sm font-semibold rounded-full mb-6">
              {t("services.badge", "Our Services")}
            </Badge>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {t("services.title")}
            </h3>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              {t(
                "services.subtitle",
                "Comprehensive solutions tailored to your needs"
              )}
            </p>
          </div>

          {/* Services Grid with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group reveal stagger-child"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="h-full neo-morphism hover-lift transition-all duration-700 border-0 overflow-hidden group-hover:shadow-warm-xl">
                  <CardContent className="p-8 relative">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div className="relative mb-6 flex justify-center">
                      <div
                        className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-warm transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <service.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h4 className="font-bold mb-4 text-xl text-warm-black group-hover:text-amber-700 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-warm-gray mb-6 leading-relaxed group-hover:text-warm-black transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 text-sm text-warm-gray group-hover:text-amber-700 transition-all duration-300"
                          style={{
                            flexDirection: isRTL ? "row-reverse" : "row",
                            transform: `translateX(${featureIndex * 2}px)`,
                            transitionDelay: `${featureIndex * 50}ms`,
                          }}
                        >
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 text-amber-800 text-xs"
                      >
                        {t("services.featured", "Featured")}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 reveal bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-white to-amber-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 reveal-scale">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 text-sm font-semibold rounded-full mb-6">
              {t("stats.badge", "Our Achievements")}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              {t("stats.achievements")}
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              {t("stats.achievementsDesc")}
            </p>
          </div>

          {/* Stats Grid with Enhanced Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group reveal stagger-child"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="neo-morphism hover-lift transition-all duration-500 border-0 text-center overflow-hidden group-hover:shadow-warm-lg">
                  <CardContent className="p-8 relative">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors duration-300">
                        <stat.icon
                          className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-4 animate-bounce-in group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </div>

                    {/* Label */}
                    <p className="text-warm-gray font-semibold leading-relaxed group-hover:text-warm-black transition-colors duration-300">
                      {stat.label}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-24 reveal bg-gradient-to-br from-amber-600 to-amber-700 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form Section */}
            <div className="reveal-left">
              <div className="mb-12">
                <Badge className="bg-white/20 text-white px-6 py-3 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
                  {t("contact.badge", "Get In Touch")}
                </Badge>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow-warm">
                  {t("contact.title")}
                </h2>
                <p className="text-xl text-white/90 leading-relaxed max-w-md">
                  {t("contact.subtitle")}
                </p>
              </div>

              {/* Enhanced Contact Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <input
                      type="text"
                      placeholder={t("contact.form.name")}
                      className="w-full p-4 rounded-2xl border-0 bg-white/15 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300 glass-effect"
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="tel"
                      placeholder={t("contact.form.phone")}
                      className="w-full p-4 rounded-2xl border-0 bg-white/15 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300 glass-effect"
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                <div className="group">
                  <input
                    type="email"
                    placeholder={t("contact.form.email")}
                    className="w-full p-4 rounded-2xl border-0 bg-white/15 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300 glass-effect"
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>

                <div className="group">
                  <textarea
                    placeholder={t("contact.form.message")}
                    rows={5}
                    className="w-full p-4 rounded-2xl border-0 bg-white/15 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300 glass-effect resize-none"
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>

                <Button className="w-full bg-white text-amber-700 hover:bg-white/90 py-4 text-lg rounded-2xl hover-lift transition-all duration-500 shadow-warm-xl font-semibold group">
                  {t("contact.form.send")}
                  <Mail className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="reveal-right">
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-8 text-shadow-warm">
                  {t("contact.visitOffice")}
                </h3>
              </div>

              {/* Office Image */}
              <div className="mb-8 group">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="https://oudreserve.sa/images/Image.jpg"
                    alt={t("contact.officeImageAlt")}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: t("contact.address"),
                    content: t("contact.info.address"),
                    color: "text-red-300",
                  },
                  {
                    icon: Mail,
                    title: t("contact.email"),
                    content: t("contact.info.email"),
                    color: "text-blue-300",
                  },
                  {
                    icon: Phone,
                    title: t("contact.phone"),
                    content: t("contact.info.phone"),
                    color: "text-green-300",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover-lift transition-all duration-300 group"
                  >
                    <div
                      className={`flex items-center space-x-4 ${
                        isRTL ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <item.icon
                            className={`h-6 w-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white/90 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/80 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-6 bg-warm-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.05'%3E%3Cpath d='M30 30c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2 reveal-left">
              <div
                className={`flex items-center space-x-3 mb-6 ${
                  isRTL ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div className="relative group">
                  <img
                    src={LinkLogo}
                    alt={t("common.logoAlt")}
                    className="h-12 w-12 rounded-full transition-all duration-300 group-hover:scale-105"
                  />
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 blur-md animate-pulse-gentle pointer-events-none" /> */}
                </div>
                <span className="text-3xl font-bold gradient-text">
                  {t("hero.title")}
                </span>
              </div>

              <p
                className="text-white/80 mb-8 max-w-md text-lg leading-relaxed"
                style={{ textAlign: isRTL ? "right" : "left" }}
              >
                {t("footer.description")}
              </p>

              {/* Social Media Links */}
              <div
                className={`flex space-x-4 ${
                  isRTL ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                {[
                  { icon: Facebook, label: t("footer.social.facebook") },
                  { icon: Linkedin, label: t("footer.social.linkedin") },
                  { icon: Twitter, label: t("footer.social.twitter") },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-white transition-all duration-300 hover-scale group"
                  >
                    <social.icon className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {social.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="reveal-scale stagger-delay-1">
              <h4
                className="font-bold mb-6 text-xl text-amber-400"
                style={{ textAlign: isRTL ? "right" : "left" }}
              >
                {t("footer.services")}
              </h4>
              <ul
                className="space-y-3 text-white/70"
                style={{ textAlign: isRTL ? "right" : "left" }}
              >
                {[
                  t("services.parkingManagement"),
                  t("services.vehicleFleet"),
                  t("services.crowdControl"),
                  t("services.energyCharging"),
                ].map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-amber-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform group"
                  >
                    <span className="relative">
                      {service}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="reveal-scale stagger-delay-2">
              <h4
                className="font-bold mb-6 text-xl text-amber-400"
                style={{ textAlign: isRTL ? "right" : "left" }}
              >
                {t("footer.contact")}
              </h4>
              <ul
                className="space-y-3 text-white/70"
                style={{ textAlign: isRTL ? "right" : "left" }}
              >
                {[
                  t("contact.info.phone"),
                  t("contact.info.email"),
                  t("contact.info.address"),
                ].map((contact, index) => (
                  <li
                    key={index}
                    className="hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                  >
                    {contact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <Separator className="my-8 border-white/20" />
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
            <p className="text-lg mb-4 md:mb-0">{t("footer.rights")}</p>
            <div
              className={`flex space-x-6 ${
                isRTL ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              {[t("footer.privacy"), t("footer.terms")].map((link, index) => (
                <button
                  key={index}
                  className="hover:text-amber-400 transition-colors duration-300 hover-scale relative group"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating Action Buttons */}
      <div
        className="fixed bottom-8 z-80 flex flex-col gap-4"
        style={{ [isRTL ? "left" : "right"]: "2rem" }}
      >
        {/* Contact Button */}
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-warm-xl hover-lift transition-all duration-500 group"
          onClick={() => scrollToSection("contact")}
          title={t("common.contactUs")}
        >
          <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        </Button>

        {/* Scroll to Top Button */}
        {scrollY > 300 && (
          <Button
            size="lg"
            variant="outline"
            className="rounded-full w-16 h-16 glass-effect border-amber-500/30 text-amber-600 hover:bg-amber-500/10 shadow-warm hover-lift transition-all duration-500 group animate-fade-in-up"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            title={t("common.backToTop")}
          >
            <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Index;
