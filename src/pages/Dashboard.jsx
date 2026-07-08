import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  FileText,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  Search,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
  Map,
  Activity,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      icon: Package,
      label: "Active Shipments",
      value: "1,247",
      change: "+12.5%",
      color: "text-accent-orange",
    },
    {
      icon: Truck,
      label: "Available Fleet",
      value: "892",
      change: "-3.2%",
      color: "text-accent-blue",
    },
    {
      icon: Users,
      label: "Active Clients",
      value: "456",
      change: "+8.7%",
      color: "text-green-400",
    },
    {
      icon: DollarSign,
      label: "Revenue (MTD)",
      value: "$4.2M",
      change: "+15.3%",
      color: "text-yellow-400",
    },
  ];

  const recentBookings = [
    {
      id: "BK-001",
      client: "BHP Mining",
      route: "Perth → Kalgoorlie",
      status: "In Transit",
      amount: "$12,500",
    },
    {
      id: "BK-002",
      client: "BlueScope Steel",
      route: "Melbourne → Sydney",
      status: "Delivered",
      amount: "$8,900",
    },
    {
      id: "BK-003",
      client: "Coles Group",
      route: "Brisbane → Cairns",
      status: "Pending",
      amount: "$15,200",
    },
    {
      id: "BK-004",
      client: "Rio Tinto",
      route: "Adelaide → Darwin",
      status: "Confirmed",
      amount: "$22,000",
    },
    {
      id: "BK-005",
      client: "Woolworths",
      route: "Sydney → Canberra",
      status: "In Transit",
      amount: "$6,800",
    },
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", id: "overview" },
    { icon: Package, label: "Bookings", id: "bookings" },
    { icon: Truck, label: "Fleet", id: "fleet" },
    { icon: Users, label: "Customers", id: "customers" },
    { icon: Users, label: "Drivers", id: "drivers" },
    { icon: FileText, label: "Invoices", id: "invoices" },
    { icon: DollarSign, label: "Payments", id: "payments" },
    { icon: BarChart3, label: "Analytics", id: "analytics" },
    { icon: FileText, label: "Reports", id: "reports" },
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];

  return (
    <div className="bg-primary min-h-screen flex">
      {/* Sidebar */}
      <motion.aside
        className="w-64 bg-primary-300 border-r border-white/5 p-6 hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold gradient-text">
            YOURS
          </h1>
          <p className="text-xs text-accent-silver/40 mt-1">Admin Dashboard</p>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                activeTab === item.id
                  ? "bg-accent-orange/10 text-accent-orange"
                  : "text-accent-silver/60 hover:text-white hover:bg-white/5"
              }`}
              whileHover={{ x: 5 }}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {item.id === "notifications" && (
                <span className="ml-auto bg-accent-orange text-white text-xs px-2 py-0.5 rounded-full">
                  5
                </span>
              )}
            </motion.button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors text-sm">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 bg-primary/80 backdrop-blur-xl border-b border-white/5 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-silver/40"
                size={18}
              />
              <input
                type="text"
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 w-80 focus:border-accent-orange focus:outline-none transition-colors text-sm"
                placeholder="Search anything..."
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell size={20} className="text-accent-silver/60" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-orange rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-orange to-accent-blue" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">
              Welcome back, James
            </h2>
            <p className="text-accent-silver/60">
              Here's what's happening with your fleet today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={stat.color} size={24} />
                    <span
                      className={`text-xs ${
                        stat.change.startsWith("+")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-3xl font-display font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-accent-silver/60">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Charts & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart */}
            <div className="lg:col-span-2">
              <GlassCard>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl font-bold">
                    Revenue Overview
                  </h3>
                  <div className="flex gap-2">
                    <button className="glass px-3 py-1 rounded-full text-xs">
                      7D
                    </button>
                    <button className="bg-accent-orange px-3 py-1 rounded-full text-xs">
                      30D
                    </button>
                    <button className="glass px-3 py-1 rounded-full text-xs">
                      90D
                    </button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <Activity className="text-accent-silver/20" size={48} />
                  <span className="text-accent-silver/40 ml-4">
                    Revenue Chart Placeholder
                  </span>
                </div>
              </GlassCard>
            </div>

            {/* Recent Bookings */}
            <div>
              <GlassCard>
                <h3 className="font-heading text-xl font-bold mb-4">
                  Recent Bookings
                </h3>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-medium">{booking.client}</p>
                        <p className="text-xs text-accent-silver/40">
                          {booking.route}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{booking.amount}</p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            booking.status === "In Transit"
                              ? "bg-blue-400/10 text-blue-400"
                              : booking.status === "Delivered"
                                ? "bg-green-400/10 text-green-400"
                                : booking.status === "Pending"
                                  ? "bg-yellow-400/10 text-yellow-400"
                                  : "bg-accent-orange/10 text-accent-orange"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
