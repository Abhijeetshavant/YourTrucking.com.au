import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () => {
  const lenisRef = useRef(null);

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

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
};

export const scrollTo = (target, options = {}) => {
  if (!lenisRef.current) return;

  const defaultOptions = {
    offset: 0,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    ...options,
  };

  if (typeof target === "string") {
    const element = document.querySelector(target);
    if (element) {
      lenisRef.current.scrollTo(element, defaultOptions);
    }
  } else if (typeof target === "number") {
    lenisRef.current.scrollTo(target, defaultOptions);
  }
};

export default useSmoothScroll;
