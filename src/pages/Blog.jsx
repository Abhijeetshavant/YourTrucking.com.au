import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Clock,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Logistics",
    "Transport",
    "Supply Chain",
    "Technology",
    "Industry News",
    "Safety",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Australian Logistics: AI and Automation in 2025",
      excerpt:
        "Discover how artificial intelligence is transforming the logistics landscape across Australia...",
      category: "Technology",
      author: "James Mitchell",
      date: "Dec 20, 2024",
      readTime: "8 min read",
      image: "/images/blog/ai-logistics.jpg",
      featured: true,
      tags: ["AI", "Automation", "Future Tech"],
    },
    {
      id: 2,
      title: "Sustainable Trucking: Our Path to Carbon Neutral by 2030",
      excerpt:
        "How Yours Trucking is leading the charge towards environmentally sustainable freight transport...",
      category: "Industry News",
      author: "Sarah Chen",
      date: "Dec 18, 2024",
      readTime: "6 min read",
      image: "/images/blog/sustainability.jpg",
      featured: true,
      tags: ["Sustainability", "Green Logistics", "Electric Trucks"],
    },
    {
      id: 3,
      title: "Navigating Mining Logistics in Remote Australia",
      excerpt:
        "Expert insights on managing complex supply chains in Australia's most challenging terrains...",
      category: "Logistics",
      author: "Michael Torres",
      date: "Dec 15, 2024",
      readTime: "10 min read",
      image: "/images/blog/mining-logistics.jpg",
      featured: false,
      tags: ["Mining", "Remote Operations", "Heavy Haulage"],
    },
    {
      id: 4,
      title: "How Real-Time Tracking Reduces Supply Chain Costs",
      excerpt:
        "The financial benefits of implementing advanced tracking systems in your logistics operations...",
      category: "Supply Chain",
      author: "Emma Williams",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      image: "/images/blog/tracking.jpg",
      featured: false,
      tags: ["GPS Tracking", "Cost Reduction", "Efficiency"],
    },
    {
      id: 5,
      title: "Safety First: Our Zero-Harm Commitment in Heavy Haulage",
      excerpt:
        "Inside our comprehensive safety protocols that protect drivers, cargo, and communities...",
      category: "Safety",
      author: "David Thompson",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      image: "/images/blog/safety.jpg",
      featured: false,
      tags: ["Safety", "Compliance", "Driver Training"],
    },
    {
      id: 6,
      title: "Interstate Freight: Optimizing Cross-Border Logistics",
      excerpt:
        "Strategies for efficient interstate freight movement across Australian state lines...",
      category: "Transport",
      author: "James Mitchell",
      date: "Dec 8, 2024",
      readTime: "9 min read",
      image: "/images/blog/interstate.jpg",
      featured: false,
      tags: ["Interstate", "Cross-Border", "Regulations"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-primary min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
              Insights & Updates
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-accent-silver/60 text-lg max-w-2xl mx-auto">
              Expert insights on logistics, transport innovation, and industry
              trends
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-silver/40"
                    size={20}
                  />
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-accent-orange focus:outline-none transition-colors"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(category.toLowerCase())
                      }
                      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                        selectedCategory === category.toLowerCase()
                          ? "bg-accent-orange text-white"
                          : "glass glass-hover text-accent-silver"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <GlassCard className="overflow-hidden group cursor-pointer">
                    <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-xs">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-accent-silver/60">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl font-bold group-hover:text-accent-orange transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-accent-silver/60">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs glass px-2 py-1 rounded-full text-accent-blue"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <motion.button
                          className="text-accent-orange flex items-center gap-2"
                          whileHover={{ gap: 8 }}
                        >
                          Read More
                          <ArrowRight size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs text-accent-blue">
                        {post.category}
                      </span>
                      <h3 className="font-heading text-lg font-bold group-hover:text-accent-orange transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-accent-silver/60 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-accent-silver/40">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <MagneticButton variant="secondary" size="lg" icon={ArrowRight}>
              Load More Articles
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
