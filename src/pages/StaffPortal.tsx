import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import LinkLogo from "@/assets/link logo 33.png";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Languages,
  ArrowUp,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/use-auth";

const StaffPortal = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hiddens, setHiddens] = useState([false, false, false, false]);
  const toggleSection = (index) => {
    setHiddens((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };


  if (!isAuthenticated) {
    navigate("/");
  }

  // if (loading) return <p>{/* Nothing To Show */}</p>;

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === "ar";

  // Language switcher
  const toggleLanguage = () => {
    const newLang = currentLanguage === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: isRTL ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: isRTL ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    // Set direction and lang on the html element for correct LTR/RTL
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [isRTL, currentLanguage]);

  

  return (
    <div
      className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
      lang={currentLanguage}
    >
      {/* Navigation - static solid background color for visibility */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 bg-opacity-95 shadow-md`}
      >
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
              <a
                href="/"
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
              >
                {isRTL ? "خبير الربط" : "Link Expert"}
              </a>

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
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
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
              <a
                href="/"
                className={`block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium ${
                  isRTL ? "text-right w-full" : "text-left"
                }`}
              >
                {isRTL ? "خبير الربط" : "Link Expert"}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <section
        id="staff-portall"
        className="py-20 lg:py-20 bg-gray-900 text-white relative overflow-hidden"
      >
        <section id="staff-requests" className="py-5 lg:py-10 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-5 text-gray-900 flex items-center justify-between">
              {isRTL ? "طلبات الموظفين" : "Employee Requests"}
              <button
                onClick={() => toggleSection(0)}
                className="ml-4 text-sm text-white bg-amber-600 px-2 py-1 rounded"
              >
                {hiddens[0]
                  ? isRTL
                    ? "إظهار"
                    : "Show"
                  : isRTL
                  ? "إخفاء"
                  : "Hide"}
              </button>
            </h2>
            {!hiddens[0] && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    ar: "استئذان",
                    en: "Work From Leave",
                    descAr: "تقديم طلب إجازة الموظف",
                    descEn: "Submit leave request",
                  },
                  {
                    ar: "طلب تأمين",
                    en: "Request Insurance",
                    descAr: "تقديم طلب التأمين",
                    descEn: "Submit insurance request",
                  },
                  {
                    ar: "خطاب تعريف بالراتب",
                    en: "Salary Introduction Letter",
                    descAr: "للطلبات المتعلقة بالراتب",
                    descEn: "Request salary letter",
                  },
                  {
                    ar: "زيارة تأشيرة طلب",
                    en: "Visit Visa Application",
                    descAr: "تقديم طلب تأشيرة زيارة",
                    descEn: "Submit visit visa request",
                  },
                  {
                    ar: "استقالة طلب",
                    en: "Resignation Request",
                    descAr: "تقديم طلب استقالة",
                    descEn: "Submit resignation request",
                  },
                  {
                    ar: "موظف مباشرة طلب",
                    en: "Request Directly to Employee",
                    descAr: "طلب يرسل مباشرة لموظف",
                    descEn: "Request sent directly to an employee",
                  },
                  {
                    ar: "بصمة مشكلة",
                    en: "Fingerprint Problem",
                    descAr: "الإبلاغ عن مشكلة البصمة",
                    descEn: "Report fingerprint issue",
                  },
                  {
                    ar: "طلب نقل موظف لمشروع",
                    en: "Employee Transfer Request",
                    descAr: "طلب نقل موظف إلى مشروع آخر",
                    descEn: "Request employee transfer to another project",
                  },
                  {
                    ar: "طلب اصدار بطاقة اقامة",
                    en: "Iqama Card Request",
                    descAr: "تقديم طلب لإصدار بطاقة إقامة",
                    descEn: "Request Iqama issuance",
                  },
                  {
                    ar: "خارج دوام",
                    en: "Work Outside the Office",
                    descAr: "طلب عمل خارج الدوام",
                    descEn: "Request work outside office hours",
                  },
                  {
                    ar: "جولف عربة رخصة طلب",
                    en: "Golf Car License Request",
                    descAr: "طلب رخصة لعربة الغولف",
                    descEn: "Request golf car license",
                  },
                  {
                    ar: "Card Issue",
                    en: "Card Issue",
                    descAr: "مشاكل إصدار البطاقة",
                    descEn: "Card issue request",
                  },
                  {
                    ar: "طلب مستحقات",
                    en: "Request for Dues",
                    descAr: "تقديم طلب مستحقات",
                    descEn: "Request dues",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {isRTL ? item.ar : item.en}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {isRTL ? item.descAr : item.descEn}
                      </p>
                      <a
                        href="https://link-expert.sa/external/Employee-requests"
                        target="_blank"
                        className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                      >
                        {isRTL ? "اضغط هنا" : "Go to Request"}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="idaratech" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center justify-between">
              {isRTL ? "تحميل برنامج إدارتك" : "Download Idaratech App"}
              <button
                onClick={() => toggleSection(1)}
                className="ml-4 text-sm text-white bg-amber-600 px-2 py-1 rounded"
              >
                {hiddens[1]
                  ? isRTL
                    ? "إظهار"
                    : "Show"
                  : isRTL
                  ? "إخفاء"
                  : "Hide"}
              </button>
            </h2>
            {!hiddens[1] && (
              <>
                <p className="text-gray-600 mb-6">
                  {isRTL
                    ? "لتسجيل بصمة الحضور والانصراف ولتقديم الإجازات السنوية والمرضية والخاصة"
                    : "To record attendance, clock in/out, and submit annual, sick, and special leave requests"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.idaratech.android&hl=en"
                    target="_blank"
                    className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL
                      ? "تحميل نسخة الأندرويد"
                      : "Download Android Version"}
                  </a>

                  <a
                    href="https://apps.apple.com/us/app/idaratech-hr/id6478585872"
                    target="_blank"
                    className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL ? "تحميل نسخة Apple" : "Download Apple Version"}
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {isRTL
                      ? "شرح كيفية استخدام البرنامج"
                      : "How to Use the App"}
                  </h3>
                  <a
                    href="https://drive.google.com/drive/folders/1aYNO3zYbX3JJDVB6-6vkQHU39PUCvZog"
                    target="_blank"
                    className="mt-3 w-full bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL ? "شاهد الشرح" : "View Tutorial"}
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        <section id="linkus" className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center justify-between">
              {isRTL ? "تحميل برنامج السنترال Linkus" : "Download Linkus App"}
              <button
                onClick={() => toggleSection(2)}
                className="ml-4 text-sm text-white bg-amber-600 px-2 py-1 rounded"
              >
                {hiddens[2]
                  ? isRTL
                    ? "إظهار"
                    : "Show"
                  : isRTL
                  ? "إخفاء"
                  : "Hide"}
              </button>
            </h2>
            {!hiddens[2] && (
              <>
                <p className="text-gray-600 mb-6">
                  {isRTL
                    ? "للتواصل الداخلي مع موظفي الشركة وخارجيًا مع العملاء"
                    : "For internal communication with employees and external communication with clients"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.yeastar.linkus"
                    target="_blank"
                    className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL
                      ? "تحميل نسخة الأندرويد"
                      : "Download Android Version"}
                  </a>

                  <a
                    href="https://itunes.apple.com/us/app/linkus-mobile-client/id1158760574?mt=8"
                    target="_blank"
                    className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL ? "تحميل نسخة Apple" : "Download Apple Version"}
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {isRTL
                      ? "شرح كيفية استخدام البرنامج"
                      : "How to Use the App"}
                  </h3>
                  <a
                    href="https://drive.google.com/drive/folders/1RmULaTdK5qRkbJi_pI4I3bS6IZxgAM7J"
                    target="_blank"
                    className="mt-3 w-full bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL ? "شاهد الشرح" : "View Tutorial"}
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        <section id="employee-tools" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center justify-between">
              {isRTL ? "برامج وخدمات الموظفين" : "Employee Programs & Tools"}
              <button
                onClick={() => toggleSection(3)}
                className="ml-4 text-sm text-white bg-amber-600 px-2 py-1 rounded"
              >
                {hiddens[3]
                  ? isRTL
                    ? "إظهار"
                    : "Show"
                  : isRTL
                  ? "إخفاء"
                  : "Hide"}
              </button>
            </h2>
            {!hiddens[3] && (
              <>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {isRTL
                      ? "برنامج دخول وخروج السيارات (عود سكوير فقط)"
                      : "Vehicle Entry/Exit App (Oud Square Only)"}
                  </h3>
                  <a
                    href="https://drive.google.com/drive/folders/1meQ1WY8qxUwj4lvrfvmc9u-Jj-6gIFg5"
                    target="_blank"
                    className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL ? "تحميل البرنامج" : "Download App"}
                  </a>
                </div>

                {/* برنامج الفاليه لموظفين التشغيل */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {isRTL
                      ? "برنامج الفاليه لموظفين التشغيل المشاريع"
                      : "Valet App for Project Operations Employees"}
                  </h3>
                  <a
                    href="https://drive.google.com/drive/folders/1mChrQaShv2JMr18hdHbKx5QXyGSeTgrr"
                    target="_blank"
                    className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL ? "تحميل البرنامج" : "Download App"}
                  </a>
                </div>

                {/* منصة One Link */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {isRTL
                      ? "منصة Link One (الفاليه – القولف كار – وغيرها)"
                      : "Link One Platform (Valet – Golf Car – Other Services)"}
                  </h3>
                  <a
                    href="https://drive.google.com/drive/folders/10CxvT562LkQb5W1HHbL8j4l5FedhAGWe"
                    target="_blank"
                    className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded inline-block text-center transition-colors duration-200"
                  >
                    {isRTL ? "تحميل المنصة" : "Download Platform"}
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
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
                {isRTL ? "خبير الربط" : "Link Expert"}
              </h3>
              <p className="text-gray-400 text-sm">
                {isRTL ? "مكان لإرثك" : "A Place for Your Legacy"}
              </p>
              <p className="text-gray-400 text-sm">
                {isRTL
                  ? "استمتع بالتفرد والتميز في تجربة إدارة المواقف الفاخرة في أنحاء المملكة العربية السعودية"
                  : "Enjoy the uniqueness and excellence in luxury parking management experience in the new Riyadh downtown"}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                {isRTL ? "روابط سريعة" : "Quick Links"}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? "خبير الربط" : "Link Expert"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {t("nav.services")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("partners")}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? "شركاء النجاح" : "Partners in Success"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {isRTL ? "احجز خدمتك" : "Book Your Service"}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">
                {isRTL ? "معلومات التواصل" : "Contact Information"}
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <p className="text-sm">{t("office.address.value")}</p>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <p className="text-sm ltr" dir="ltr">
                    {t("office.phone.value")}
                  </p>
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
                {isRTL ? "معلومات إضافية" : "Additional Information"}
              </h4>
              <p className="text-gray-400 text-sm">
                {isRTL
                  ? "وجهة فائقة التطور من شركة خبير الربط"
                  : "Ultra-advanced destination by Link Expert Company"}
              </p>
              {/* Social Media Links */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-300">
                  {isRTL ? "تابعنا على" : "Follow Us"}
                </h5>
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <a
                    href="https://www.linkedin.com/company/link-expert-ksa/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/link_expertt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=966562227946&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FQebcXaCc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="mb-4">
              <a
                href="/privacy-policy"
                className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
              >
                {isRTL
                  ? "سياسة الاستخدام والاسترجاع"
                  : "Usage and Refund Policy"}
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {isRTL
                ? "جميع الحقوق محفوظة لخبير الربط @2025"
                : "All rights reserved for Link Expert @2024"}
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

export default StaffPortal;
