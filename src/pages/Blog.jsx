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

// Import blog images from assets
import trucking1 from "../assets/trucking1.jpg";
import interstate from "../assets/interstate.png";
import frontviewtruck from "../assets/frontviewtruck.jpg";
import heavyload from "../assets/heavyload.jpg";
import oversize from "../assets/oversize.jpg";
import standtruck2 from "../assets/standtruck2.jpg";
import roadTrain from "../assets/roadTrain.jpg";
import muncipleConsole from "../assets/muncipalConsole.jpg";
import government from "../assets/government.jpg";

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
        "Discover how artificial intelligence is transforming the logistics landscape across Australia with smart routing and predictive analytics...",
      category: "Technology",
      author: "James Mitchell",
      date: "Dec 20, 2024",
      readTime: "8 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/frontviewtruck.jpg",
      featured: true,
      tags: ["AI", "Automation", "Future Tech"],
    },
    {
      id: 2,
      title: "Sustainable Trucking: Our Path to Carbon Neutral by 2030",
      excerpt:
        "How Yours Trucking is leading the charge towards environmentally sustainable freight transport with electric and hydrogen vehicles...",
      category: "Industry News",
      author: "Sarah Chen",
      date: "Dec 18, 2024",
      readTime: "6 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/interstate.png",
      featured: true,
      tags: ["Sustainability", "Green Logistics", "Electric Trucks"],
    },
    {
      id: 3,
      title: "Navigating Mining Logistics in Remote Australia",
      excerpt:
        "Expert insights on managing complex supply chains in Australia's most challenging terrains and remote mining operations...",
      category: "Logistics",
      author: "Michael Torres",
      date: "Dec 15, 2024",
      readTime: "10 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/oversize.jpg",
      featured: false,
      tags: ["Mining", "Remote Operations", "Heavy Haulage"],
    },
    {
      id: 4,
      title: "How Real-Time Tracking Reduces Supply Chain Costs",
      excerpt:
        "The financial benefits of implementing advanced tracking systems in your logistics operations and improving delivery efficiency...",
      category: "Supply Chain",
      author: "Emma Williams",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/trucking1.jpg",
      featured: false,
      tags: ["GPS Tracking", "Cost Reduction", "Efficiency"],
    },
    {
      id: 5,
      title: "Safety First: Our Zero-Harm Commitment in Heavy Haulage",
      excerpt:
        "Inside our comprehensive safety protocols that protect drivers, cargo, and communities across Australian highways...",
      category: "Safety",
      author: "David Thompson",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/heavyload.jpg",
      featured: false,
      tags: ["Safety", "Compliance", "Driver Training"],
    },
    {
      id: 6,
      title: "Interstate Freight: Optimizing Cross-Border Logistics",
      excerpt:
        "Strategies for efficient interstate freight movement across Australian state lines and border regulations...",
      category: "Transport",
      author: "James Mitchell",
      date: "Dec 8, 2024",
      readTime: "9 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/standwhitetruck.jpg",
      featured: false,
      tags: ["Interstate", "Cross-Border", "Regulations"],
    },
    {
      id: 7,
      title: "Local Council Logistics: Supporting Community Infrastructure",
      excerpt:
        "How municipal logistics services are evolving to support growing communities with waste management and road maintenance...",
      category: "Industry News",
      author: "Sarah Chen",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/muncipalConsole.jpg",
      featured: false,
      tags: ["Local Council", "Infrastructure", "Community"],
    },
    {
      id: 8,
      title: "Government Contracts: Meeting Compliance Standards",
      excerpt:
        "Understanding the requirements for secure government logistics contracts and maintaining compliance...",
      category: "Logistics",
      author: "Michael Torres",
      date: "Dec 1, 2024",
      readTime: "8 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/assets/government.jpg",
      featured: false,
      tags: ["Government", "Compliance", "Security"],
    },
    {
      id: 9,
      title: "Road Train Operations: Mastering Australia's Long Haul Routes",
      excerpt:
        "Behind the scenes of operating Australia's iconic road trains across the country's longest freight routes...",
      category: "Transport",
      author: "David Thompson",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      image: "https://ik.imagekit.io/ewj4kpfrr/RoadTrain.pngzh",
      featured: false,
      tags: ["Road Train", "Long Haul", "Outback"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
              trends from Australia's leading freight network.
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-accent-orange focus:outline-none transition-colors text-white"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
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

      {/* Blog Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <GlassCard
                    className="overflow-hidden group cursor-pointer h-full"
                    tilt
                    glow
                  >
                    <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.style.background =
                            "linear-gradient(135deg, #1a1a2e, #16213e)";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-accent-silver/60 flex-wrap">
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

                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex gap-2 flex-wrap">
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
                          className="text-accent-orange flex items-center gap-2 text-sm font-medium"
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
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard
                    className="group cursor-pointer h-full overflow-hidden"
                    tilt
                    glow
                  >
                    <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.style.background =
                            "linear-gradient(135deg, #1a1a2e, #16213e)";
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] glass px-2 py-1 rounded-full text-accent-orange">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-accent-silver/40">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold group-hover:text-accent-orange transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-accent-silver/60 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-1.5 flex-wrap">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] glass px-2 py-0.5 rounded-full text-accent-blue"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <motion.button
                          className="text-accent-orange text-sm flex items-center gap-1"
                          whileHover={{ gap: 6 }}
                        >
                          Read
                          <ArrowRight size={14} />
                        </motion.button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Search
                className="text-accent-silver/20 mx-auto mb-4"
                size={64}
              />
              <p className="text-accent-silver/60 text-lg">
                No articles match your search
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-accent-orange mt-4 underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <MagneticButton variant="secondary" size="lg" icon={ArrowRight}>
                Load More Articles
              </MagneticButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
