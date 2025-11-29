import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Scroll Effect for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleHome = () => {
    navigate("/");
    setMobileDrawerOpen(false);
  };

  // Animation Variants
  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto relative lg:text-sm max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div
            onClick={handleHome}
            className="flex items-center flex-shrink-0 cursor-pointer group"
          >
            <img
              className="h-10 w-auto mr-2 transition-transform duration-300 group-hover:scale-105"
              src={logo}
              alt="DoctorKays Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-2 bg-gray-50/50 p-1.5 rounded-full border border-gray-100/50 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                    location.pathname === item.href
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray-600 hover:text-primary hover:bg-gray-100/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://consultation.doctorkays.com/"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-primarydark rounded-full hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={toggleNavbar}
              className="p-2 text-gray-800 focus:outline-none bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-white z-40 origin-top flex flex-col items-center justify-center"
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    variants={linkVars}
                    initial="initial"
                    animate="open"
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={`text-3xl font-bold tracking-tight font-grotesque ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-gray-900"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                </div>
              ))}

              <div className="mt-8">
                <motion.div
                  variants={linkVars}
                  initial="initial"
                  animate="open"
                >
                  <a
                    href="https://consultation.doctorkays.com/"
                    className="group relative ease-in-out
                  shadow-[0_6px_0_0] shadow-primarydark
                  hover:translate-y-1
                  hover:shadow-[0_2px_0_0] hover:shadow-primarydark
                  active:translate-y-1.5
                  active:shadow-none
                                    inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-blue-700"
                  >
                    Book a Consultation
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
