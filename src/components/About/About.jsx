import React from "react";
import { FcAbout, FcHome, FcPhone } from "react-icons/fc";
import { GoPersonFill } from "react-icons/go";
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import aboutDict from "../../content/about/about.content";
import Me from "../../assets/images/me2.png";
import TechMarquee from "./Marquee";

const About = () => {
  const content = useTranslation(aboutDict);
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: imageRef, isVisible: imageVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" aria-label="About Me" className="text-gray-900 dark:text-white transition-colors px-4 md:px-8">
      <div 
        ref={titleRef}
        className={`pt-10 will-animate ${titleVisible ? 'animate-fadeInUp' : 'animate-on-scroll'}`}
      >
        <h2 className="flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700">
          {content.title}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen mx-auto max-w-7xl items-center gap-8 lg:gap-12 py-10 lg:py-0">
        <div 
          ref={imageRef}
          className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-100 lg:h-100 relative shrink-0 flex items-center justify-center will-animate ${imageVisible ? 'animate-fadeInLeft' : 'animate-on-scroll'}`}
        >
          <div className="absolute h-full w-full inset-0 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 animate-pulse blur-md"></div>

          <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={Me}
              alt="Mahmoud Hamdi - Full-Stack Developer"
              width={800}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-amber-500 dark:bg-blue-500 rounded-full animate-ping hidden md:block"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 dark:bg-purple-500 rounded-full animate-ping delay-100 hidden md:block"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-500 dark:bg-cyan-500 rounded-full animate-ping delay-200 hidden md:block"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-400 dark:bg-blue-500 rounded-full animate-ping delay-300 hidden md:block"></div>
          </div>
        </div>
        <div 
          ref={contentRef}
          className={`w-full lg:w-3/4 text-base md:text-lg lg:text-xl font-medium shadow-lg shadow-amber-100 dark:shadow-purple-300/30 rounded-2xl p-6 md:p-10 bg-amber-50/50 dark:bg-gray-800/70 backdrop-blur-xl border border-amber-200 dark:border-purple-800/50 will-animate ${contentVisible ? 'animate-fadeInRight' : 'animate-on-scroll'}`}
        >
          <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-amber-600 dark:text-purple-500 dark:drop-shadow-purple-600 dark:text-shadow-cyan-400 dark:text-shadow-2xs">
              Mahmoud Hamdi
            </span>{" "}
            - {content.subtitle}
          </h3>
          <p className="text-sm md:text-base lg:text-lg">
            {content.bio}
          </p>
          <hr className="w-full bg-amber-200 dark:bg-cyan-400 h-0.5 mt-6 md:mt-10 border-none" />
          <div className="flex flex-col sm:flex-row mt-5 items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xl md:text-2xl">{content.info}:</span>
              <button
                aria-label={content.showInfo}
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <FcAbout className="size-10 md:size-12 cursor-pointer hover:scale-110 transition-transform duration-300" />
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-white w-11/12 md:w-8/12 lg:w-6/12 max-w-5xl">
                  <h3 className="font-bold text-xl md:text-2xl text-center text-amber-600 dark:drop-shadow-purple-600 dark:text-purple-500">
                    {content.personalInfo}
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2">
                    <p className="py-2 sm:py-4 text-base md:text-lg flex items-center gap-2">
                      <GoPersonFill className="text-amber-300" />
                      {content.nameLabel}: Mahmoud Hamdi
                    </p>
                    <p className="py-2 sm:py-4 text-base md:text-lg flex items-center gap-2">
                      <FcHome className="text-amber-300" />
                      {content.addressLabel}: Luxor, Egypt
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2">
                    <p className="py-2 sm:py-4 text-base md:text-lg flex items-center gap-2">
                      <MdOutlineEmail className="text-amber-300 fill-error" />
                      {content.emailLabel}: mahmoud.hamdi.work@gmail.com
                    </p>
                    <p className="py-2 sm:py-4 text-base md:text-lg flex items-center gap-2">
                      <FcPhone className="text-amber-300 rotate-270" />
                      {content.phoneLabel}: +20 1060813598
                    </p>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-lg font-semibold">{content.contactLabel}:</span>
              <a href="https://wa.me/201060813598" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MdWhatsapp className="text-green-500 hover:text-green-400 hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm hover:drop-shadow-green-400 size-8 md:size-10 cursor-pointer" />
              </a>
              <a href="https://github.com/MahmoudHamdi74" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-black bg-amber-50 rounded-full hover:text-gray-200 hover:bg-black hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm hover:drop-shadow-gray-950 size-8 md:size-10 cursor-pointer" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-blue-600 hover:text-blue-400 hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm hover:drop-shadow-blue-400 size-8 md:size-10 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/mahmoud-hamdi-743969245" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-transform duration-300 hover:drop-shadow-sm hover:drop-shadow-blue-400 size-8 md:size-10 cursor-pointer" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <TechMarquee />
    </section>
  );
};

export default About;
