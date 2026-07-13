import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  Building2,
  Search,
  Layers,
  ZoomIn,
  ZoomOut,
  Truck,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef(null);

  const locations = [
    // {
    //   id: "sydney",
    //   city: "Sydney (Head Office)",
    //   address: "Level 25, 123 George Street, Sydney NSW 2000",
    //   phone: "+61 2 8000 1234",
    //   email: "sydney@yourstrucking.com.au",
    //   hours: "Mon-Fri: 8:00 AM - 6:00 PM",
    //   coordinates: { x: 85, y: 65 },
    //   type: "headquarters",
    //   staff: "250+",
    //   facilities: [
    //     "Corporate Office",
    //     "Distribution Center",
    //     "Maintenance Facility",
    //   ],
    // },
    {
      id: "melbourne",
      city: "Melbourne",
      address: "Suite 15, 456 Collins Street, Melbourne VIC 3000",
      phone: "+61 3 9000 5678",
      email: "melbourne@yourstrucking.com.au",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      coordinates: { x: 75, y: 75 },
      type: "regional",
      staff: "180+",
      facilities: ["Regional Office", "Warehouse", "Cross-dock Facility"],
    },
    // {
    //   id: "brisbane",
    //   city: "Brisbane",
    //   address: "Unit 8, 789 Ann Street, Brisbane QLD 4000",
    //   phone: "+61 7 3000 9012",
    //   email: "brisbane@yourstrucking.com.au",
    //   hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    //   coordinates: { x: 90, y: 45 },
    //   type: "regional",
    //   staff: "120+",
    //   facilities: ["Regional Office", "Distribution Center"],
    // },
    //  {
    //   id: "perth",
    //   city: "Perth",
    //   address: "Level 10, 321 Hay Street, Perth WA 6000",
    //   phone: "+61 8 6000 3456",
    //   email: "perth@yourstrucking.com.au",
    //   hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    //   coordinates: { x: 10, y: 60 },
    //   type: "regional",
    //   staff: "150+",
    //   facilities: ["Regional Office", "Mining Logistics Hub", "Warehouse"],
    // },
    // {
    //   id: "adelaide",
    //   city: "Adelaide",
    //   address: "42 Franklin Street, Adelaide SA 5000",
    //   phone: "+61 8 7000 7890",
    //   email: "adelaide@yourstrucking.com.au",
    //   hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    //   coordinates: { x: 60, y: 68 },
    //   type: "regional",
    //   staff: "90+",
    //   facilities: ["Regional Office", "Warehouse"],
    // },
    // {
    //   id: "darwin",
    //   city: "Darwin",
    //   address: "15 Smith Street, Darwin NT 0800",
    //   phone: "+61 8 8900 2345",
    //   email: "darwin@yourstrucking.com.au",
    //   hours: "Mon-Fri: 8:00 AM - 4:00 PM",
    //   coordinates: { x: 50, y: 15 },
    //   type: "remote",
    //   staff: "50+",
    //   facilities: ["Remote Operations Center", "Warehouse"],
    // },
    // {
    //   id: "hobart",
    //   city: "Hobart",
    //   address: "88 Macquarie Street, Hobart TAS 7000",
    //   phone: "+61 3 6200 6789",
    //   email: "hobart@yourstrucking.com.au",
    //   hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    //   coordinates: { x: 72, y: 88 },
    //   type: "regional",
    //   staff: "40+",
    //   facilities: ["Regional Office", "Cross-dock Facility"],
    // },
    // {
    //   id: "kalgoorlie",
    //   city: "Kalgoorlie",
    //   address: "25 Hannan Street, Kalgoorlie WA 6430",
    //   phone: "+61 8 9000 3456",
    //   email: "kalgoorlie@yourstrucking.com.au",
    //   hours: "Mon-Fri: 7:00 AM - 5:00 PM",
    //   coordinates: { x: 15, y: 55 },
    //   type: "mining",
    //   staff: "80+",
    //   facilities: [
    //     "Mining Logistics Hub",
    //     "Heavy Vehicle Workshop",
    //     "Warehouse",
    //   ],
    // },
  ];

  const routes = [
    { from: "perth", to: "kalgoorlie", active: true },
    { from: "sydney", to: "melbourne", active: true },
    { from: "brisbane", to: "sydney", active: true },
    { from: "melbourne", to: "adelaide", active: true },
    { from: "adelaide", to: "perth", active: false },
    { from: "darwin", to: "brisbane", active: false },
  ];

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case "headquarters":
        return "bg-accent-orange";
      case "regional":
        return "bg-accent-blue";
      case "mining":
        return "bg-yellow-400";
      case "remote":
        return "bg-green-400";
      default:
        return "bg-accent-silver";
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case "headquarters":
        return "Head Office";
      case "regional":
        return "Regional Hub";
      case "mining":
        return "Mining Hub";
      case "remote":
        return "Remote Center";
      default:
        return "Location";
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-orange font-heading text-sm tracking-widest uppercase">
            Our Network
          </span>
          <h2 className="font-display text-5xl font-bold mt-4 mb-6">
            Nationwide <span className="gradient-text">Coverage</span>
          </h2>
          <p className="text-accent-silver/60 text-lg max-w-3xl mx-auto">
            Strategic locations across Australia ensuring fast, reliable service
            wherever you need us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <GlassCard className="h-[600px] relative overflow-hidden">
              {/* Map Controls */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button className="glass p-2 rounded-lg hover:bg-white/10">
                  <ZoomIn size={18} />
                </button>
                <button className="glass p-2 rounded-lg hover:bg-white/10">
                  <ZoomOut size={18} />
                </button>
                <button className="glass p-2 rounded-lg hover:bg-white/10">
                  <Layers size={18} />
                </button>
              </div>

              {/* Australia Map SVG */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Australia outline (simplified) */}
                  <motion.path
                    d="M40,30 Q60,20 80,30 Q100,25 120,35 Q140,30 160,45 Q170,60 165,80 Q160,95 140,100 Q120,110 100,105 Q80,100 65,95 Q50,85 45,65 Q38,50 40,30Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />

                  {/* Routes */}
                  {routes.map((route, index) => {
                    const fromLoc = locations.find((l) => l.id === route.from);
                    const toLoc = locations.find((l) => l.id === route.to);
                    if (!fromLoc || !toLoc) return null;

                    return (
                      <motion.line
                        key={index}
                        x1={`${fromLoc.coordinates.x}%`}
                        y1={`${fromLoc.coordinates.y}%`}
                        x2={`${toLoc.coordinates.x}%`}
                        y2={`${toLoc.coordinates.y}%`}
                        stroke={
                          route.active ? "#FF4C00" : "rgba(255,255,255,0.1)"
                        }
                        strokeWidth={route.active ? "2" : "1"}
                        strokeDasharray={route.active ? "0" : "5,5"}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          opacity: route.active ? 1 : 0.5,
                        }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    );
                  })}

                  {/* Animated trucks on routes */}
                  {routes
                    .filter((r) => r.active)
                    .map((route, index) => {
                      const fromLoc = locations.find(
                        (l) => l.id === route.from,
                      );
                      const toLoc = locations.find((l) => l.id === route.to);
                      if (!fromLoc || !toLoc) return null;

                      return (
                        <motion.g key={`truck-${index}`}>
                          <motion.circle
                            r="3"
                            fill="#FF4C00"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                              duration: 4,
                              delay: index * 1.5,
                              repeat: Infinity,
                              repeatDelay: 2,
                            }}
                          >
                            <animateMotion
                              dur="4s"
                              repeatCount="indefinite"
                              begin={`${index * 1.5}s`}
                              path={`M${fromLoc.coordinates.x},${fromLoc.coordinates.y} L${toLoc.coordinates.x},${toLoc.coordinates.y}`}
                            />
                          </motion.circle>
                        </motion.g>
                      );
                    })}

                  {/* Location Markers */}
                  {locations.map((location) => (
                    <motion.g
                      key={location.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.5,
                      }}
                      onClick={() => setSelectedLocation(location)}
                      className="cursor-pointer"
                    >
                      {/* Pulse ring */}
                      <motion.circle
                        cx={`${location.coordinates.x}%`}
                        cy={`${location.coordinates.y}%`}
                        r="4"
                        fill="none"
                        stroke={
                          location.type === "headquarters"
                            ? "#FF4C00"
                            : "#00C2FF"
                        }
                        strokeWidth="2"
                        initial={{ opacity: 0.8, r: 2 }}
                        animate={{ opacity: 0, r: 8 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Marker dot */}
                      <circle
                        cx={`${location.coordinates.x}%`}
                        cy={`${location.coordinates.y}%`}
                        r="3"
                        fill={
                          location.type === "headquarters"
                            ? "#FF4C00"
                            : "#00C2FF"
                        }
                      />

                      {/* City label */}
                      <text
                        x={`${location.coordinates.x}%`}
                        y={`${location.coordinates.y - 5}%`}
                        textAnchor="middle"
                        fill="white"
                        fontSize="3"
                        fontWeight="bold"
                      >
                        {location.city.split("(")[0].trim()}
                      </text>
                    </motion.g>
                  ))}
                </svg>
              </div>

              {/* Map Overlay Info */}
              {selectedLocation && (
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <GlassCard className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${getTypeColor(selectedLocation.type)}`}
                        />
                        <span className="font-bold">
                          {selectedLocation.city}
                        </span>
                        <span className="text-xs glass px-2 py-0.5 rounded-full">
                          {getTypeBadge(selectedLocation.type)}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedLocation(null)}
                        className="text-accent-silver/40 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="space-y-1 text-sm text-accent-silver/60">
                      <p>{selectedLocation.address}</p>
                      <p>{selectedLocation.phone}</p>
                      <p>{selectedLocation.hours}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </GlassCard>
          </div>

          {/* Locations List */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            <div className="relative mb-4">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-silver/40"
                size={18}
              />
              <input
                type="text"
                placeholder="Search locations..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-accent-orange focus:outline-none"
              />
            </div>

            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedLocation(location)}
              >
                <GlassCard className="cursor-pointer group hover:border-accent-orange/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getTypeColor(location.type)}`}
                    />
                    <div className="flex-1">
                      <h3 className="font-bold group-hover:text-accent-orange transition-colors">
                        {location.city}
                      </h3>
                      <p className="text-sm text-accent-silver/60 mt-1">
                        {location.address}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-accent-silver/40">
                        <span className="flex items-center gap-1">
                          <Users size={12} />
                          {location.staff}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 size={12} />
                          {location.facilities.length} facilities
                        </span>
                      </div>
                    </div>
                    <Navigation
                      className="text-accent-silver/20 group-hover:text-accent-orange transition-colors"
                      size={20}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Strategic Locations", value: "8", suffix: "+" },
            { label: "States Covered", value: "7", suffix: "" },
            { label: "Staff Nationwide", value: "1000", suffix: "+" },
            { label: "Facilities", value: "25", suffix: "+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="font-display text-3xl font-bold gradient-text">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-accent-silver/60 mt-1">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
