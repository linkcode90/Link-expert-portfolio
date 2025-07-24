import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import LinkLogo from "@/assets/link logo 33.png";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Toggle language
  const toggleLanguage = () => {
    const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} lang={i18n.language}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={LinkLogo} alt="Link Expert Logo" className="h-12" />
          </a>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isRTL ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {t('privacy.title')}
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
            {t('privacy.subtitle')}
          </h2>

          {isRTL ? (
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4">{t('privacy.terms_title')}</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.intro_title')}</h3>
                  <p className="mb-4">{t('privacy.intro_text')}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.general_title')}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {(t('privacy.general_items', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.privacy_title')}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {(t('privacy.privacy_items', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{t('privacy.refund_title')}</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.ongoing_title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{t('privacy.before_start_title')}</h4>
                      <p>{t('privacy.before_start_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.after_start_title')}</h4>
                      <p>{t('privacy.after_start_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.contracts_title')}</h4>
                      <p>{t('privacy.contracts_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.events_title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{t('privacy.before_event_title')}</h4>
                      <p>{t('privacy.before_event_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.less_days_title')}</h4>
                      <p>{t('privacy.less_days_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.ondemand_title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{t('privacy.not_started_title')}</h4>
                      <p>{t('privacy.not_started_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.already_started_title')}</h4>
                      <p>{t('privacy.already_started_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.custom_title')}</h3>
                  <p>{t('privacy.custom_text')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{t('privacy.contact_title')}</h2>
                <p className="mb-2">{t('privacy.contact_intro')}</p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center"><span className="mr-2">📧</span> {t('privacy.email')}</li>
                  <li className="flex items-center"><span className="mr-2">📞</span> {t('privacy.phone')}</li>
                </ul>
                <p className="mt-4">{t('privacy.response_time')}</p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4">{t('privacy.terms_title')}</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.intro_title')}</h3>
                  <p className="mb-4">{t('privacy.intro_text')}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.general_title')}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {(t('privacy.general_items', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.privacy_title')}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {(t('privacy.privacy_items', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{t('privacy.refund_title')}</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.ongoing_title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{t('privacy.before_start_title')}</h4>
                      <p>{t('privacy.before_start_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.after_start_title')}</h4>
                      <p>{t('privacy.after_start_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.contracts_title')}</h4>
                      <p>{t('privacy.contracts_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.events_title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{t('privacy.before_event_title')}</h4>
                      <p>{t('privacy.before_event_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.less_days_title')}</h4>
                      <p>{t('privacy.less_days_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.ondemand_title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{t('privacy.not_started_title')}</h4>
                      <p>{t('privacy.not_started_text')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('privacy.already_started_title')}</h4>
                      <p>{t('privacy.already_started_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('privacy.custom_title')}</h3>
                  <p>{t('privacy.custom_text')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">{t('privacy.contact_title')}</h2>
                <p className="mb-2">{t('privacy.contact_intro')}</p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center"><span className="mr-2">📧</span> {t('privacy.email')}</li>
                  <li className="flex items-center"><span className="mr-2">📞</span> {t('privacy.phone')}</li>
                </ul>
                <p className="mt-4">{t('privacy.response_time')}</p>
              </section>
            </div>
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src={LinkLogo} alt="Link Expert Logo" className="h-10 mb-2" />
              <p className="text-sm text-gray-400">
                {isRTL ? '© 2024 خبير الربط. جميع الحقوق محفوظة.' : '© 2024 Link Expert. All rights reserved.'}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="mailto:info@link-expert.sa" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
                <a href="tel:+966920013846" className="text-gray-400 hover:text-white transition-colors">
                  <Phone size={20} />
                </a>
              </div>
              <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t('nav.privacy')}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default PrivacyPolicy;