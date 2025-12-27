import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Globe, ArrowRight, Building2 } from "lucide-react";

const JobApplication = ({ isRTL = true }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const imageUrl =
    "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cards = [
    {
      id: 1,
      title: isRTL
        ? "تقديم على الوظائف داخل المملكة"
        : "Apply for Jobs Within the Kingdom",
      gradient: "from-emerald-600 via-green-600 to-teal-700",
      icon: Building2,
      href: "https://link-expert.sa/external/application-form",
      accentColor: "emerald",
      description: isRTL
        ? "انضم إلى فرص العمل المحلية"
        : "Join local career opportunities",
    },
    {
      id: 2,
      title: isRTL ? "تقديم على الوظائف خارج المملكة" : "Apply for Jobs Abroad",
      gradient: "from-orange-600 via-red-600 to-pink-700",
      icon: Globe,
      href: "https://forms.monday.com/forms/46389e85e966e45f04d691c972e75c1a?r=euc1",
      accentColor: "orange",
      description: isRTL
        ? "استكشف فرص العمل الدولية"
        : "Explore international opportunities",
    },
  ];

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          filter: "brightness(0.5)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/80"></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <Briefcase className="w-16 h-16 text-white mx-auto mb-4 opacity-90" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 uppercase tracking-wider">
            {isRTL ? "انضم إلى فريقنا" : "Join Our Team"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative bg-gradient-to-br ${card.gradient} rounded-2xl p-1 shadow-2xl overflow-hidden`}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                          backgroundSize: "50px 50px",
                        }}
                      ></div>
                    </div>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at ${
                          hoveredCard === card.id ? "50% 50%" : "0% 0%"
                        }, rgba(255,255,255,0.8), transparent 70%)`,
                      }}
                    ></motion.div>

                    <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-8 lg:p-10 h-full">
                      {/* Icon container */}
                      <motion.div
                        animate={{ rotate: hoveredCard === card.id ? 360 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="inline-block mb-6"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                          {card.title}
                        </h3>

                        <p className="text-white/80 text-lg">
                          {card.description}
                        </p>

                        {/* Call to action */}
                        <motion.div
                          className="flex items-center gap-2 text-white font-semibold pt-4"
                          animate={{ x: hoveredCard === card.id ? 10 : 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="text-lg">
                            {isRTL ? "ابدأ الآن" : "Apply Now"}
                          </span>
                          <motion.div
                            animate={{ x: hoveredCard === card.id ? 5 : 0 }}
                            transition={{
                              repeat: hoveredCard === card.id ? Infinity : 0,
                              duration: 0.8,
                              ease: "easeInOut",
                            }}
                          >
                            <ArrowRight className="w-6 h-6" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Decorative corner element */}
                      <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-2xl"></div>
                      <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-2xl"></div>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 text-white/70"
        >
          <p className="text-lg">
            {isRTL
              ? "ابدأ رحلتك المهنية معنا اليوم"
              : "Start your career journey with us today"}
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default JobApplication;
