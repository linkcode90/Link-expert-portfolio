import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-100 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={i18n.language}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-center">404</h1>
        <p className={`text-xl mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{isRTL ? 'عذراً! الصفحة غير موجودة' : 'Oops! Page not found'}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline text-center block">
          {isRTL ? 'العودة إلى الرئيسية' : 'Return to Home'}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
