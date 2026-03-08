import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import navbarDict from "../../content/navbar/navbar.content";
import LanguageList from "./languageList";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const content = useTranslation(navbarDict);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : false;
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#hero", label: content.me  },
    { href: "#about", label: content.about },
    { href: "#skills", label: content.skills },
    { href: "#projects", label: content.projects },
    { href: "#github", label: content.github },
    { href: "#contact", label: content.contact },
  ];
  if (activeLink === navLinks[0].href) {
    setActiveLink(true);
  }

  return (
    <div className="justify-center flex px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-label="Main navigation"
        className="navbar flex items-center h-16 md:h-18 justify-between px-4 md:px-16 py-3 md:py-4 shadow-md bg-linear-300 via-50% from-amber-100 via-primary-600 to-amber-100 dark:from-gray-900 dark:via-purple-700 dark:to-gray-900 text-gray-900 dark:text-white transition-colors fixed w-full max-w-7xl z-50 rounded-2xl md:rounded-4xl"
      >
        <div className="logo text-xl font-bold">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              alt="Mahmoud Hamdi - Logo"
              width={104}
              height={40}
              className="w-20 md:w-26"
            />
          </a>
        </div>

        {/* Desktop nav */}
        <div
          className="nav-items hidden lg:flex gap-6 xl:gap-12 text-lg font-medium"
          role="menubar"
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-button flex items-center justify-center px-3 py-2 hover:bg-amber-100 hover:text-amber-700 dark:hover:bg-purple-800/50 dark:hover:text-purple-200 rounded-md transition-all duration-200 ${isActive ? "text-amber-700 bg-amber-100 ring-2 dark:text-white dark:bg-purple-600 dark:shadow-lg dark:shadow-purple-500/25 dark:ring-1" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavItem"
                    className={
                      "inset-0 rounded-xl bg-gray-900 shadow-lg dark:bg-purple-600 dark:shadow-purple-500/25"
                    }
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="settings flex items-center gap-3 md:gap-6">
          <div className="language  md:block">
            <LanguageList />
          </div>
          <div className="theme">
            <label className="inline-flex items-center relative">
              <input
                className="peer hidden"
                id="toggle"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                aria-label={
                  darkMode ? content.switchToLight : content.switchToDark
                }
              />
              <div className="relative w-16 md:w-27.5 h-8 md:h-12.5 bg-white peer-checked:bg-zinc-500 rounded-full cursor-pointer transition-all duration-300 after:absolute after:content-[''] after:w-6 after:h-6 md:after:w-10 md:after:h-10 after:bg-linear-to-r after:from-orange-500 after:to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-1 after:left-1 md:after:top-1.25 md:after:left-1.25 active:after:w-8 md:active:after:w-12.5 peer-checked:after:left-8.5 md:peer-checked:after:left-16.25 after:transition-all after:duration-300 after:shadow-md" />
              <svg
                height={0}
                width={100}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white peer-checked:opacity-60 absolute w-4 h-4 md:w-6 md:h-6 left-2 md:left-3.25"
                aria-hidden="true"
              >
                <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z" />
              </svg>
              <svg
                height={512}
                width={512}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 md:w-6 md:h-6 right-2 md:right-3.25"
                aria-hidden="true"
              >
                <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z" />
              </svg>
            </label>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-amber-400/30 dark:hover:bg-purple-700/30 transition-colors"
            aria-label={mobileOpen ? content.closeMenu : content.openMenu}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-amber-50/95 dark:bg-gray-950/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col items-center gap-4 p-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center py-3 text-xl font-medium text-gray-900 dark:text-white hover:bg-amber-300 dark:hover:bg-purple-700 rounded-lg transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
