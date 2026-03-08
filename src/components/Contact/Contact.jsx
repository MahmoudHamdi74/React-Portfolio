import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";
import contactDict from "../../content/contact/contact.content";
import ContactForm from "./ContactForm";

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
        <div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700">
              {content.title}
            </h2>
          </div>
          <p
            className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            {content.description}
          </p>
          <div
            className="flex justify-center mb-12"
          >
            <div className="flex rounded-lg p-1 bg-amber-50 border border-amber-200 dark:bg-gray-900/60 dark:border-purple-800/50">
              {[
                { id: "info", label: content.contactInfo, icon: "📍" },
                { id: "form", label: content.sendMessage, icon: "📧" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 m-1 rounded-lg font-medium text-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${activeTab === tab.id ? "bg-amber-300 shadow-sm shadow-amber-200 dark:bg-purple-600 dark:shadow-purple-900/30 text-gray-900 dark:text-white" : "text-gray-600 hover:bg-amber-100 dark:text-gray-400 dark:hover:bg-purple-900/30"}`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
              {activeTab === "info" && (
                <div key="contact-info">
                  <div className="max-w-4xl mx-auto">
                      <div className="rounded-2xl p-8 shadow-md border bg-amber-50/80 border-amber-200 shadow-amber-100 dark:bg-gray-900/50 dark:border-purple-800/50 dark:shadow-purple-900/30">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center ">
                        <div className="text-center md:text-left">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 bg-amber-100 text-gray-700 dark:bg-purple-900/40 dark:text-purple-300">
                            📍
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {content.addressLabel}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-700 dark:text-neutral-300">
                            {content.addressValue}
                          </p>
                        </div>
                        <div
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
                        </div>
                        <div
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
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-8 pt-8">
                        <a
                          href={contact.socials.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-linear-to-t from-amber-200 to-amber-500 hover:from-amber-300 hover:to-amber-600 dark:bg-linear-to-r dark:from-purple-600 dark:to-purple-400 dark:hover:from-purple-700 dark:hover:to-purple-500 text-gray-800 dark:text-neutral-50"
                        >
                          <span className="text-xl flex items-center justify-center gap-2">
                            <FaWhatsapp />{content.whatsappChat}
                          </span>
                        </a>
                        <button
                          onClick={()=>setActiveTab('form')}
                          className="flex-1 text-center py-3 px-6 rounded-lg font-medium border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:cursor-pointer border-amber-300 hover:bg-amber-100 text-gray-700 dark:border-purple-700 dark:hover:bg-purple-900/30 dark:text-purple-300"
                        >
                          <span className="text-xl me-2">
                            📧 {content.sendMessage}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "form" && (
                <div key="contact-form">
                  <div className="max-w-4xl mx-auto">
                    <ContactForm />
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
