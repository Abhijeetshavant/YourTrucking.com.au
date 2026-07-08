import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building2,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const offices = [
    {
      city: "Sydney (Head Office)",
      address: "Level 25, 123 George Street, Sydney NSW 2000",
      phone: "+61 2 8000 1234",
      email: "sydney@yourstrucking.com.au",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
    },
    {
      city: "Melbourne",
      address: "Suite 15, 456 Collins Street, Melbourne VIC 3000",
      phone: "+61 3 9000 5678",
      email: "melbourne@yourstrucking.com.au",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
    },
    {
      city: "Brisbane",
      address: "Unit 8, 789 Ann Street, Brisbane QLD 4000",
      phone: "+61 7 3000 9012",
      email: "brisbane@yourstrucking.com.au",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    },
    {
      city: "Perth",
      address: "Level 10, 321 Hay Street, Perth WA 6000",
      phone: "+61 8 6000 3456",
      email: "perth@yourstrucking.com.au",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <div className="bg-primary min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-accent-silver/60 text-lg max-w-2xl mx-auto">
              Ready to move? Let's discuss your logistics needs. Our team is
              available 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard>
                <h2 className="font-display text-2xl font-bold mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-accent-silver mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-accent-silver mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-accent-silver mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                        placeholder="+61 4XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-accent-silver mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Inquiry Type
                    </label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inquiryType: e.target.value,
                        })
                      }
                    >
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="booking">Book a Truck</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-accent-silver mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows="5"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <MagneticButton
                    variant="primary"
                    size="lg"
                    icon={Send}
                    className="w-full"
                  >
                    Send Message
                  </MagneticButton>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Quick Contact */}
              <GlassCard>
                <h3 className="font-display text-xl font-bold mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center">
                      <Phone className="text-accent-orange" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-accent-silver/60">
                        24/7 Support Line
                      </p>
                      <p className="font-bold">1300 TRUCKING</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                      <Mail className="text-accent-blue" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-accent-silver/60">Email</p>
                      <p className="font-bold">info@yourstrucking.com.au</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center">
                      <MessageSquare className="text-green-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-accent-silver/60">Live Chat</p>
                      <p className="font-bold">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Emergency Support */}
              <GlassCard className="border-accent-orange/30">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-accent-orange" size={24} />
                  <h3 className="font-display text-xl font-bold">
                    Emergency Support
                  </h3>
                </div>
                <p className="text-accent-silver/60 mb-4">
                  For urgent matters requiring immediate attention, our
                  emergency response team is available 24/7.
                </p>
                <MagneticButton variant="primary" size="md" icon={Phone}>
                  1800 EMERGENCY
                </MagneticButton>
              </GlassCard>

              {/* Business Hours */}
              <GlassCard>
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="text-accent-blue" size={24} />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-accent-silver/60">
                      Monday - Friday
                    </span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-accent-silver/60">Saturday</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-accent-silver/60">Sunday</span>
                    <span className="text-accent-orange">Emergency Only</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-primary-200/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4">
              Our <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-accent-silver/60">
              Strategic locations across Australia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <Building2 className="text-accent-orange mb-4" size={32} />
                  <h3 className="font-heading text-lg font-bold mb-3">
                    {office.city}
                  </h3>
                  <div className="space-y-2 text-sm text-accent-silver/60">
                    <p className="flex items-start gap-2">
                      <MapPin size={16} className="mt-1 flex-shrink-0" />
                      {office.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={16} />
                      {office.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} />
                      {office.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock size={16} />
                      {office.hours}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-accent-orange mx-auto mb-4" size={48} />
            <p className="text-2xl font-bold mb-2">Interactive Map</p>
            <p className="text-accent-silver/60">Google Maps Integration</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
