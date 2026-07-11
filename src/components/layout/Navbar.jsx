import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck, ChevronDown, Search, Phone } from "lucide-react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Services",
      path: "/services",
      hasMegaMenu: true,
    },
    { label: "Fleet", path: "/fleet" },
    { label: "Industries", path: "/industries" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-8xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Truck className="text-accent-orange" size={32} />
              </motion.div>
              <div>
                <h1 className="font-display text-xl font-bold tracking-tight">
                  <span className="text-white">YOURS</span>
                  <span className="gradient-text ml-2">TRUCKING</span>
                </h1>
                <p className="text-[10px] text-accent-silver/40 tracking-widest uppercase">
                  Australia
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasMegaMenu && setIsMegaMenuOpen(true)
                  }
                  onMouseLeave={() =>
                    item.hasMegaMenu && setIsMegaMenuOpen(false)
                  }
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      location.pathname === item.path
                        ? "text-accent-orange bg-accent-orange/10"
                        : "text-accent-silver/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    {item.hasMegaMenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isMegaMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/tracking">
                <button className="glass glass-hover px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <Search size={16} />
                  <span>Track</span>
                </button>
              </Link>

              <a
                href="tel:9644000090"
                className="flex items-center gap-2 text-sm text-accent-silver/80 hover:text-accent-orange transition-colors"
              >
                <Phone size={16} />
                <span>9644000090</span>
              </a>

              <Link to="/booking">
                <motion.button
                  className="bg-accent-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold glow-orange"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden glass p-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
