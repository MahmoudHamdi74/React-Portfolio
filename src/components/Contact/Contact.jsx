import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";
import contactDict from "../../content/contact/contact.content";
import ContactForm from "./ContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const contact = {
  address: "Luxor, Egypt",
  email: "mahmoud.hamdi.work@gmail.com",
  phone: "+201060813598",
  socials: {
    linkedin: "https://www.linkedin.com/in/mahmoud-hamdi-743969245",
    github: "https://github.com/MahmoudHamdi74",
    whatsapp: "https://wa.me/201060813598",
  },
};

export default function Contact() {
  const [activeTab, setActiveTab] = useState("info");
  const content = useTranslation(contactDict);
  return (
    <section key={activeTab} className="py-16 md:py-20 px-4 md:px-8 " id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700">
              {content.title}
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            {content.description}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="flex rounded-lg p-1 bg-amber-50 border border-amber-200 dark:bg-gray-900/60 dark:border-purple-800/50">
              {[
                { id: "info", label: content.contactInfo, icon: "📍" },
                { id: "form", label: content.sendMessage, icon: "📧" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-3 m-1 rounded-lg font-medium text-md transition-all duration-300 ${activeTab === tab.id ? "bg-amber-300 shadow-sm shadow-amber-200 dark:bg-purple-600 dark:shadow-purple-900/30 text-gray-900 dark:text-white" : "text-gray-600 hover:bg-amber-100 dark:text-gray-400 dark:hover:bg-purple-900/30"}`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === "info" && (
                <motion.div
                  key="contact-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-4xl mx-auto">
                      <div className="rounded-2xl p-8 shadow-md border bg-amber-50/80 border-amber-200 shadow-amber-100 dark:bg-gray-900/50 dark:border-purple-800/50 dark:shadow-purple-900/30">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center ">
                        <motion.div
                          variants={itemVariants}
                          className="text-center md:text-left"
                        >
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 bg-amber-100 text-gray-700 dark:bg-purple-900/40 dark:text-purple-300">
                            📍
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {content.addressLabel}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-700 dark:text-neutral-300">
                            {content.addressValue}
                          </p>
                        </motion.div>
                        <motion.div
                          variants={itemVariants}
                          className="text-center md:text-left"
                        >
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 bg-amber-100 text-gray-700 dark:bg-purple-900/40 dark:text-purple-300">
                            📞
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {content.phoneLabel}
                          </h3>
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-sm leading-relaxed text-gray-700 dark:text-neutral-300"
                          >
                            {contact.phone}
                          </a>
                        </motion.div>
                        <motion.div
                          variants={itemVariants}
                          className="text-center md:text-left"
                        >
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 bg-amber-100 text-gray-700 dark:bg-purple-900/40 dark:text-purple-300">
                            📧
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {content.emailLabel}
                          </h3>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-sm leading-relaxed text-gray-700 dark:text-neutral-300"
                          >
                            {contact.email}
                          </a>
                        </motion.div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-8 pt-8">
                        <motion.a
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={contact.socials.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="  flex-1 text-center py-3 px-6 rounded-lg font-medium transition-colors bg-linear-to-t from-amber-200 to-amber-500 hover:from-amber-300 hover:to-amber-600 dark:bg-linear-to-r dark:from-purple-600 dark:to-purple-400 dark:hover:from-purple-700 dark:hover:to-purple-500 text-gray-800 dark:text-neutral-50"
                        >
                          <span className="text-xl flex items-center justify-center gap-2">
                            <FaWhatsapp />{content.whatsappChat}
                          </span>
                        </motion.a>
                        <motion.button
                          variants={itemVariants}
                          onClick={()=>setActiveTab('form')}
                          whileHover={{ scale: 1.02 ,cursor:'pointer'}}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 text-center py-3 px-6 rounded-lg font-medium border transition-colors border-amber-300 hover:bg-amber-100 text-gray-700 dark:border-purple-700 dark:hover:bg-purple-900/30 dark:text-purple-300"
                        >
                          <span className="text-xl me-2">
                            📧 {content.sendMessage}
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === "form" && (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-4xl mx-auto">
                    <ContactForm />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
