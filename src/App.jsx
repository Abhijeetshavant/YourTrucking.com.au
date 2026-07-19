import { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// ✅ Vercel Monitoring
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CursorFollower from "./components/ui/CursorFollower";
import LoadingScreen from "./components/ui/LoadingScreen";
import FloatingActions from "./components/ui/FloatingActions";

// Lazy Load Pages for Better Performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const FleetPage = lazy(() => import("./pages/Fleet"));
const Booking = lazy(() => import("./pages/Booking"));
const Tracking = lazy(() => import("./pages/Tracking"));
const IndustriesPage = lazy(() => import("./pages/Industries"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));

// Loading fallback for lazy loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-accent-orange/30 border-t-accent-orange rounded-full animate-spin mx-auto mb-4" />
      <p className="text-accent-silver/60">Loading...</p>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Animated page wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-primary text-white relative overflow-x-hidden">
      {/* Hide custom cursor on mobile */}
      <div className="hidden md:block">
        <CursorFollower />
      </div>

      <ScrollToTop />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="overflow-x-hidden">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageWrapper>
                    <Services />
                  </PageWrapper>
                }
              />
              <Route
                path="/fleet"
                element={
                  <PageWrapper>
                    <FleetPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/booking"
                element={
                  <PageWrapper>
                    <Booking />
                  </PageWrapper>
                }
              />
              <Route
                path="/tracking"
                element={
                  <PageWrapper>
                    <Tracking />
                  </PageWrapper>
                }
              />
              <Route
                path="/industries"
                element={
                  <PageWrapper>
                    <IndustriesPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageWrapper>
                    <Blog />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route
                path="/dashboard/*"
                element={
                  <PageWrapper>
                    <Dashboard />
                  </PageWrapper>
                }
              />
              <Route
                path="/privacy"
                element={
                  <PageWrapper>
                    <PrivacyPolicy />
                  </PageWrapper>
                }
              />
              <Route
                path="/terms"
                element={
                  <PageWrapper>
                    <TermsConditions />
                  </PageWrapper>
                }
              />
              <Route
                path="/404"
                element={
                  <PageWrapper>
                    <NotFound />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <NotFound />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />

      {/* Floating WhatsApp & AI Chatbot */}
      <FloatingActions />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        document.dispatchEvent(new CustomEvent("close-all-modals"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {/* Offline Banner */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-2 z-[9999] text-sm">
          You are currently offline. Some features may not be available.
        </div>
      )}

      {/* Main App */}
      <Router>
        <AppContent />
      </Router>

      {/* ✅ Vercel Speed Insights - Tracks Core Web Vitals */}
      <SpeedInsights />

      {/* ✅ Vercel Analytics - Tracks page views & visitors */}
      <Analytics />
    </>
  );
}

export default App;
