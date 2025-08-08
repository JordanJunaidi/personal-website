import React, { useEffect, useRef, useState } from "react";
import "./FadeInSection.css";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  /** If true, animate only the first time it's seen */
  once?: boolean;
  /** IntersectionObserver options */
  threshold?: number | number[];
  rootMargin?: string;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  once = false,
  threshold = 0,
  rootMargin = "0px 0px -10% 0px",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (once) {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target); // stop after first time
            }
          } else {
            // replay animation: add class when entering, remove when leaving
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
