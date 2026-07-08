import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Custom Social Media Icons (since lucide-react doesn't include branded icons)
const Facebook = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Twitter = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Linkedin = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Instagram = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Youtube = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Fleet", path: "/fleet" },
      { label: "Contact", path: "/contact" },
    ],
    Services: [
      { label: "Local Transport", path: "/services" },
      { label: "Interstate Freight", path: "/services" },
      { label: "Mining Logistics", path: "/services" },
      { label: "Heavy Machinery", path: "/services" },
      { label: "Express Delivery", path: "/services" },
    ],
    Industries: [
      { label: "Construction", path: "/industries" },
      { label: "Mining", path: "/industries" },
      { label: "Manufacturing", path: "/industries" },
      { label: "Retail", path: "/industries" },
      { label: "Agriculture", path: "/industries" },
    ],
    Support: [
      { label: "Track Shipment", path: "/tracking" },
      { label: "Get Quote", path: "/booking" },
      { label: "FAQ", path: "/#faq" },
      { label: "Blog", path: "/blog" },
      { label: "Privacy Policy", path: "/privacy" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: Facebook, color: "hover:text-blue-500", label: "Facebook" },
    { icon: Twitter, color: "hover:text-sky-400", label: "Twitter" },
    { icon: Instagram, color: "hover:text-pink-400", label: "Instagram" },
    { icon: Youtube, color: "hover:text-red-400", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary-300 border-t border-white/5">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Stay <span className="gradient-text">Connected</span>
              </h3>
              <p className="text-accent-silver/60">
                Subscribe to our newsletter for logistics insights and updates.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
              />
              <motion.button
                className="bg-accent-orange text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Truck className="text-accent-orange" size={32} />
              <div>
                <h2 className="font-display text-xl font-bold">
                  <span className="text-white">YOURS</span>
                  <span className="gradient-text ml-2">TRUCKING</span>
                </h2>
                <p className="text-[10px] text-accent-silver/40 tracking-widest uppercase">
                  Australia
                </p>
              </div>
            </Link>

            <p className="text-accent-silver/60 mb-6 text-sm leading-relaxed">
              Australia's most trusted freight and logistics partner. Moving the
              nation forward with technology, reliability, and unmatched service
              quality since 1988.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:1300878254"
                className="flex items-center gap-3 text-sm text-accent-silver/60 hover:text-accent-orange transition-colors"
              >
                <Phone size={16} className="text-accent-orange" />
                <span>1300 TRUCKING (1300 878 254)</span>
              </a>
              <a
                href="mailto:info@yourstrucking.com.au"
                className="flex items-center gap-3 text-sm text-accent-silver/60 hover:text-accent-orange transition-colors"
              >
                <Mail size={16} className="text-accent-orange" />
                <span>info@yourstrucking.com.au</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-accent-silver/60">
                <MapPin size={16} className="text-accent-orange" />
                <span>Level 25, 123 George Street, Sydney NSW 2000</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className={`glass p-2 rounded-full text-accent-silver/60 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-accent-silver/60 hover:text-accent-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-accent-silver/40">
              © {new Date().getFullYear()} Yours Trucking Australia. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-accent-silver/40 hover:text-accent-silver/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-accent-silver/40 hover:text-accent-silver/60 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
