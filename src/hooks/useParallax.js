import { useEffect, useRef, useState } from "react";

export const useParallax = (speed = 0.5, direction = "vertical") => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - windowCenter;

      setOffset(distanceFromCenter * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (direction === "vertical") {
      element.style.transform = `translateY(${offset}px)`;
    } else if (direction === "horizontal") {
      element.style.transform = `translateX(${offset}px)`;
    } else if (direction === "scale") {
      const scale = 1 + Math.abs(offset) * 0.001;
      element.style.transform = `scale(${scale})`;
    } else if (direction === "rotate") {
      element.style.transform = `rotate(${offset * 0.05}deg)`;
    }
  }, [offset, direction]);

  return ref;
};

export default useParallax;
