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
  Shield,
  CheckCircle,
  XCircle,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const whatsappNumber = "+61416879499";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const whatsappMessage = encodeURIComponent(
      `*📬 New Inquiry - Yours Trucking Australia*\n\n` +
        `*Inquiry Type:* ${formData.inquiryType.toUpperCase()}\n\n` +
        `*👤 Personal Information*\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Company: ${formData.company || "Not provided"}\n\n` +
        `*📋 Inquiry Details*\n` +
        `Subject: ${formData.subject || "Not provided"}\n` +
        `Message: ${formData.message}\n\n` +
        `---\n` +
        `📅 Submitted: ${new Date().toLocaleString()}\n` +
        `🌐 Source: Website Contact Form`,
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    try {
      window.open(whatsappUrl, "_blank");
      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: "Melbourne (Head Office)",
      address: "Mickleham Melbourne Victoria 3064",
      phone: "+61 0416879499",
      email: "Khehrakawar44@gmail.com",
      hours: "24/7",
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

                {submitStatus === "success" && (
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-green-400/10 border border-green-400/30 flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle
                      className="text-green-400 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="text-green-400 font-medium text-sm">
                        Message Sent Successfully!
                      </p>
                      <p className="text-green-400/70 text-xs mt-1">
                        WhatsApp opened with your inquiry. We'll respond
                        shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-red-400/10 border border-red-400/30 flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <XCircle className="text-red-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-red-400 font-medium text-sm">
                        Failed to send
                      </p>
                      <p className="text-red-400/70 text-xs mt-1">
                        Please try again or call us at +61 0416879499
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-accent-silver mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-orange focus:outline-none transition-colors resize-none text-white"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={isSubmitting ? MessageSquare : Send}
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send via WhatsApp"}
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
                  {/* ✅ Phone - Correct */}
                  <a
                    href="tel:+61416879499"
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center group-hover:bg-accent-orange/20 transition-colors">
                      <Phone className="text-accent-orange" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-accent-silver/60">
                        24/7 Support Line
                      </p>
                      <p className="font-bold group-hover:text-accent-orange transition-colors">
                        +61 0416879499
                      </p>
                    </div>
                  </a>

                  {/* ✅ Email - FIXED with mailto: */}
                  <a
                    href="mailto:Khehrakawar44@gmail.com"
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                      <Mail className="text-accent-blue" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-accent-silver/60">Email</p>
                      <p className="font-bold group-hover:text-accent-blue transition-colors">
                        Khehrakawar44@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* ✅ WhatsApp Chat */}
                  <a
                    href="https://wa.me/61416879499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center group-hover:bg-green-400/20 transition-colors">
                      <MessageSquare className="text-green-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-accent-silver/60">
                        WhatsApp Chat
                      </p>
                      <p className="font-bold group-hover:text-green-400 transition-colors">
                        Chat on WhatsApp
                      </p>
                    </div>
                  </a>
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
                <a href="tel:+61416879499">
                  <MagneticButton variant="primary" size="md" icon={Phone}>
                    +61 0416879499
                  </MagneticButton>
                </a>
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
                    <span>Open 24 Hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-accent-silver/60">Saturday</span>
                    <span>Open 24 Hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-accent-silver/60">Sunday</span>
                    <span>Open 24 Hours</span>
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
                <GlassCard className="h-full group hover:border-accent-orange/30 transition-all">
                  <Building2
                    className="text-accent-orange mb-4 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <h3 className="font-heading text-lg font-bold mb-3">
                    {office.city}
                  </h3>
                  <div className="space-y-2 text-sm text-accent-silver/60">
                    <p className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="mt-1 flex-shrink-0 text-accent-orange"
                      />
                      {office.address}
                    </p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 hover:text-accent-orange transition-colors"
                    >
                      <Phone size={16} />
                      {office.phone}
                    </a>
                    {/* ✅ FIXED: mailto link */}
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 hover:text-accent-blue transition-colors"
                    >
                      <Mail size={16} />
                      {office.email}
                    </a>
                    <p className="flex items-center gap-2">
                      <Clock size={16} className="text-green-400" />
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0!2d144.9631!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2e3b0e0e0e0!2s456%20Collins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Yours Trucking Australia - Melbourne Office"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 z-10 pointer-events-auto">
            <GlassCard className="p-4 backdrop-blur-xl">
              <p className="text-sm font-bold text-white mb-1">
                📍 Melbourne Head Office
              </p>
              <p className="text-xs text-accent-silver/60">
                456 Collins Street, Melbourne VIC 3000
              </p>
              <a
                href="https://maps.google.com/?q=456+Collins+Street+Melbourne+VIC+3000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-orange text-xs mt-2 inline-block hover:underline"
              >
                Open in Google Maps →
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
